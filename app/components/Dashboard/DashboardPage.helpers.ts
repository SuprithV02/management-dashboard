// app/components/dashboard/DashboardPage.helpers.ts

import { useEffect, useState } from "react";
import { DashboardData } from "../../types";

export const DEFAULT_YEAR = "2025";

export async function fetchDashboardData(year: string): Promise<DashboardData> {
  const res = await fetch(`/api/dashboard?year=${encodeURIComponent(year)}`);
  return res.json();
}

export function useDashboardData(year: string) {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetchDashboardData(year).then(setData);
  }, [year]);

  return data;
}
