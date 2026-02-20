export interface PieItem {
  name: string;
  value: number;
}

export interface PieItem {
  name: string;
  value: number;
}

export interface Props {
  data: PieItem[];
  primaryColor: string;
  secondaryColor?: string;
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
  defaultCenterLabel?: string;
}

export interface SlaItem {
  name: string;
  percent: number;
}

export interface SLAComplianceListProps {
  title?: string;
  data: SlaItem[];
}
