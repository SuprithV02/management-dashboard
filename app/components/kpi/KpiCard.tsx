interface Props {
  title: string;
  value: string;
  trend?: string;
  trendType?: "up" | "down" | "warning";
  highlight?: boolean;
}

export default function KpiCard({
  title,
  value,
  trend,
  trendType,
  highlight,
}: Props) {
  return (
    <div
      className={`p-5 rounded-xl border shadow-sm ${
        highlight
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white"
      }`}
    >
      <p className="text-xs uppercase mb-2 opacity-70">{title}</p>

      <h3 className="text-2xl font-bold">{value}</h3>

      {trend && (
        <p
          className={`text-xs mt-2 font-semibold ${
            trendType === "up"
              ? "text-green-600"
              : trendType === "down"
              ? "text-red-600"
              : trendType === "warning"
              ? "text-yellow-500"
              : ""
          }`}
        >
          {trend}
        </p>
      )}
    </div>
  );
}
