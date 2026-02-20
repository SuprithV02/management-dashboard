import {
  Box,
  Divider,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

interface TurnaroundItem {
  days: number;
  benchmark: number;
}

interface SLAItem {
  percent: number;
}

const TAT_LABELS = ["Underwriting", "Policy Issuance", "Claims Adjudication"];

const SLA_LABELS = [
  "Customer Support Response",
  "Claim Payment Dispatch",
  "Network Hospital Addition",
  "Complex Case Resolution",
];

export function SectionHeader() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <BoltIcon sx={{ color: "primary.main", fontSize: 26 }} />
        <Typography variant="h6" fontWeight={700}>
          Operational Efficiency
        </Typography>
      </Box>
      <Divider sx={{ mb: 4 }} />
    </>
  );
}

export function TurnaroundRow({
  name,
  value,
  max,
}: {
  name: string;
  value: number;
  max: number;
}) {
  const theme = useTheme();
  const progress = max ? (value / max) * 100 : 0;

  return (
    <Box mb={3}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body2">{name}</Typography>
        <Typography variant="body2" fontWeight={600}>
          {value} Days
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 6,
          borderRadius: 5,
          backgroundColor: theme.palette.grey[200],
          "& .MuiLinearProgress-bar": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      />
    </Box>
  );
}

export function TurnaroundSection({
  turnaroundTime,
}: {
  turnaroundTime: TurnaroundItem[];
}) {
  return (
    <Box>
      <Typography
        variant="subtitle2"
        fontWeight={600}
        color="text.secondary"
        mb={3}
      >
        TURNAROUND TIME (DAYS)
      </Typography>
      {TAT_LABELS.map((label, index) => (
        <TurnaroundRow
          key={label}
          name={label}
          value={turnaroundTime[index]?.benchmark ?? 0}
          max={turnaroundTime[index]?.days ?? 0}
        />
      ))}
    </Box>
  );
}

export function buildSLAData(slaItems: SLAItem[]) {
  return SLA_LABELS.map((name, index) => ({
    name,
    percent: slaItems[index]?.percent ?? 0,
  }));
}
