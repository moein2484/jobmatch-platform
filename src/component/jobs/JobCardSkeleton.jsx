export default function JobCardSkeleton() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          {/* Avatar */}
          <div className="h-12 w-12 shrink-0 animate-pulse rounded-xl bg-slate-200" />

          <div className="min-w-0 flex-1">
            {/* Title */}
            <div className="h-5 w-40 animate-pulse rounded-md bg-slate-200" />

            {/* Location */}
            <div className="mt-2 h-4 w-28 animate-pulse rounded-md bg-slate-100" />
          </div>
        </div>

        {/* Job Type */}
        <div className="h-9 w-20 shrink-0 animate-pulse rounded-xl bg-slate-100" />
      </div>

      {/* Info */}
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
        <div className="h-4 w-24 animate-pulse rounded-md bg-slate-100" />
        <div className="h-4 w-24 animate-pulse rounded-md bg-slate-100" />
        <div className="h-4 w-20 animate-pulse rounded-md bg-slate-100" />
        <div className="h-4 w-28 animate-pulse rounded-md bg-slate-100" />
      </div>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        <div className="h-7 w-20 animate-pulse rounded-lg bg-slate-100" />
        <div className="h-7 w-24 animate-pulse rounded-lg bg-slate-100" />
        <div className="h-7 w-16 animate-pulse rounded-lg bg-slate-100" />
        <div className="h-7 w-20 animate-pulse rounded-lg bg-slate-100" />
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="h-4 w-16 animate-pulse rounded-md bg-slate-100" />

        <div className="h-9 w-28 animate-pulse rounded-xl bg-slate-200" />
      </div>
    </article>
  );
}