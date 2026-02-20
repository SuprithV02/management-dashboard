import { Box, Card, CardContent } from "@mui/material";
import {
  ClaimsLineChart,
  SectionHeader,
  SettlementRatio,
} from "./ClaimsRisk.helpers";

interface ClaimsVolumeTrend {
  month: string;
  current: number;
  previous: number;
}

interface Settlement {
  ratio: number;
  avgProcessingDays: number;
}

interface ClaimsRiskData {
  claimsVolumeTrend: ClaimsVolumeTrend[];
  settlement: Settlement;
}

interface Props {
  data?: ClaimsRiskData;
}

export default function ClaimsRisk({ data }: Props) {
  return (
    <Card elevation={2} sx={{ borderRadius: 3 }}>
      <CardContent>
        <SectionHeader />
        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <ClaimsLineChart data={data?.claimsVolumeTrend ?? []} />
          <SettlementRatio settlement={data?.settlement} />
        </Box>
      </CardContent>
    </Card>
  );
}
