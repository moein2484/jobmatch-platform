import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";
import UserModel from "@/models/Users";
import { generateToken, verifyPassword } from "@/utils/auth";
export async function POST(req) {
  try {
    await connectToDb();
    const { email, password } = await req.json();
    if (!email?.trim() || !password?.trim()) {
      return NextResponse.json(
        { message: "فیلد های ارسال شده قابل قبول نیست " },
        { status: 422 },
      );
    }
    const isUserExist = await UserModel.findOne({ email });
    if (!isUserExist) {
      return NextResponse.json(
        { message: "همچین کاربری یافت نشد" },
        { status: 404 },
      );
    }

    const isValidPassword = await verifyPassword(
      password,
      isUserExist.password,
    );
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "رمز عبور یا ایمیل اشتباه است" },
        { status: 422 },
      );
    }
    const token = await generateToken({ email: isUserExist?.email });
    const response = NextResponse.json(
      {
        message: "شما با موفقیت وارد شدید",
      },
      {
        status: 200,
      },
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return response;
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
