import { Typography } from "@mui/material";
import { PieItem } from "./types";

export default function CenterLabel({
  activeData,
  activeIndex,
  defaultValue,
  defaultCenterLabel,
}: {
  activeData: PieItem | null;
  activeIndex: number | null;
  defaultValue: number;
  defaultCenterLabel?: string;
}) {
  if (activeData) {
    return (
      <>
        <Typography
          variant="body2"
          fontWeight={200}
          fontSize={10}
          sx={{ color: "text.secondary" }}
        >
          {activeData.name}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 20,
            color: activeIndex === 0 ? "primary.main" : "text.primary",
          }}
        >
          {activeData.value}%
        </Typography>
      </>
    );
  }

  return (
    <>
      <Typography sx={{ fontWeight: 700, fontSize: 20, color: "primary.main" }}>
        {defaultValue}%
      </Typography>
      {defaultCenterLabel && (
        <Typography variant="caption" sx={{ color: "text.secondary", mt: 0.5 }}>
          {defaultCenterLabel}
        </Typography>
      )}
    </>
  );
}
