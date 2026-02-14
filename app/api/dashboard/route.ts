import dashboardData from "../../../data/dashboardData.json";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const year = Number(searchParams.get("year"));

  const selectedData = dashboardData.find((item) => item.year === year);

  return NextResponse.json(selectedData);
}
