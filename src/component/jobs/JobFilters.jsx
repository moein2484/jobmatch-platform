"use client";

import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function JobFilters() {
  const { filters, setFilters } = useGlobalContext();
  const jobTypes = [
    { value: "full-time", label: "تمام وقت" },
    { value: "part-time", label: "پاره وقت" },
    { value: "remote", label: "دورکاری" },
    { value: "internship", label: "کارآموزی" },
    { value: "contract", label: "قراردادی" },
  ];
  console.log({ filters });
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-bold text-slate-900">فیلترها</h2>

        <button
          onClick={() =>
            setFilters({ jobType: "", experience: "", location: "" })
          }
          className="text-xs font-medium text-violet-600 hover:text-violet-700"
        >
          پاک کردن
        </button>
      </div>

      <div className="space-y-6">
        {/* Job Type */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            نوع همکاری
          </label>

          <select
            value={filters?.jobType}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, jobType: e?.target?.value }))
            }
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-violet-500"
          >
            <option value="">همه</option>
            {jobTypes?.map((job) => (
              <option value={job?.value}>{job?.label}</option>
            ))}
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            میزان تجربه
          </label>

          <select
            value={filters?.experience}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, experience: e?.target?.value }))
            }
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-violet-500"
          >
            <option value="">همه</option>

            <option value="1 year">کمتر از 1 سال</option>
            <option value="2 years">2 سال</option>
            <option value="3 years">3 سال</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            شهر
          </label>

          <select
            value={filters?.location}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, location: e?.target?.value }))
            }
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-violet-500"
          >
            <option value="">همه شهرها</option>
            <option value="Tehran">تهران</option>
            <option value="Karaj">کرج</option>
            <option value="Isfahan">اصفهان</option>
            <option value="Mashhad">مشهد</option>
            <option value="Shiraz">شیراز</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
