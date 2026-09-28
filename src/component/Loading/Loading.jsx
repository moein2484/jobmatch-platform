export default function Loading() {
  return (
    <div dir="rtl" className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center text-center">
        {/* Spinner */}
        <div className="mb-4 h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />

        {/* Text */}
        <p className="text-sm font-medium text-slate-700">
          در حال دریافت اطلاعات...
        </p>

        <p className="mt-1 text-xs text-slate-400">لطفاً چند لحظه صبر کنید</p>
      </div>
    </div>
  );
}
