import { Card, CardContent, Typography, Box } from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

interface Props {
  title: string;
  value: string;
  trend?: string;
  trendType?: "up" | "down" | "warning";
  highlight?: boolean;
}

export default function KpiCard({
  title,
  value,
  trend,
  trendType,
  highlight,
}: Props) {
  const isUp = trendType === "up";
  const isDown = trendType === "down";

  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
        backgroundColor: highlight ? "primary.main" : "#fff",
        color: highlight ? "#fff" : "inherit",
      }}
    >
      <CardContent>
        {/* TITLE */}
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            color: highlight ? "rgba(255,255,255,0.8)" : "text.secondary",
            mb: 1,
          }}
        >
          {title}
        </Typography>

        {/* VALUE */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: highlight ? "#fff" : "#111",
          }}
        >
          {value}
        </Typography>

        {/* TREND */}
        {trend && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mt: 1.5,
              color: highlight
                ? "#fff"
                : isUp
                  ? "success.main"
                  : isDown
                    ? "error.main"
                    : "warning.main",
            }}
          >
            {isUp && <TrendingUpIcon fontSize="small" />}
            {isDown && <TrendingDownIcon fontSize="small" />}

            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
              }}
            >
              {trend}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
