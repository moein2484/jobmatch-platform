"use client";
import { useMe } from "@/hooks/auth/useMe";
import Link from "next/link";
import React from "react";

export default function JobRecommend() {
  const { data } = useMe();
  return (
    <>
      {!data?.data?.profile && (
        <div className="mb-5 rounded-2xl border border-violet-100 bg-violet-50 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-violet-900">
                ✨ پیشنهادهای شخصی‌سازی شده
              </p>

              <p className="mt-1 text-xs text-violet-700">
                برای دریافت پیشنهادهای دقیق‌تر، پروفایل شغلی خود را تکمیل کنید.
              </p>
            </div>

            <Link
              href="/profile"
              className="shrink-0 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-violet-700"
            >
              تکمیل پروفایل
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
