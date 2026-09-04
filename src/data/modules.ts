export interface ProductModuleData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  metric: string;
  change?: string;
  badgeText: string;
  badgeType: "warning" | "success" | "neutral" | "danger";
  accentColor: "purple" | "blue" | "green" | "violet" | "amber" | "indigo";
}

export const productModules: ProductModuleData[] = [
  {
    id: "daily-pulse",
    title: "Daily Pulse",
    tagline: "Morning Executive Briefing",
    description: "Your executive summary sent every morning. Key sales, bank balances, and urgent flags at a glance.",
    iconName: "Zap",
    metric: "₹18.85L Today",
    change: "+14.2% vs yesterday",
    badgeText: "Real-time",
    badgeType: "success",
    accentColor: "purple",
  },
  {
    id: "problems-indicator",
    title: "Problems Indicator",
    tagline: "Automated Anomaly Detection",
    description: "AI scans 10,000+ ledger entries to surface hidden margin leakages, unusual expenses, and delayed payments.",
    iconName: "AlertTriangle",
    metric: "4 Critical Issues",
    change: "Needs attention",
    badgeText: "Action Needed",
    badgeType: "danger",
    accentColor: "amber",
  },
  {
    id: "cash-flow-risk",
    title: "Cash Flow Risk",
    tagline: "Predictive Working Capital",
    description: "Forecast cash shortages 30-60 days before they happen so you never miss supplier obligations or payroll.",
    iconName: "TrendingDown",
    metric: "₹1.35Cr Runway",
    change: "68 Days available",
    badgeText: "Healthy",
    badgeType: "success",
    accentColor: "blue",
  },
  {
    id: "profitability-risk",
    title: "Profitability Risk",
    tagline: "Margin Protection Engine",
    description: "Track gross and net margins per product line. Spot unrecovered freight costs and falling item margins immediately.",
    iconName: "ShieldAlert",
    metric: "28.4% Net Margin",
    change: "-2.1% erosion alert",
    badgeText: "Margin Alert",
    badgeType: "warning",
    accentColor: "purple",
  },
  {
    id: "sales-performance",
    title: "Sales Performance",
    tagline: "Client & Territory Intelligence",
    description: "Analyze customer repeat buying cycles, top performing sales reps, and declining account velocity.",
    iconName: "BarChart3",
    metric: "+408.2% YoY",
    change: "142 Active accounts",
    badgeText: "Strong Growth",
    badgeType: "success",
    accentColor: "green",
  },
  {
    id: "supplier-risk",
    title: "Supplier Risk",
    tagline: "Vendor Dependency & Credit",
    description: "Monitor vendor payment terms, cash discount lost opportunities, and supplier concentration vulnerability.",
    iconName: "Truck",
    metric: "12 Primary Vendors",
    change: "2 Payment term reviews",
    badgeText: "Optimized",
    badgeType: "neutral",
    accentColor: "indigo",
  },
  {
    id: "receivables-recovery",
    title: "Receivables Recovery",
    tagline: "Automated Outstanding Collections",
    description: "Categorize debt by age (30/60/90+ days), send automated polite WhatsApp reminders, and protect your cash.",
    iconName: "Receipt",
    metric: "₹48.07L Overdue",
    change: "5 Priority clients",
    badgeText: "Follow-up Ready",
    badgeType: "warning",
    accentColor: "violet",
  },
  {
    id: "dead-stock",
    title: "Dead Stock",
    tagline: "Inventory Liquidation Radar",
    description: "Identify non-moving stock holding up valuable warehouse working capital. Get AI liquidation strategies.",
    iconName: "Boxes",
    metric: "₹14.20L Trapped",
    change: "18 Items > 90 days",
    badgeText: "Capital Locked",
    badgeType: "danger",
    accentColor: "amber",
  },
];
