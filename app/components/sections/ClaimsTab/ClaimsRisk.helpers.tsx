import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import InteractivePieChart from "../../common/InteractivePieChart";
import ShieldIcon from "@mui/icons-material/Shield";

interface ClaimsVolumeTrend {
  month: string;
  current: number;
  previous: number;
}

interface Settlement {
  ratio?: number;
  avgProcessingDays?: number;
}

const LEGEND_ITEMS = [
  { label: "Current", color: "primary.main" },
  { label: "Previous", color: "grey.400" },
];

export function SectionHeader() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <ShieldIcon sx={{ color: "primary.main", fontSize: 26 }} />
        <Typography variant="h6" fontWeight={700}>
          Claims & Risk Analysis
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
    </>
  );
}

export function ChartLegend() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 2 }}>
      {LEGEND_ITEMS.map(({ label, color }) => (
        <Box key={label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: color }}
          />
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export function ClaimsLineChart({ data }: { data: ClaimsVolumeTrend[] }) {
  const theme = useTheme();

  return (
    <Box sx={{ flex: 2, minWidth: 280 }}>
      <Box sx={{ height: 210 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <XAxis dataKey="month" interval={0} tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="current"
              stroke={theme.palette.primary.main}
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke={theme.palette.grey[400]}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <ChartLegend />
    </Box>
  );
}

export function SettlementRatio({ settlement }: { settlement?: Settlement }) {
  const theme = useTheme();

  if (!settlement) return null;

  const ratio = settlement?.ratio ?? 0;

  const pieData = [
    { name: "Settled Claims", value: ratio },
    { name: "Unsettled Claims", value: 100 - ratio },
  ];

  const primaryColor =
    ratio < 60 ? theme.palette.error.light : theme.palette.primary.light;

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="body2" fontWeight={700}>
        Claims Settlement Ratio
      </Typography>

      <InteractivePieChart
        data={pieData}
        primaryColor={primaryColor}
        secondaryColor={theme.palette.grey[300]}
        defaultCenterLabel="Target 85%"
      />

      <Typography variant="body2" color="text.secondary">
        Processing time decreased by {settlement?.avgProcessingDays ?? 0} days
      </Typography>
    </Box>
  );
}
