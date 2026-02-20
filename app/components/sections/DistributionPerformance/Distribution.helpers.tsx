import {
  Box,
  Divider,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ComputerIcon from "@mui/icons-material/Computer";
import GroupsIcon from "@mui/icons-material/Groups";
import InsightsIcon from "@mui/icons-material/Insights";

interface ChannelData {
  sharePercent: number;
  value: number;
  lossRatio: number;
}

interface DistributionData {
  Brokers: ChannelData;
  DIGITAL_DIRECT: ChannelData;
  Agents: ChannelData;
}

interface ChannelItem {
  name: string;
  percent: number;
  value: string;
  lossRatio: number;
  icon: React.ReactNode;
}

interface ChannelItem {
  name: string;
  percent: number;
  value: string;
  lossRatio: number;
  lrColor: string;
  icon: React.ReactNode;
}

export function useChannelItems(mockData?: DistributionData): ChannelItem[] {
  const theme = useTheme();

  return [
    {
      name: "Brokers",
      percent: mockData?.Brokers?.sharePercent ?? 0,
      value: `$${mockData?.Brokers?.value ?? 0}M`,
      lossRatio: mockData?.Brokers?.lossRatio ?? 0,
      lrColor: theme.palette.success.main,
      icon: <BusinessIcon fontSize="small" />,
    },
    {
      name: "Digital / Direct",
      percent: mockData?.DIGITAL_DIRECT?.sharePercent ?? 0,
      value: `$${mockData?.DIGITAL_DIRECT?.value ?? 0}M`,
      lossRatio: mockData?.DIGITAL_DIRECT?.lossRatio ?? 0,
      lrColor: theme.palette.error.main,
      icon: <ComputerIcon fontSize="small" />,
    },
    {
      name: "Agents",
      percent: mockData?.Agents?.sharePercent ?? 0,
      value: `$${mockData?.Agents?.value ?? 0}M`,
      lossRatio: mockData?.Agents?.lossRatio ?? 0,
      lrColor: theme.palette.warning.main,
      icon: <GroupsIcon fontSize="small" />,
    },
  ];
}

export function SectionHeader() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <InsightsIcon sx={{ color: "primary.main", fontSize: 26 }} />
        <Typography variant="h6" fontWeight={700}>
          Distribution Performance
        </Typography>
      </Box>
      <Divider sx={{ mb: 4 }} />
    </>
  );
}

export function ChannelRow({ item }: { item: ChannelItem }) {
  const theme = useTheme();

  return (
    <Box mb={4}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1.5,
        }}
      >
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Box sx={{ color: "text.secondary" }}>{item.icon}</Box>
          <Box>
            <Typography variant="body2" fontWeight={600}>
              {item.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.percent}% of total GWP
            </Typography>
          </Box>
        </Box>

        <Box textAlign="right">
          <Typography variant="body2" fontWeight={600}>
            {item.value}
          </Typography>
          <Typography
            variant="caption"
            fontWeight={600}
            sx={{ color: item.lrColor }}
          >
            LR {item.lossRatio}%
          </Typography>
        </Box>
      </Box>

      <LinearProgress
        variant="determinate"
        value={item.percent}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: theme.palette.grey[200],
          "& .MuiLinearProgress-bar": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      />
    </Box>
  );
}
