export interface Meta {
  fiscalYear: number;
  quarter: string;
  product: string;
  region: string;
  currency: string;
  unit: string;
  generatedAt: string;
}

export interface KpiMetric {
  value: number;
  yoyChangePercent?: number;
  trend?: "up" | "down" | "warning";
}

export interface LossRatio {
  value: number;
  target: number;
  variance: number;
}

export interface OperatingProfit {
  value: number;
  status: string;
}

export interface Kpis {
  grossWrittenPremium: KpiMetric;
  netEarnedPremium: KpiMetric;
  claimsIncurred: KpiMetric;
  lossRatio: LossRatio;
  combinedRatio: KpiMetric;
  operatingProfit: OperatingProfit;
}

export interface ClaimsVolumeTrend {
  month: string;
  current: number;
  previous: number;
}

export interface Settlement {
  ratio: number;
  target: number;
  avgProcessingDays: number;
  improvementDays: number;
}

export interface ClaimsRisk {
  claimsVolumeTrend: ClaimsVolumeTrend[];
  settlement: Settlement;
}

export interface RenewalMix {
  renewalPercent: number;
  newBusinessPercent: number;
}

export interface PortfolioRetention {
  renewalMix: RenewalMix;
  overallRetentionRate: number;
  lapseRatio: number;
  segmentRetention: { corporate: number; individual: number };
  status: "STABLE" | "STRONG" | "AT_RISK";
  insight?: string;
}

export interface DistributionChannel {
  value: number;
  sharePercent: number;
  lossRatio: number;
}

export interface DistributionPerformance {
  metric: string;
  Brokers: DistributionChannel;
  DIGITAL_DIRECT: DistributionChannel;
  Agents: DistributionChannel;
}

export interface TurnaroundItem {
  process: string;
  days: number;
  benchmark: number;
}

export interface SLAItem {
  name: string;
  percent: number;
  status: "GREEN" | "AMBER" | "RED";
}

export interface OperationalEfficiency {
  slaSummary: { met: number; total: number };
  turnaroundTime: TurnaroundItem[];
  slaItems: SLAItem[];
}

export interface DashboardData {
  year: number;
  meta: Meta;
  kpis: Kpis;
  claimsRisk: ClaimsRisk;
  portfolioRetention: PortfolioRetention;
  distributionPerformance: DistributionPerformance;
  operationalEfficiency: OperationalEfficiency;
}
