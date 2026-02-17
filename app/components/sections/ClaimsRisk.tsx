"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  useTheme,
} from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ShieldIcon from "@mui/icons-material/Shield";
import InteractivePieChart from "../common/InteractivePieChart";

interface Props {
  data: any;
}

export default function ClaimsRisk({ data }: Props) {
  const theme = useTheme();

  const ratio = data?.settlement?.ratio ?? 0;

  const pieData = [
    { name: "Settled Claims", value: ratio },
    { name: "Unsettled Claims", value: 100 - ratio },
  ];

  const mainColor =
    ratio < 60 ? theme.palette.error.light : theme.palette.primary.light;

  return (
    <Card elevation={2} sx={{ borderRadius: 3 }}>
      <CardContent>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <ShieldIcon sx={{ color: "primary.main", fontSize: 26 }} />
          <Typography variant="h6" fontWeight={700}>
            Claims & Risk Analysis
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* LINE CHART */}
          <Box sx={{ flex: 2, minWidth: 280 }}>
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

            {/* Legend BELOW */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                mt: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  Current
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "grey.400",
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  Previous
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* SETTLEMENT RATIO */}
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
              primaryColor={mainColor}
              secondaryColor={theme.palette.grey[300]}
              defaultCenterLabel="Target 85%"
            />

            <Typography variant="body2" color="text.secondary">
              Processing time decreased by{" "}
              {data?.settlement?.avgProcessingDays ?? 0} days
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
