import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";
import UserModel from "@/models/Users";
import JobProfileModel from "@/models/jobProfileSchema";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/auth";

export async function GET(req) {
  try {
    await connectToDb();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "شما لاگین نیستید" },
        { status: 401 },
      );
    }
    const tokenPayload = await verifyToken(token);
    console.log({ tokenPayload });
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
    const existJobProfile = await JobProfileModel?.findOne({
      user: existUser?._id,
    });
    if (!existJobProfile) {
      return NextResponse.json(
        { message: "همچین پروفایلی یافت نشد " },
        { status: 404 },
      );
    }
    return NextResponse.json(
      { data: { user: existUser, profile: existJobProfile } },
      { status: 200 },
    );
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
