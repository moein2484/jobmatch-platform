"use client";

import { useState } from "react";
import Link from "next/link";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C#",
  "UI/UX",
  "SQL",
  "MongoDB",
];

export default function JobInfoPage() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    setSelectedSkills((current) =>
      current.includes(skill)
        ? current.filter((item) => item !== skill)
        : [...current, skill]
    );
  };

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
              این اطلاعات به JobMatch کمک می‌کند فرصت‌های شغلی مناسب‌تری به
              تو پیشنهاد دهد.
            </p>
          </div>

          <form className="space-y-8">
            {/* Professional Info */}
            <section>
              <div className="mb-5">
                <h2 className="text-base font-bold text-slate-900">
                  اطلاعات حرفه‌ای
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  درباره حوزه فعالیت و تجربه خودت بگو.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Job Title */}
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    عنوان شغلی
                  </label>

                  <input
                    id="jobTitle"
                    type="text"
                    placeholder="مثلاً Frontend Developer"
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    میزان سابقه کاری
                  </label>

                  <select
                    id="experience"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="0">بدون سابقه</option>
                    <option value="1">کمتر از ۱ سال</option>
                    <option value="1-3">۱ تا ۳ سال</option>
                    <option value="3-5">۳ تا ۵ سال</option>
                    <option value="5+">بیشتر از ۵ سال</option>
                  </select>
                </div>

                {/* Industry */}
                <div>
                  <label
                    htmlFor="industry"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    حوزه کاری
                  </label>

                  <select
                    id="industry"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  >
                    <option value="">انتخاب حوزه</option>
                    <option value="software">نرم‌افزار و فناوری</option>
                    <option value="marketing">بازاریابی و فروش</option>
                    <option value="finance">مالی و حسابداری</option>
                    <option value="design">طراحی</option>
                    <option value="management">مدیریت</option>
                    <option value="engineering">مهندسی</option>
                    <option value="other">سایر</option>
                  </select>
                </div>

                {/* Education */}
                <div>
                  <label
                    htmlFor="education"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    سطح تحصیلات
                  </label>

                  <select
                    id="education"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="diploma">دیپلم</option>
                    <option value="associate">کاردانی</option>
                    <option value="bachelor">کارشناسی</option>
                    <option value="master">کارشناسی ارشد</option>
                    <option value="phd">دکتری</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Skills */}
            <section>
              <div className="mb-5">
                <h2 className="text-base font-bold text-slate-900">
                  مهارت‌ها
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  مهارت‌هایی که در آن‌ها تجربه یا دانش دارید را انتخاب کنید.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                  const selected = selectedSkills.includes(skill);

                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        selected
                          ? "border-indigo-600 bg-indigo-600 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Job Preferences */}
            <section>
              <div className="mb-5">
                <h2 className="text-base font-bold text-slate-900">
                  ترجیحات شغلی
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  چه نوع موقعیت شغلی برایت مناسب‌تر است؟
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Job Type */}
                <div>
                  <label
                    htmlFor="jobType"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    نوع همکاری
                  </label>

                  <select
                    id="jobType"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="full-time">تمام وقت</option>
                    <option value="part-time">پاره وقت</option>
                    <option value="remote">دورکاری</option>
                    <option value="contract">پروژه‌ای</option>
                    <option value="internship">کارآموزی</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    شهر مورد نظر
                  </label>

                  <input
                    id="location"
                    type="text"
                    placeholder="مثلاً تهران"
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Salary */}
                <div>
                  <label
                    htmlFor="salary"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    حداقل حقوق مورد انتظار
                  </label>

                  <input
                    id="salary"
                    type="number"
                    placeholder="مثلاً 30000000"
                    dir="ltr"
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Work Mode */}
                <div>
                  <label
                    htmlFor="workMode"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    مدل کاری
                  </label>

                  <select
                    id="workMode"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="onsite">حضوری</option>
                    <option value="hybrid">ترکیبی</option>
                    <option value="remote">کاملاً دورکاری</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-between">
              <Link
                href="/dashboard"
                className="flex h-11 items-center justify-center rounded-xl border border-slate-200 px-5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                بعداً تکمیل می‌کنم
              </Link>

              <button
                type="submit"
                className="h-11 rounded-xl bg-indigo-600 px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                ذخیره و ادامه
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          اطلاعات شما برای پیدا کردن فرصت‌های شغلی مناسب استفاده می‌شود.
        </p>
      </div>
    </main>
  );
}