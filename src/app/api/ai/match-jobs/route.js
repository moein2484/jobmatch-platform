import { NextResponse } from "next/server";

import connectToDb from "@/utils/db";
import Job from "@/models/jobsSchema";
import JobProfileModel from "@/models/jobProfileSchema";

import { buildProfileText } from "@/lib/ai/buildProfileText";
import { generateEmbedding } from "@/lib/ai/embedding";
import { cosineSimilarity } from "@/lib/ai/cosineSimilarity";

export async function POST(request) {
  try {
    await connectToDb();

    const body = await request.json();

    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        {
          message: "userId is required",
        },
        { status: 400 }
      );
    }

    // Find user's profile
    const profile = await JobProfileModel.findOne({
      user: userId,
    }).lean();

    if (!profile) {
      return NextResponse.json(
        {
          message: "Job profile not found",
        },
        { status: 404 }
      );
    }

    // Build profile text
    const profileText = buildProfileText(profile);

    // Generate profile embedding
    const profileEmbedding = await generateEmbedding(profileText);

    // Get jobs that already have embeddings
    const jobs = await Job.find({
      embedding: {
        $exists: true,
        $ne: [],
      },
    }).lean();

    const results = jobs.map((job) => {
      const similarity = cosineSimilarity(
        profileEmbedding,
        job.embedding
      );

      return {
        _id: job._id,
        title: job.title,
        skills: job.skills,
        experience: job.experience,
        education: job.education,
        location: job.location,
        salary: job.salary,
        jobType: job.jobType,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
        similarity,
      };
    });

    // Sort by similarity
    results.sort((a, b) => b.similarity - a.similarity);

    // Return top 10
    const topJobs = results.slice(0, 10);

    return NextResponse.json({
      totalJobs: jobs.length,
      results: topJobs,
    });
  } catch (error) {
    console.error("AI job matching error:", error);

    return NextResponse.json(
      {
        message: "Failed to match jobs",
        error: error.message,
      },
      { status: 500 }
    );
  }
}