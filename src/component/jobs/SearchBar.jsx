export default function SearchBar() {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
        🔍
      </span>

      <input
        type="text"
        placeholder="عنوان شغل، مهارت یا شرکت را جستجو کنید..."
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white pr-11 pl-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
      />
    </div>
  );
}