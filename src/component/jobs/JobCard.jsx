export default function JobCard({ job }) {
  const jobTypeLabels = {
    "full-time": "تمام وقت",
    "part-time": "پاره وقت",
    remote: "دورکاری",
    internship: "کارآموزی",
    contract: "قراردادی",
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-lg font-bold text-violet-600">
            {job.title?.charAt(0)}
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-bold text-slate-900">
              {job.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {job.location}
            </p>
          </div>
        </div>

        {/* Job Type */}
        <div className="shrink-0 rounded-xl bg-violet-50 px-3 py-2 text-center">
          <p className="text-xs font-semibold text-violet-600">
            {jobTypeLabels[job.jobType] || job.jobType}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
        <span>📍 {job.location}</span>

        <span>
          💼 {jobTypeLabels[job.jobType] || job.jobType}
        </span>

        <span>⏱ {job.experience}</span>

        {job.salary && (
          <span>
            💰 {job.salary.toLocaleString("fa-IR")} تومان
          </span>
        )}

        {job.education && (
          <span>🎓 {job.education}</span>
        )}
      </div>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills?.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-400">
          فرصت شغلی
        </span>

        <button className="rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-700">
          مشاهده جزئیات
        </button>
      </div>
    </article>
  );
}

