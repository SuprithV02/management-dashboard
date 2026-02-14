import { Box, Container, Grid } from "@mui/material";
import Header from "./components/layout/Header";
import KpiCard from "./components/kpi/KpiCard";
import ClaimsRisk from "./components/sections/ClaimsRisk";
import PortfolioRetention from "./components/sections/PortfolioRetention";
import DistributionPerformance from "./components/sections/DistributionPerformance";
import OperationalEfficiency from "./components/sections/OperationalEfficiency";
import Footer from "./components/layout/Footer";

export default function DashboardPage() {
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
      <Header />

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
                value="$428.5M"
                trend="+12.4% YoY"
                trendType="up"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Net Earned Premium"
                value="$384.2M"
                trend="+8.1% YoY"
                trendType="up"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Claims Incurred"
                value="$242.1M"
                trend="+14.2% YoY"
                trendType="down"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Loss Ratio"
                value="63.0%"
                trend="+2.1% Target"
                trendType="warning"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Combined Ratio"
                value="92.4%"
                trend="-0.8% YoY"
                trendType="up"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
              <KpiCard
                title="Operating Profit"
                value="$48.6M"
                trend="On Track"
                highlight
              />
            </Grid>
          </Grid>

          {/* SECTIONS */}
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, xl: 6 }}>
                <ClaimsRisk />
              </Grid>

              <Grid size={{ xs: 12, xl: 6 }}>
                <PortfolioRetention />
              </Grid>

              <Grid size={{ xs: 12, xl: 6 }}>
                <DistributionPerformance />
              </Grid>

              <Grid size={{ xs: 12, xl: 6 }}>
                <OperationalEfficiency />
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
