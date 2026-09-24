"use client";

import { useState } from "react";
import Link from "next/link";
import JobProfileForm from "@/component/profile/JobProfileForm";
import { useMe } from "@/hooks/auth/useMe";


export default function JobInfoPage() {
  const { data: user, isError, isLoading } = useMe();
  const hasJobProfile = !!user?.data?.profile;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Job<span className="text-indigo-600">Match</span>
          </Link>
          {!hasJobProfile && (
            <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700">
              <span className="text-lg">⚠️</span>
              <p>
                شما اطلاعات شغلی ندارید. زودتر نسبت به فراهم کردن آن اقدام کنید.
              </p>
            </div>
          )}
          <span className="text-xs font-medium text-slate-400">
            تکمیل پروفایل
          </span>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900">
              اطلاعات شغلی
            </span>

            <span className="text-xs text-slate-400">مرحله ۱ از ۳</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-1/3 rounded-full bg-indigo-600" />
          </div>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Title */}
          <div className="mb-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
              💼
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              اطلاعات شغلی خودت را وارد کن
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              این اطلاعات به JobMatch کمک می‌کند فرصت‌های شغلی مناسب‌تری به تو
              پیشنهاد دهد.
            </p>
          </div>

          <JobProfileForm hasJobProfile={hasJobProfile} user={user} />
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          اطلاعات شما برای پیدا کردن فرصت‌های شغلی مناسب استفاده می‌شود.
        </p>
      </div>
    </main>
  );
}
