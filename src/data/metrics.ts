export interface MetricData {
  value: string;
  label: string;
  sublabel: string;
  trend: string;
}

export const metricsData: MetricData[] = [
  {
    value: "₹250Cr+",
    label: "Transactions Analyzed",
    sublabel: "Processed daily from live Tally ledgers",
    trend: "+28% MoM",
  },
  {
    value: "30%",
    label: "Faster Decision Making",
    sublabel: "Average executive time saved weekly",
    trend: "Proven impact",
  },
  {
    value: "95%",
    label: "Better Control & Clarity",
    sublabel: "Business owners reporting zero surprise cash crunches",
    trend: "Customer rating",
  },
];
