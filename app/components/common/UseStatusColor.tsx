import { alpha, useTheme } from "@mui/material";

type StatusColor = {
  bg: string;
  text: string;
};

export default function useStatusColor(percent: number): StatusColor {
  const theme = useTheme();

  if (percent < 70) {
    return {
      bg: alpha(theme.palette.error.main, 0.08),
      text: theme.palette.error.dark,
    };
  }

  if (percent <= 90) {
    return {
      bg: alpha(theme.palette.warning.main, 0.08),
      text: theme.palette.warning.dark,
    };
  }

  return {
    bg: alpha(theme.palette.success.main, 0.08),
    text: theme.palette.success.dark,
  };
}
