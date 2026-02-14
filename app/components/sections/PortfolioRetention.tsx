export default function PortfolioRetention() {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-6 space-y-6">
      <h2 className="font-bold text-lg">Portfolio & Retention</h2>

      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full border-8 border-blue-600 flex items-center justify-center">
          <span className="text-xl font-bold">72%</span>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">Overall Retention Rate</p>
        <div className="w-full h-2 bg-slate-200 rounded mt-1">
          <div className="h-2 bg-blue-600 rounded w-[94%]" />
        </div>
      </div>
    </section>
  );
}
