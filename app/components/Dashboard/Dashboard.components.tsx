import { Box, Grid } from "@mui/material";
import KpiCard from "../kpi/KpiCard";
import ClaimsRisk from "../sections/ClaimsTab/ClaimsRisk";
import PortfolioRetention from "../sections/PortfolioRetention/PortfolioRetention";
import DistributionPerformance from "../sections/DistributionPerformance/DistributionPerformance";
import OperationalEfficiency from "../sections/OperationalEffciency/OperationalEfficiency";
import { DashboardData } from "@/app/types";

export function KpiGrid({ kpis }: { kpis: DashboardData["kpis"] | undefined }) {
  const gwp = kpis?.grossWrittenPremium;

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
        <KpiCard
          title="Gross Premium"
          value={`$${gwp?.value ?? 0}M`}
          trend={`$${gwp?.yoyChangePercent ?? 0}% YoY`}
          trendType={gwp?.trend}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
        <KpiCard
          title="Net Premium"
          value={`$${kpis?.netEarnedPremium?.value ?? 0}M`}
          trend={`+${kpis?.netEarnedPremium?.yoyChangePercent ?? 0}% YoY`}
          trendType={gwp?.trend}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
        <KpiCard
          title="Claims Incurred"
          value={`$${kpis?.claimsIncurred?.value ?? 0}M`}
          trend={`+${kpis?.claimsIncurred?.yoyChangePercent ?? 0}% YoY`}
          trendType={gwp?.trend}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
        <KpiCard
          title="Loss Ratio"
          value={`${kpis?.lossRatio?.value ?? 0}%`}
          trend={`+${kpis?.lossRatio?.variance ?? 0}% YoY`}
          trendType="warning"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
        <KpiCard
          title="Combined Ratio"
          value={`${kpis?.combinedRatio?.value ?? 0}%`}
          trend={`-${kpis?.combinedRatio?.yoyChangePercent ?? 0}% YoY`}
          trendType={kpis?.combinedRatio?.trend}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
        <KpiCard
          title="Operating Profit"
          value={`$${kpis?.operatingProfit?.value ?? 0}M`}
          trend={kpis?.operatingProfit?.status}
          highlight
        />
      </Grid>
    </Grid>
  );
}

export function SectionsGrid({ data }: { data: DashboardData | null }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, xl: 6 }}>
          <ClaimsRisk data={data?.claimsRisk} />
        </Grid>
        <Grid size={{ xs: 12, xl: 6 }}>
          <PortfolioRetention data={data?.portfolioRetention} />
        </Grid>
        <Grid size={{ xs: 12, xl: 6 }}>
          <DistributionPerformance mockData={data?.distributionPerformance} />
        </Grid>
        <Grid size={{ xs: 12, xl: 6 }}>
          <OperationalEfficiency data={data?.operationalEfficiency} />
        </Grid>
      </Grid>
    </Box>
  );
}
