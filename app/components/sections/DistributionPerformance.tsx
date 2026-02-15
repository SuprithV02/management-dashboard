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

export default function DistributionPerformance() {
  const theme = useTheme();

  const data = [
    {
      name: "Brokers",
      percent: 65,
      value: "$278.5M",
      lr: 58,
      lrColor: theme.palette.success.main,
      icon: <BusinessIcon fontSize="small" />,
    },
    {
      name: "Digital / Direct",
      percent: 22,
      value: "$94.5M",
      lr: 74,
      lrColor: theme.palette.error.main,
      icon: <ComputerIcon fontSize="small" />,
    },
    {
      name: "Agents",
      percent: 13,
      value: "$55.8M",
      lr: 65,
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
              }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
