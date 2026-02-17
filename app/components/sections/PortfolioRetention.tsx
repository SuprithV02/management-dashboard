"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  useTheme,
  Divider,
} from "@mui/material";

import PieChartIcon from "@mui/icons-material/PieChart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function PortfolioRetention({ data }: any) {
  const theme = useTheme();

  const renewalPercent = data?.renewalMix?.renewalPercent || 0;
  const newBizPercent = data?.renewalMix?.newBusinessPercent || 0;

  const pieData = [
    { name: "Renewals", value: renewalPercent },
    { name: "New Biz", value: newBizPercent },
  ];

  const getStatusColor = (status: string | undefined) => {
    if (status === "STABLE" || status === "STRONG")
      return theme.palette.success.light;
    return theme.palette.error.light;
  };

  return (
    <Card elevation={2} sx={{ borderRadius: 3, height: "100%" }}>
      <CardContent>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PieChartIcon
              sx={{ color: theme.palette.primary.main, fontSize: 26 }}
            />
            <Typography variant="h6" fontWeight={700}>
              Portfolio & Retention
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: getStatusColor(data?.status),
              borderRadius: 1,
              px: 2,
              py: 0.5,
              minWidth: 80,
              textAlign: "center",
            }}
          >
            <Typography variant="caption" fontWeight={600} color="#fff">
              {data?.status || "UNKNOWN"}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {/* LEFT - DONUT */}
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
                "&:hover": {
                  transform: "translateY(-4px) scale(1.02)",
                },
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
                    {/* Renewals → Light Blue */}
                    <Cell fill={theme.palette.primary.light} />
                    {/* New Biz → Grey */}
                    <Cell fill={theme.palette.grey[300]} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center Value */}
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

            {/* Indicators */}
            <Box sx={{ mt: 3, display: "flex", gap: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.light,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  Renewals {renewalPercent}%
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.grey[300],
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  New Biz {newBizPercent}%
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* RIGHT - PROGRESS BARS */}
          <Box sx={{ flex: 1, minWidth: 250 }}>
            {/* Overall Retention */}
            <Box mb={4}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2" fontWeight={600}>
                  Overall Retention Rate
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  color="success.main"
                >
                  {data?.overallRetentionRate || 0}%
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={data?.overallRetentionRate || 0}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[200], // track
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.success.light, // green bar
                  },
                }}
              />
            </Box>

            {/* Lapse Ratio */}
            <Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2" fontWeight={600}>
                  Lapse Ratio
                </Typography>
                <Typography variant="body2" fontWeight={700} color="error.main">
                  {data?.lapseRatio || 0}%
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={data?.lapseRatio || 0}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[200], // track
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.error.light, // red bar
                  },
                }}
              />
            </Box>

            {/* Insight */}
            {data?.insight && (
              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: theme.palette.grey[100],
                }}
              >
                <Typography variant="body2" color="text.primary">
                  "{data?.insight}"
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
