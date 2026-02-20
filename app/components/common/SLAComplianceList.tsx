import { Box, Typography } from "@mui/material";
import SLAItem from "./SLAItem";
import { SLAComplianceListProps } from "./types";

export default function SLAComplianceList({
  title,
  data,
}: SLAComplianceListProps) {
  return (
    <Box>
      {title && (
        <Typography
          variant="subtitle2"
          fontWeight={600}
          color="text.secondary"
          mb={3}
        >
          {title}
        </Typography>
      )}

      <Box display="flex" flexDirection="column" gap={2}>
        {data.map((item) => (
          <SLAItem key={item.name} name={item.name} percent={item.percent} />
        ))}
      </Box>
    </Box>
  );
}
