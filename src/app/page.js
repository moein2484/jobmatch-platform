import Header from "@/component/layout/Header";
import Sidebar from "@/component/layout/Sidebar";
import SearchBar from "@/component/jobs/SearchBar";
import JobFilters from "@/component/jobs/JobFilters";
import ListJobs from "@/component/jobs/ListJobs"
import jobs from "@/data/jobs";
import JobRecommend from "@/component/jobs/JobRecommend";
import { cookies } from "next/headers";
export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <Header isAuthenticated={!!token} />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <section className="mb-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-slate-900">
              فرصت شغلی مناسب خودت را پیدا کن
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              بین فرصت‌های شغلی جستجو کن و بهترین گزینه‌ها را پیدا کن.
            </p>
          </div>

          <SearchBar />
        </section>

        <div className="flex items-start gap-6">
          <Sidebar />

          <section className="min-w-0 flex-1">
            <JobRecommend />

            <div className="mb-4 lg:hidden">
              <JobFilters />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-900">همه مشاغل</h2>

                <p className="mt-1 text-xs text-slate-500">
                  {jobs.length} فرصت شغلی پیدا شد
                </p>
              </div>

              <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none">
                <option>جدیدترین</option>
                <option>بیشترین تطابق</option>
                <option>بیشترین حقوق</option>
              </select>
            </div>

            <ListJobs />
          </section>

          <div className="hidden w-60 shrink-0 lg:block">
            <JobFilters />
          </div>
        </div>
      </main>
    </div>
  );
}
