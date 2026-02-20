import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

type TrendType = "up" | "down" | "warning" | undefined;

export const CARD_HOVER_SX = {
  transform: "translateY(-6px) scale(1.02)",
  boxShadow: 8,
};

export function useCardColors(trend: string | undefined, highlight: boolean) {
  const isAtRisk = trend === "AT_RISK";

  return {
    backgroundColor: isAtRisk
      ? "error.light"
      : highlight
        ? "primary.light"
        : "#fff",
    color: isAtRisk
      ? "#fff"
      : highlight
        ? "primary.contrastText"
        : "text.primary",
  };
}

export function TrendIcon({ trendType }: { trendType: TrendType }) {
  if (trendType === "up") return <TrendingUpIcon fontSize="small" />;
  if (trendType === "down") return <TrendingDownIcon fontSize="small" />;
  return null;
}

export function getTrendColor(highlight: boolean, trendType: TrendType) {
  if (highlight) return "#fff";
  if (trendType === "up") return "success.main";
  if (trendType === "down") return "error.main";
  return "warning.main";
}
