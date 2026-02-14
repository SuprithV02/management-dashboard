export default function OperationalEfficiency() {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-6 space-y-6">
      <h2 className="font-bold text-lg">Operational Efficiency</h2>

      <div className="space-y-4">
        {[
          { name: "Underwriting", days: "2.4 Days" },
          { name: "Policy Issuance", days: "0.8 Days" },
          { name: "Claims Adjudication", days: "4.1 Days" },
        ].map((item) => (
          <div key={item.name}>
            <div className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span className="font-semibold">{item.days}</span>
            </div>
            <div className="h-2 bg-slate-200 rounded mt-1" />
          </div>
        ))}
      </div>
    </section>
  );
}
