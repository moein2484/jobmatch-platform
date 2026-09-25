import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";
import UserModel from "@/models/Users";
import JobProfileModel from "@/models/jobProfileSchema";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/auth";
export async function POST(req) {
  try {
    await connectToDb();

    const {

      education,
      experience,
      jobTitle,
      jobType,
      location,
      salary,
      skills,
    } = await req.json();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "شما لاگین نیستید" },
        { status: 401 },
      );
    }
    const tokenPayload = await verifyToken(token);

    if (!tokenPayload) {
      return NextResponse.json(
        { message: "شما لاگین نیستید" },
        { status: 401 },
      );
    }
    const existUser = await UserModel?.findOne({ email: tokenPayload?.email });
    if (!existUser) {
      return NextResponse.json(
        { message: "همچین کاربری یافت نشد " },
        { status: 404 },
      );
    }

    if (
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
    if (!mongoose.Types.ObjectId.isValid(existUser?._id)) {
      return NextResponse.json(
        {
          message: "شناسه کاربر معتبر نیست",
        },
        {
          status: 400,
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
      user:existUser?._id
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
