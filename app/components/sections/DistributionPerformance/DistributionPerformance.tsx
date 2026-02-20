import { Card, CardContent } from "@mui/material";
import { SectionHeader } from "../ClaimsTab/ClaimsRisk.helpers";
import { ChannelRow, useChannelItems } from "./Distribution.helpers";

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

interface Props {
  mockData?: DistributionData;
}

interface ChannelItem {
  name: string;
  percent: number;
  value: string;
  lossRatio: number;
  icon: React.ReactNode;
}

export default function DistributionPerformance({ mockData }: Props) {
  const channelItems = useChannelItems(mockData);

  return (
    <Card elevation={2} sx={{ borderRadius: 3, height: "100%" }}>
      <CardContent>
        <SectionHeader />
        {channelItems.map((item) => (
          <ChannelRow
            key={item.name}
            item={item as ChannelItem & { lrColor: string }}
          />
        ))}
      </CardContent>
    </Card>
  );
}
