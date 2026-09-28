"use client";

import { useState } from "react";

export default function JobRecommendationCard({
  handleGetRecommendations,
  loading,
}) {
  return (
    <div dir="rtl" className="flex  items-center justify-center px-4">
      <div className=" rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
          ✨
        </div>

        {/* Title */}
        <h1 className="mt-5 text-xl font-bold text-slate-900">
          پیشنهادهای شغلی مناسب شما
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-500">
          با استفاده از اطلاعات پروفایل شما، هوش مصنوعی مشاغلی را که بیشترین
          تناسب را با مهارت‌ها و تجربه شما دارند پیدا می‌کند.
        </p>

        {/* Info */}
        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-right">
          <p className="text-xs leading-6 text-slate-500">
            🧠 پروفایل شما بررسی می‌شود
          </p>

          <p className="mt-1 text-xs leading-6 text-slate-500">
            🎯 میزان تناسب شما با مشاغل محاسبه می‌شود
          </p>

          <p className="mt-1 text-xs leading-6 text-slate-500">
            💼 مشاغل مناسب به شما نمایش داده می‌شوند
          </p>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={handleGetRecommendations}
          disabled={loading}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              در حال پیدا کردن مشاغل...
            </>
          ) : (
            <>✨ دریافت پیشنهادهای شغلی</>
          )}
        </button>

        <p className="mt-3 text-[11px] text-slate-400">
          این فرآیند ممکن است چند لحظه طول بکشد.
        </p>
      </div>
    </div>
  );
}
