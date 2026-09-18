import Header from "@/component/layout/Header";
import Sidebar from "@/component/layout/Sidebar";
import SearchBar from "@/component/jobs/SearchBar";
import JobFilters from "@/component/jobs/JobFilters";
import JobCard from "@/component/jobs/JobCard";
import { jobs } from "@/data/jobs";

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <Header />

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

                <button className="shrink-0 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-violet-700">
                  تکمیل پروفایل
                </button>
              </div>
            </div>

          
            <div className="mb-4 lg:hidden">
              <JobFilters />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-900">
                  همه مشاغل
                </h2>

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

            <div className="space-y-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>

        
          <div className="hidden w-60 shrink-0 lg:block">
            <JobFilters />
          </div>
        </div>
      </main>
    </div>
  );
}