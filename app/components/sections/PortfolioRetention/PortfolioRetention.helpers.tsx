import {
  Box,
  Divider,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import PieChartIcon from "@mui/icons-material/PieChart";

const POSITIVE_STATUSES = ["STABLE", "STRONG"];

export function useStatusColor(status: string | undefined) {
  const theme = useTheme();
  return POSITIVE_STATUSES.includes(status ?? "")
    ? theme.palette.success.light
    : theme.palette.error.light;
}

export function SectionHeader({ status }: { status: string | undefined }) {
  const statusColor = useStatusColor(status);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PieChartIcon sx={{ color: "primary.main", fontSize: 26 }} />
          <Typography variant="h6" fontWeight={700}>
            Portfolio & Retention
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: statusColor,
            borderRadius: 1,
            px: 2,
            py: 0.5,
            minWidth: 80,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" fontWeight={600} color="#fff">
            {status ?? "UNKNOWN"}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
    </>
  );
}

export function DonutChart({
  renewalPercent,
  newBizPercent,
}: {
  renewalPercent: number;
  newBizPercent: number;
}) {
  const theme = useTheme();

  const pieData = [
    { name: "Renewals", value: renewalPercent },
    { name: "New Biz", value: newBizPercent },
  ];

  const legendItems = [
    {
      label: `Renewals ${renewalPercent}%`,
      color: theme.palette.primary.light,
    },
    { label: `New Biz ${newBizPercent}%`, color: theme.palette.grey[300] },
  ];

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 220,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 160,
          height: 160,
          position: "relative",
          transition: "transform 0.25s ease",
          cursor: "pointer",
          "&:hover": { transform: "translateY(-4px) scale(1.02)" },
        }}
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={55}
              outerRadius={75}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              <Cell fill={theme.palette.primary.light} />
              <Cell fill={theme.palette.grey[300]} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 24,
            color: theme.palette.primary.light,
          }}
        >
          {renewalPercent}%
        </Box>
      </Box>

      <Box sx={{ mt: 3, display: "flex", gap: 4 }}>
        {legendItems.map(({ label, color }) => (
          <Box
            key={label}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function MetricBar({
  label,
  value,
  valueColor,
  barColor,
}: {
  label: string;
  value: number;
  valueColor: string;
  barColor: string;
}) {
  const theme = useTheme();

  return (
    <Box mb={4}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body2" fontWeight={600}>
          {label}
        </Typography>
        <Typography variant="body2" fontWeight={700} color={valueColor}>
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: theme.palette.grey[200],
          "& .MuiLinearProgress-bar": { backgroundColor: barColor },
        }}
      />
    </Box>
  );
}

export function RetentionMetrics({
  overallRetentionRate,
  lapseRatio,
  insight,
}: {
  overallRetentionRate: number;
  lapseRatio: number;
  insight?: string;
}) {
  const theme = useTheme();

  return (
    <Box sx={{ flex: 1, minWidth: 250 }}>
      <MetricBar
        label="Overall Retention Rate"
        value={overallRetentionRate}
        valueColor="success.main"
        barColor={theme.palette.success.light}
      />
      <MetricBar
        label="Lapse Ratio"
        value={lapseRatio}
        valueColor="error.main"
        barColor={theme.palette.error.light}
      />
      {insight && (
        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 2,
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <Typography variant="body2" color="text.primary">
            &ldquo;{insight}&rdquo;
          </Typography>
        </Box>
      )}
    </Box>
  );
}
