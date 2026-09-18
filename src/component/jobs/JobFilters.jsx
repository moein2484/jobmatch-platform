export default function JobFilters() {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-bold text-slate-900">
          فیلترها
        </h2>

        <button className="text-xs font-medium text-violet-600 hover:text-violet-700">
          پاک کردن
        </button>
      </div>

      <div className="space-y-6">
        {/* Job Type */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            نوع همکاری
          </label>

          <div className="space-y-2">
            {["تمام وقت", "پاره وقت", "دورکاری", "حضوری"].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                />

                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            میزان تجربه
          </label>

          <select className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-violet-500">
            <option>همه</option>
            <option>بدون سابقه</option>
            <option>۱ تا ۲ سال</option>
            <option>۲ تا ۵ سال</option>
            <option>بیشتر از ۵ سال</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            شهر
          </label>

          <select className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-violet-500">
            <option>همه شهرها</option>
            <option>تهران</option>
            <option>کرج</option>
            <option>اصفهان</option>
            <option>مشهد</option>
          </select>
        </div>
      </div>
    </aside>
  );
}