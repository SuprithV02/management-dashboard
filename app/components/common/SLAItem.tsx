import { Box, Typography } from "@mui/material";
import useStatusColor from "./UseStatusColor";
import { SlaItem } from "./types";

export default function SLAItem({ name, percent }: SlaItem) {
  const { bg, text } = useStatusColor(percent);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        py: 1.2,
        borderRadius: 2,
        backgroundColor: bg,
      }}
    >
      <Typography variant="body2">{name}</Typography>
      <Typography variant="body2" fontWeight={700} sx={{ color: text }}>
        {percent}%
      </Typography>
    </Box>
  );
}
