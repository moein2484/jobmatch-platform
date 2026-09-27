import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";
import Job from "@/models/jobsSchema";

export async function GET(req) {
  try {
    await connectToDb();
    const searchParams = req.nextUrl.searchParams;
    const q = searchParams.get("q");
    const location = searchParams.get("location");
    const jobType = searchParams.get("jobType");
    const experience = searchParams.get("experience");
    const filter = {};
    if (q?.trim()) {
      filter.title = {
        $regex: q.trim(),
        $options: "i",
      };
    }
    if (location?.trim()) {
      filter.location = {
        $regex: location.trim(),
        $options: "i",
      };
    }
    if (jobType?.trim()) {
      filter.jobType = jobType;
    }
    if (experience !== null && experience !== "") {
      filter.experience = experience;
    }
    const listJobs = await Job.find(filter);
    console.log("Embedding dimensions:", listJobs?.embedding);
    if (!listJobs || listJobs.length === 0) {
      return NextResponse.json(
        {
          message: "هیچ شغلی پیدا نشد",
          jobs: [],
        },
        {
          status: 200,
        },
      );
    }

    return NextResponse.json(
      {
        message: "لیست مشاغل با موفقیت دریافت شد",
        jobs: listJobs,
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "خطا در دریافت لیست مشاغل",
        error: err.message,
      },
      {
        status: 500,
      },
    );
  }
}
