export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; description: string; href: string }[];
}

export const navItems: NavItem[] = [
  {
    label: "Features",
    href: "/features",
    hasDropdown: true,
    dropdownItems: [
      { label: "Daily Pulse", description: "Executive summary of key metrics every morning", href: "/features#daily-pulse" },
      { label: "Problems Indicator", description: "Automated issue detection across sales and cash flow", href: "/features#problems-indicator" },
      { label: "Cash Flow Risk", description: "Predictive runway analysis and working capital alerts", href: "/features#cash-flow-risk" },
      { label: "Profitability Risk", description: "Track net margins, discount abuse & rising product costs", href: "/features#profitability-risk" },
      { label: "Sales Performance", description: "Product & customer breakdown with growth momentum analytics", href: "/features#sales-performance" },
      { label: "Supplier Risk", description: "Vendor payment terms, credit periods & price hike tracking", href: "/features#supplier-risk" },
      { label: "Receivables Recovery", description: "Overdue tracking with automated payment reminders", href: "/features#receivables-recovery" },
      { label: "Dead Stock", description: "Identify slow-moving inventory > 90 days to free capital", href: "/features#dead-stock" },
    ],
  },
  {
    label: "Solutions",
    href: "/#features",
    hasDropdown: true,
    dropdownItems: [
      { label: "For Founders & CEOs", description: "High-level health score & growth levers", href: "/#features" },
      { label: "For CFOs & Finance", description: "Deep Tally analytics & cash flow forecast", href: "/#features" },
      { label: "For Sales Operations", description: "Dead stock alerts & customer payment trends", href: "/#features" },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
