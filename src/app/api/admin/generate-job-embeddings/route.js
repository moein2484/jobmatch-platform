import { NextResponse } from "next/server";

import connectToDb from "@/utils/db";
import Job from "@/models/jobsSchema";

import { buildJobText } from "@/lib/ai/buildJobText";
import { generateEmbedding } from "@/lib/ai/embedding";

export async function POST() {
  try {
    await connectToDb();

    const jobs = await Job.find({
      embedding: { $exists: false },
    });

    console.log(`Found ${jobs.length} jobs without embedding`);

    let processed = 0;

    for (const job of jobs) {
      const jobText = buildJobText(job);

      const embedding = await generateEmbedding(jobText);

      job.embedding = embedding;

      await job.save();

      processed++;

      console.log(
        `Embedding generated for job ${job._id} (${processed}/${jobs.length})`
      );
    }

    return NextResponse.json({
      message: "Job embeddings generated successfully",
      total: jobs.length,
      processed,
    });
  } catch (error) {
    console.error("Generate job embeddings error:", error);

    return NextResponse.json(
      {
        message: "Failed to generate job embeddings",
        error: error.message,
      },
      { status: 500 }
    );
  }
}