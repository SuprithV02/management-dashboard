import { Card, CardContent, Grid } from "@mui/material";
import {
  buildSLAData,
  SectionHeader,
  TurnaroundSection,
} from "./OperationalEffciency.helpers";
import SLAComplianceList from "../../common/SLAComplianceList";

interface TurnaroundItem {
  days: number;
  benchmark: number;
}

interface SLAItem {
  percent: number;
}

interface OperationalData {
  turnaroundTime: TurnaroundItem[];
  slaItems: SLAItem[];
}

interface Props {
  data?: OperationalData;
}

export default function OperationalEfficiency({ data }: Props) {
  const slaData = buildSLAData(data?.slaItems ?? []);

  return (
    <Card elevation={2} sx={{ borderRadius: 3, height: "100%" }}>
      <CardContent>
        <SectionHeader />
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TurnaroundSection turnaroundTime={data?.turnaroundTime ?? []} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SLAComplianceList title="SLA COMPLIANCE STATUS" data={slaData} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
