"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Divider from "@mui/material/Divider";

export default function ClaimsRisk({ data }: any) {
  console.log("ClaimsRisk component received data:", data?.settlement);
  const pieData = [
    { name: "Settled", value: data?.settlement?.ratio },
    { name: "Remaining", value: 100 - (data?.settlement?.ratio || 0) },
  ];

  return (
    <Card elevation={2} sx={{ borderRadius: 3 }}>
      <CardContent>
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <ShieldOutlinedIcon sx={{ color: "#1976d2", fontSize: 26 }} />
          <Typography variant="h6" fontWeight={700}>
            Claims & Risk Analysis
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, backgroundColor: "#e5e7eb" }} />

        {/* Main Content Row */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            flexWrap: "wrap", // responsive
          }}
        >
          {/* LINE CHART */}
          <Box sx={{ flex: 2, minWidth: 280 }}>
            {/* Custom Legend */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 3,
                mb: 1,
              }}
            >
              {/* Current */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#1976d2",
                  }}
                />
                <Typography variant="caption">Current</Typography>
              </Box>

              {/* Previous */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#9ca3af",
                  }}
                />
                <Typography variant="caption">Previous</Typography>
              </Box>
            </Box>

            {/* Line Chart */}
            <Box sx={{ height: 210 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data?.claimsVolumeTrend || []}
                  margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
                >
                  <XAxis dataKey="month" interval={0} tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="current"
                    stroke="#1976d2"
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="#9ca3af"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>

          {/* SETTLEMENT RATIO */}
          <Box
            sx={{
              flex: 1,
              minWidth: 180,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {/* Top heading */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              Settlement Ratio
            </Typography>

            {/* Pie chart with dynamic color */}
            <Box sx={{ width: 120, height: 120, position: "relative" }}>
              {(() => {
                const ratio = data?.settlement?.ratio || 0;

                // Determine color based on ratio
                let pieColor = "#f59e0b"; // amber default
                if (ratio >= 85)
                  pieColor = "#16a34a"; // green
                else if (ratio < 60) pieColor = "#dc2626"; // red

                return (
                  <>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={pieData}
                          innerRadius={45}
                          outerRadius={60}
                          dataKey="value"
                          startAngle={90}
                          endAngle={-270}
                        >
                          <Cell fill={pieColor} />
                          <Cell fill="#f3f4f6" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>

                    {/* Center Percentage and Target */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: 700, fontSize: 20, color: pieColor }}
                      >
                        {ratio}%
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 400,
                          fontSize: 12,
                          color: "text.secondary",
                          mt: 0.5,
                        }}
                      >
                        Target 85%
                      </Typography>
                    </Box>
                  </>
                );
              })()}
            </Box>

            {/* Bottom statement */}
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ maxWidth: 180, mt: 1 }}
            >
              Average Processing time decreased by{" "}
              {data?.settlement?.avgProcessingDays || 0} days this year.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
