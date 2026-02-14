export default function DistributionPerformance() {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-6 space-y-6">
      <h2 className="font-bold text-lg">Distribution Performance</h2>

      {[
        { name: "Brokers", percent: 65 },
        { name: "Digital / Direct", percent: 22 },
        { name: "Agents", percent: 13 },
      ].map((item) => (
        <div key={item.name} className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>{item.name}</span>
            <span>{item.percent}%</span>
          </div>

          <div className="w-full h-3 bg-slate-200 rounded">
            <div
              className="h-3 bg-blue-600 rounded"
              style={{ width: `${item.percent}%` }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
