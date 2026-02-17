"use client";

import { Box, Typography, useTheme, alpha } from "@mui/material";

interface SLAItem {
  name: string;
  percent: number;
}

interface Props {
  title?: string;
  data: SLAItem[];
}

export default function SLAComplianceList({ title, data }: Props) {
  const theme = useTheme();

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
        {data.map((item) => {
          let bgColor = alpha(theme.palette.success.main, 0.08);
          let textColor = theme.palette.success.dark;

          if (item.percent <= 90 && item.percent >= 70) {
            bgColor = alpha(theme.palette.warning.main, 0.08);
            textColor = theme.palette.warning.dark;
          }

          if (item.percent < 70) {
            bgColor = alpha(theme.palette.error.main, 0.08);
            textColor = theme.palette.error.dark;
          }

          return (
            <Box
              key={item.name}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
                py: 1.2,
                borderRadius: 2,
                backgroundColor: bgColor,
              }}
            >
              <Typography variant="body2">{item.name}</Typography>

              <Typography
                variant="body2"
                fontWeight={700}
                sx={{ color: textColor }}
              >
                {item.percent}%
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
