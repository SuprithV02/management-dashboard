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

import BusinessIcon from "@mui/icons-material/Business";
import ComputerIcon from "@mui/icons-material/Computer";
import GroupsIcon from "@mui/icons-material/Groups";
import InsightsIcon from "@mui/icons-material/Insights";
import { mock } from "node:test";

export default function DistributionPerformance({ mockData }: any) {
  const theme = useTheme();

  console.log(mockData);

  const data = [
    {
      name: "Brokers",
      percent: mockData?.Brokers?.sharePercent || 0,
      value: `$${mockData?.Brokers?.value || 0}M` || 0,
      lr: mockData?.Brokers?.lossRatio || 0,
      lrColor: theme.palette.success.main,
      icon: <BusinessIcon fontSize="small" />,
    },
    {
      name: "Digital / Direct",
      percent: mockData?.DIGITAL_DIRECT?.sharePercent || 0,
      value: `$${mockData?.DIGITAL_DIRECT?.value || 0}M` || 0,
      lr: mockData?.DIGITAL_DIRECT?.lossRatio || 0,
      lrColor: theme.palette.error.main,
      icon: <ComputerIcon fontSize="small" />,
    },
    {
      name: "Agents",
      percent: mockData?.Agents?.sharePercent || 0,
      value: `$${mockData?.Agents?.value || 0}M` || 0,
      lr: mockData?.Agents?.lossRatio || 0,
      lrColor: theme.palette.warning.main,
      icon: <GroupsIcon fontSize="small" />,
    },
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
          <InsightsIcon
            sx={{
              color: theme.palette.primary.main,
              fontSize: 26,
            }}
          />
          <Typography variant="h6" fontWeight={700}>
            Distribution Performance
          </Typography>
        </Box>

        {/* Light Grey Divider */}
        <Divider
          sx={{
            mb: 4,
            backgroundColor: "#e5e7eb",
          }}
        />

        {data.map((item) => (
          <Box key={item.name} mb={4}>
            {/* Top Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 1.5,
              }}
            >
              {/* Left */}
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <Box sx={{ color: theme.palette.text.secondary }}>
                  {item.icon}
                </Box>

                <Box>
                  <Typography variant="body2" fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.percent}% of total GWP
                  </Typography>
                </Box>
              </Box>

              {/* Right */}
              <Box textAlign="right">
                <Typography variant="body2" fontWeight={600}>
                  {item.value}
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={600}
                  sx={{ color: item.lrColor }}
                >
                  LR {item.lr}%
                </Typography>
              </Box>
            </Box>

            {/* Progress Bar */}
            <LinearProgress
              variant="determinate"
              value={item.percent}
              sx={{
                height: 8,
                borderRadius: 5,
                backgroundColor: theme.palette.grey[200], // track (grey)
                "& .MuiLinearProgress-bar": {
                  backgroundColor: theme.palette.primary.light, // fill (light blue)
                },
              }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
