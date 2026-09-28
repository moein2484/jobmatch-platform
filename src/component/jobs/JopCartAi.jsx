import React from "react";

export default function JopCartAi({ job }) {
  return (
    <article
      key={job.id}
      className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-sm"
    >
      {/* Main */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Job Info */}
        <div className="flex gap-4">
          {/* Company Logo */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl">
            🏢
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">{job?.title}</h3>

            <p className="mt-1 text-sm text-slate-500">{job?.company}</p>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
              <span>📍 {job?.location}</span>

              <span>💼 {job?.type}</span>
            </div>
          </div>
        </div>

        {/* Match */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition group-hover:bg-indigo-600 group-hover:text-white"
          >
            ←
          </button>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
        <span className="ml-1 text-xs text-slate-400">مهارت‌های مرتبط:</span>

        {job?.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs text-indigo-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
