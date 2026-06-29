export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">
          Welcome back. Here&apos;s your module overview.
        </p>
      </div>

      {/* Placeholder stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 animate-pulse"
          >
            <div className="h-4 w-24 bg-slate-100 rounded mb-3" />
            <div className="h-8 w-16 bg-slate-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}