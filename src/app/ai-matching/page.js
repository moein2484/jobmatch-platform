"use client";

import JobRecommendationCard from "@/component/jobs/JobRecommendationCard";
import JopCartAi from "@/component/jobs/JopCartAi";
import Loading from "@/component/Loading/Loading";
import { useMe } from "@/hooks/auth/useMe";
import { useState } from "react";

export default function JobRecommendationsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data, isLoading } = useMe();
  if (isLoading) {
    return <Loading />;
  }
  const { profile, user } = data?.data;

  const handleGetRecommendations = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/ai/match-jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON?.stringify({ userId: user?._id }),
      });
      const result = await response?.json();
      console.log({result})
      if (response?.ok) {
        setJobs(result.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>

            <span className="text-sm font-medium text-indigo-600">
              پیشنهاد هوشمند شغلی
            </span>
          </div>

          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            مشاغل مناسب شما
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            بر اساس اطلاعات پروفایل شما، این موقعیت‌های شغلی توسط هوش مصنوعی
            پیشنهاد شده‌اند.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          {/* ================= PROFILE ================= */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
            {/* User */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xl">
                👨🏻‍💻
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">
                  {user?.first_name} {user?.last_name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {profile?.jobTitle}
                </p>
              </div>
            </div>

            <div className="my-5 h-px bg-slate-100" />

            {/* User Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">📍</span>

                <div>
                  <p className="text-xs text-slate-400">موقعیت</p>

                  <p className="mt-1 text-sm text-slate-700">
                    {profile?.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg">💼</span>

                <div>
                  <p className="text-xs text-slate-400">سابقه کاری</p>

                  <p className="mt-1 text-sm text-slate-700">
                    {profile?.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg">🎓</span>

                <div>
                  <p className="text-xs text-slate-400">تحصیلات</p>

                  <p className="mt-1 text-sm text-slate-700">
                    {profile?.education}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700">مهارت‌ها</p>

                <span className="text-xs text-slate-400">
                  {profile?.skills?.length} مهارت
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {profile?.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Edit */}
            <button
              type="button"
              className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              ✏️ ویرایش پروفایل
            </button>
          </aside>

          {/* ================= JOBS ================= */}
          <section>
            {/* Jobs Header */}
            {jobs?.length == 0 ? (
              <JobRecommendationCard
                handleGetRecommendations={handleGetRecommendations}
                loading={loading}
              />
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-slate-900">
                      پیشنهادهای هوش مصنوعی
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                      {jobs?.length} موقعیت شغلی متناسب با پروفایل شما
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
                  >
                    ⚙️ فیلتر
                  </button>
                </div>
                <div className="space-y-4">
                  {jobs?.map((job) => (
                    <JopCartAi job={job} />
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
