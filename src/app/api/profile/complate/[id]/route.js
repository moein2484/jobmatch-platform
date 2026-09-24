import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";

import JobProfileModel from "@/models/jobProfileSchema";

export async function PATCH(req, { params }) {
  try {
    await connectToDb();
    const { id } = await params;

    const {
      education,
      experience,
      jobTitle,
      jobType,
      location,
      salary,
      skills,
    } = await req.json();
    if (!id) {
      return NextResponse.json(
        {
          message: "شناسه ی کاربری نا معتبر هست",
        },
        { status: 400 },
      );
    }
    if (
      typeof jobTitle !== "string" ||
      jobTitle.trim().length < 2 ||
      jobTitle.trim().length > 100
    ) {
      return NextResponse.json(
        {
          message: "عنوان شغلی باید بین ۲ تا ۱۰۰ کاراکتر باشد",
        },
        { status: 422 },
      );
    }
    if (
      typeof location !== "string" ||
      location.trim().length < 2 ||
      location.trim().length > 100
    ) {
      return NextResponse.json(
        {
          message: "موقعیت مکانی معتبر نیست",
        },
        { status: 422 },
      );
    }

    if (
      typeof salary !== "string" ||
      salary.trim() === "" ||
      isNaN(Number(salary)) ||
      Number(salary) < 0
    ) {
      return NextResponse.json(
        {
          message: "مقدار حقوق معتبر نیست",
        },
        { status: 422 },
      );
    }

    if (
      skills.some(
        (skill) =>
          typeof skill !== "string" ||
          skill.trim().length < 1 ||
          skill.trim().length > 50,
      )
    ) {
      return NextResponse.json(
        {
          message: "مقادیر مهارت‌ها معتبر نیستند",
        },
        { status: 422 },
      );
    }

    const updateProfile = await JobProfileModel.findOneAndUpdate(
      { user: id },
      {
        education,
        experience,
        jobTitle,
        jobType,
        location,
        salary,
        skills,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updateProfile) {
      return NextResponse.json(
        {
          message: "پروفایل شما یافت نشد",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "پروفایل با موفقیت ویرایش شد",
        jobProfile: updateProfile,
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "خطا در پردازش درخواست",
        error: err.message,
      },
      {
        status: 500,
      },
    );
  }
}
