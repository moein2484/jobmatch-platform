export default function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-24 space-y-4">
        {/* Profile */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
              م
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                محمد معین
              </p>

              <p className="text-xs text-slate-500">
                پروفایل شغلی
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-slate-500">
                تکمیل پروفایل
              </span>

              <span className="font-bold text-violet-600">
                80٪
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[80%] rounded-full bg-violet-600" />
            </div>
          </div>

          <button className="mt-4 w-full rounded-xl border border-violet-200 py-2.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-50">
            تکمیل پروفایل
          </button>
        </div>

        {/* AI */}
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 p-5 text-white">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
            ✨
          </div>

          <h3 className="font-bold">
            پیشنهاد هوشمند شغل
          </h3>

          <p className="mt-2 text-xs leading-6 text-violet-100">
            بر اساس مهارت‌ها و تجربه شما، بهترین فرصت‌های شغلی را پیدا می‌کنیم.
          </p>

          <button className="mt-4 w-full rounded-xl bg-white py-2.5 text-xs font-bold text-violet-700 transition hover:bg-violet-50">
            پیدا کردن مشاغل مناسب
          </button>
        </div>
      </div>
    </aside>
  );
}