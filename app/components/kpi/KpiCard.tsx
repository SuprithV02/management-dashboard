import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  CARD_HOVER_SX,
  getTrendColor,
  TrendIcon,
  useCardColors,
} from "./KpiCard.helpers";

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
  highlight = false,
}: Props) {
  const cardColors = useCardColors(trend, highlight);

  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
        cursor: "pointer",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": CARD_HOVER_SX,
        ...cardColors,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: highlight ? "#fff" : "#111" }}
          >
            {value}
          </Typography>

          {trend && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: getTrendColor(highlight, trendType),
              }}
            >
              <TrendIcon trendType={trendType} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {trend}
              </Typography>
            </Box>
          )}
        </Box>

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
