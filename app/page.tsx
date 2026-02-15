"use client";

import { Box, Container, Grid } from "@mui/material";
import Header from "./components/layout/Header";
import KpiCard from "./components/kpi/KpiCard";
import ClaimsRisk from "./components/sections/ClaimsRisk";
import PortfolioRetention from "./components/sections/PortfolioRetention";
import DistributionPerformance from "./components/sections/DistributionPerformance";
import OperationalEfficiency from "./components/sections/OperationalEfficiency";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState("FY 2024 - Q3");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data for:", selectedYear);
      const res = await fetch(
        `/api/dashboard?year=${encodeURIComponent(selectedYear)}`,
      );
      const json = await res.json();
      console.log("API response:", json);
      setData(json);
    }

    fetchData();
  }, [selectedYear]);

  console.log("Current data state:", data?.kpis);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9fafb",
      }}
    >
      {/* HEADER */}
      <Header selectedYear={selectedYear} onYearChange={setSelectedYear} />

      {/* SCROLLABLE CONTENT */}
      <Box
        sx={{
          flex: 2,
          overflowY: "auto",
        }}
      >
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* KPI GRID */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Gross Written Premium"
                value={`$${data?.kpis?.grossWrittenPremium?.value || 0}M`}
                trend={`$${data?.kpis?.grossWrittenPremium?.yoyChangePercent || 0}% YoY`}
                trendType={data?.kpis?.grossWrittenPremium?.trend}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Net Earned Premium"
                value={`$${data?.kpis?.netEarnedPremium?.value || 0}M`}
                trend={`+${data?.kpis?.netEarnedPremium?.yoyChangePercent || 0}% YoY`}
                trendType={data?.kpis?.grossWrittenPremium?.trend}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Claims Incurred"
                value={`$${data?.kpis?.claimsIncurred?.value || 0}M`}
                trend={`+${data?.kpis?.claimsIncurred?.yoyChangePercent || 0}% YoY`}
                trendType={data?.kpis?.grossWrittenPremium?.trend}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Loss Ratio"
                value={`${data?.kpis?.lossRatio?.value || 0}%`}
                trend={`+${data?.kpis?.lossRatio?.variance || 0}% YoY`}
                trendType="warning"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Combined Ratio"
                value={`${data?.kpis?.combinedRatio?.value || 0}%`}
                trend={`-${data?.kpis?.combinedRatio?.yoyChangePercent || 0}% YoY`}
                trendType={data?.kpis?.combinedRatio?.trend}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Operating Profit"
                value={`$${data?.kpis?.operatingProfit?.value || 0}M`}
                trend={data?.kpis?.operatingProfit?.status}
                highlight
              />
            </Grid>
          </Grid>

          {/* SECTIONS */}
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, xl: 6 }}>
                <ClaimsRisk data={data?.claimsRisk} />
              </Grid>

              <Grid size={{ xs: 12, xl: 6 }}>
                <PortfolioRetention data={data?.portfolioRetention} />
              </Grid>

              <Grid size={{ xs: 12, xl: 6 }}>
                <DistributionPerformance
                  mockData={data?.distributionPerformance}
                />
              </Grid>

              <Grid size={{ xs: 12, xl: 6 }}>
                <OperationalEfficiency data={data?.operationalEfficiency} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* FOOTER (Sticky at Bottom) */}
      <Box
        sx={{
          borderTop: "1px solid #e5e7eb",
          backgroundColor: "#fff",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
