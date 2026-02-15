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

export default function PortfolioRetention() {
  const theme = useTheme();

  // Data
  const renewals = 72;
  const newBiz = 28;
  const lapseRatio = 5.8;

  const pieData = [
    { name: "Renewals", value: renewals },
    { name: "New Biz", value: newBiz },
  ];

  return (
    <Card elevation={2} sx={{ borderRadius: 3, height: "100%" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <PieChartIcon
            sx={{ color: theme.palette.primary.main, fontSize: 26 }}
          />
          <Typography variant="h6" fontWeight={700}>
            Portfolio & Retention
          </Typography>
        </Box>

        {/* Light Grey Divider */}
        <Divider
          sx={{
            mb: 3,
            backgroundColor: "#e5e7eb",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {/* LEFT SIDE - DONUT */}
          <Box
            sx={{
              flex: 1,
              minWidth: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Donut Chart */}
            <Box sx={{ width: 160, height: 160, position: "relative" }}>
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
                    <Cell fill={theme.palette.primary.main} />
                    <Cell fill={theme.palette.primary.light} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center Percentage */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 24,
                }}
              >
                {renewals}%
              </Box>
            </Box>

            {/* Indicators */}
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
                gap: 4,
              }}
            >
              {/* Renewals */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
                <Typography variant="caption">Renewals</Typography>
                <Typography
                  variant="caption"
                  fontWeight={600}
                  color="primary.main"
                >
                  {renewals}%
                </Typography>
              </Box>

              {/* New Biz */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.light,
                  }}
                />
                <Typography variant="caption">New Biz</Typography>
                <Typography
                  variant="caption"
                  fontWeight={600}
                  sx={{ color: theme.palette.primary.light }}
                >
                  {newBiz}%
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* RIGHT SIDE - BARS */}
          <Box sx={{ flex: 1, minWidth: 250 }}>
            {/* Overall Retention Rate */}
            <Box mb={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="body2" fontWeight={600}>
                  Overall Retention Rate
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  color="primary.main"
                >
                  {renewals}%
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={renewals}
                sx={{
                  height: 8,
                  borderRadius: 5,
                }}
              />
            </Box>

            {/* Lapse Ratio */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="body2" fontWeight={600}>
                  Lapse Ratio
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{ color: theme.palette.error.main }}
                >
                  {lapseRatio}%
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={lapseRatio}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.error.main,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
