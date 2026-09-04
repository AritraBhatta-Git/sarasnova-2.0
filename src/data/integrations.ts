export interface IntegrationData {
  id: string;
  name: string;
  category: string;
  status: string;
  description: string;
  iconName: string;
  highlightColor: string;
  popular?: boolean;
}

export const integrationsData: IntegrationData[] = [
  {
    id: "tally",
    name: "TallyPrime",
    category: "ERP & Accounting",
    status: "Connected",
    description: "Instant 2-way real-time background sync with Tally ERP 9 & TallyPrime.",
    iconName: "Database",
    highlightColor: "#7C3AED",
    popular: true,
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    category: "Communication",
    status: "Connected",
    description: "Receive daily pulse alerts, ask SARAS queries, and trigger payment reminders.",
    iconName: "MessageCircle",
    highlightColor: "#22C55E",
    popular: true,
  },
  {
    id: "email",
    name: "Email & PDF",
    category: "Reporting",
    status: "Connected",
    description: "Automated executive morning emails and downloadable board deck reports.",
    iconName: "Mail",
    highlightColor: "#3B82F6",
    popular: true,
  },
  {
    id: "excel",
    name: "Excel / CSV",
    category: "Data Export",
    status: "Connected",
    description: "One-click export of clean structured data and multi-tab ledger summaries.",
    iconName: "FileSpreadsheet",
    highlightColor: "#10B981",
    popular: true,
  },
  {
    id: "more",
    name: "And More +",
    category: "Banking & Tax",
    status: "Available",
    description: "Connect ICICI, HDFC, GST portal, and custom Webhooks seamlessly.",
    iconName: "PlusCircle",
    highlightColor: "#8B5CF6",
  },
];
