import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";
import Job from "@/models/jobsSchema";

export async function GET(req) {
  try {
    await connectToDb();

    const listJobs = await Job.find();

    if (!listJobs || listJobs.length === 0) {
      return NextResponse.json(
        {
          message: "هیچ شغلی پیدا نشد",
          jobs: [],
        },
        {
          status: 200,
        }
      );
    }

    return NextResponse.json(
      {
        message: "لیست مشاغل با موفقیت دریافت شد",
        jobs: listJobs,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
  

    return NextResponse.json(
      {
        message: "خطا در دریافت لیست مشاغل",
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}