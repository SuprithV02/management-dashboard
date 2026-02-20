import { NextResponse } from "next/server";
import dashboardData from "@/data/dashboardData.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const year = Number(searchParams.get("year"));

  if (!year) {
    return NextResponse.json(
      { error: "A valid 'year' query parameter is required." },
      { status: 400 },
    );
  }

  const data = dashboardData.find((item) => item.year === year) ?? null;

  if (!data) {
    return NextResponse.json(
      { error: `No dashboard data found for year: ${year}` },
      { status: 404 },
    );
  }

  return NextResponse.json(data);
}
