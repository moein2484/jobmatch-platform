import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";
import UserModel from "@/models/Users";
import { hashPassword , generateToken } from "@/utils/auth";
export async function POST(req) {
  try {
    await connectToDb();
    const { first_name, last_name, email, password } = await req.json();
    if (
      !first_name?.trim() ||
      !last_name?.trim() ||
      !email?.trim() ||
      !password?.trim()
    ) {
      return NextResponse.json(
        { message: "فیلد های ارسال شده قابل قبول نیست " },
        { status: 422 },
      );
    }
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) {
      return NextResponse.json(
        { message: "کاربر با این ایمیل از قبل وجود دارد" },
        { status: 422 },
      );
    }
    const heshedPass = await hashPassword(password);

    const createUser = await UserModel?.create({
      first_name,
      last_name,
      email,
      password: heshedPass,
    });
    const token = await generateToken({ email });
    if (createUser) {
      const response = NextResponse.json(
        {
          message: "ثبت نام موفقیت آمیز بود",
        },
        {
          status: 201,
        },
      );
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
      return response;
    }
  } catch (err) {
    return NextResponse.json(
      {
        message: "خطا در اتصال به سرور",
        error: err.message,
      },
      {
        status: 500,
      },
    );
  }
}
