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
        cursor: "pointer",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        backgroundColor:
          trend === "AT_RISK"
            ? "error.light"
            : highlight
              ? "primary.light"
              : "#fff",
        color:
          trend === "AT_RISK"
            ? "#fff"
            : highlight
              ? "primary.contrastText"
              : "text.primary",

        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: 8, // MUI elevation shadow
        },
      }}
    >
      <CardContent>
        {/* VALUE + TREND ROW */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: highlight ? "#fff" : "#111",
            }}
          >
            {value}
          </Typography>

          {trend && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
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

              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {trend}
              </Typography>
            </Box>
          )}
        </Box>

        {/* TITLE BELOW VALUE */}
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            mt: 1,
            color: highlight ? "rgba(255,255,255,0.8)" : "text.secondary",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
