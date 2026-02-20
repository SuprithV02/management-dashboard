import { Box, Card, CardContent } from "@mui/material";
import {
  DonutChart,
  RetentionMetrics,
  SectionHeader,
} from "./PortfolioRetention.helpers";

interface RenewalMix {
  renewalPercent: number;
  newBusinessPercent: number;
}

interface PortfolioData {
  status: string;
  renewalMix: RenewalMix;
  overallRetentionRate: number;
  lapseRatio: number;
  insight?: string;
}

interface Props {
  data?: PortfolioData;
}

export default function PortfolioRetention({ data }: Props) {
  const renewalPercent = data?.renewalMix?.renewalPercent ?? 0;
  const newBizPercent = data?.renewalMix?.newBusinessPercent ?? 0;

  return (
    <Card elevation={2} sx={{ borderRadius: 3, height: "100%" }}>
      <CardContent>
        <SectionHeader status={data?.status} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <DonutChart
            renewalPercent={renewalPercent}
            newBizPercent={newBizPercent}
          />
          <RetentionMetrics
            overallRetentionRate={data?.overallRetentionRate ?? 0}
            lapseRatio={data?.lapseRatio ?? 0}
            insight={data?.insight}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
