import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("token");

    return NextResponse.json(
      {
        message: "با موفقیت از حساب کاربری خارج شدید",
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "خطا در خروج از حساب کاربری",
      },
      {
        status: 500,
      },
    );
  }
}
