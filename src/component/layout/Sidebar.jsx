"use client";

import { useMe } from "@/hooks/auth/useMe";
import Link from "next/link";

export default function Sidebar() {
  const { data, isError, isLoading } = useMe();
  const user = data?.data;
  return (
    <aside className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-24 space-y-4">
        {/* Profile */}
        <div
          className="rounded-2xl border border-slate-200 bg-white p-5"
          dir="rtl"
        >
          {/* User Info */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
              {user?.user?.first_name?.[0] || "م"}
            </div>

            {/* User Details */}
            <div className="min-w-0 flex-1 text-right">
              <p className="truncate text-sm font-bold leading-5 text-slate-800">
                {user?.user?.first_name} {user?.user?.last_name}
              </p>

              <p className="mt-0.5 truncate text-[11px] font-medium leading-4 text-slate-400">
                {user?.profile?.jobTitle || "پروفایل شما"}
              </p>
            </div>
          </div>

          {/* Profile Button */}
          <Link
            href="/profile"
            className="mt-4 flex w-full items-center justify-center rounded-xl border border-violet-200 py-2.5 text-xs font-semibold text-violet-600 transition-all duration-200 hover:border-violet-300 hover:bg-violet-50"
          >
            تکمیل پروفایل
          </Link>
        </div>

        {/* AI */}
        <div className="overflow-hidden rounded-2xl  from-violet-600 to-purple-700 p-5 text-white bg-white border border-slate-200">
          <div className="flex gap-3 ">
            <h3 className="font-bold text-violet-700 ">پیشنهاد هوشمند شغل</h3>
            <p>✨</p>
          </div>

          <p className="mt-2 text-xs leading-6 text-violet-700">
            بر اساس مهارت‌ها و تجربه شما، بهترین فرصت‌های شغلی را پیدا می‌کنیم.
          </p>

          <button className="mt-4 w-full rounded-xl bg-violet-600 py-2.5 text-xs font-bold text-white transition">
            پیدا کردن مشاغل مناسب
          </button>
        </div>
      </div>
    </aside>
  );
}
