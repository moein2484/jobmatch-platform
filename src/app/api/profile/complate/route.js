import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";
import UserModel from "@/models/Users";
import JobProfileModel from "@/models/jobProfileSchema";
import mongoose from "mongoose";
export async function POST(req) {
  try {
    await connectToDb();

    const {
      user,
      education,
      experience,
      jobTitle,
      jobType,
      location,
      salary,
      skills,
    } = await req.json();

    if (
      !user ||
      !jobTitle ||
      !experience ||
      !education ||
      !jobType ||
      !location ||
      !salary ||
      !skills
    ) {
      return NextResponse.json(
        {
          message: "لطفاً تمام فیلدهای الزامی را وارد کنید",
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
      typeof experience !== "string" ||
      experience.trim() === "" ||
      isNaN(Number(experience)) ||
      Number(experience) < 0 ||
      Number(experience) > 50
    ) {
      return NextResponse.json(
        {
          message: "میزان سابقه کاری معتبر نیست",
        },
        { status: 422 },
      );
    }

    // location
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
    if (!Array.isArray(skills) || skills.length === 0) {
      return NextResponse.json(
        {
          message: "حداقل یک مهارت باید انتخاب شود",
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
    if (!mongoose.Types.ObjectId.isValid(user)) {
      return NextResponse.json(
        {
          message: "شناسه کاربر معتبر نیست",
        },
        {
          status: 400,
        },
      );
    }
    console.log("USER ID:", user);
    console.log("DB NAME:", mongoose.connection.name);
    console.log("USER COLLECTION:", UserModel.collection.name);
    const existUser = await UserModel.findById(user);
    console.log("FOUND USER:", existUser);
    if (!existUser) {
      return NextResponse.json(
        {
          message: "همچین کاربری یافت نشد",
        },
        {
          status: 404,
        },
      );
    }

    const createJobProfile = await JobProfileModel?.create({
      education,
      experience,
      jobTitle,
      jobType,
      location,
      salary,
      skills,
      user
    });

    if (createJobProfile) {
      return NextResponse.json(
        {
          message: "اطلاعات با موفقیت ثبت شد",
          data: createJobProfile,
        },
        { status: 201 },
      );
    }
  } catch (err) {
    console.error(err);
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
