export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  metricHighlight: string;
}

export const testimonialsData: TestimonialData[] = [
  {
    id: "arun-kumar",
    quote: "Sarasnova 2.0 changed how we run our business. We now see cash flow issues before they hit us, and our collection cycle improved like never before.",
    author: "Arun Kumar",
    role: "Managing Director",
    company: "ABC Electronics Ltd.",
    location: "Delhi NCR",
    avatar: "AK",
    rating: 5,
    metricHighlight: "35% reduction in overdue receivables",
  },
  {
    id: "rajesh-sharma",
    quote: "Asking SARAS on WhatsApp for instant sales breakdown during vendor negotiation gives us an unfair advantage. It's like having a top CFO in my pocket.",
    author: "Rajesh Sharma",
    role: "Founder & CEO",
    company: "Vanguard Tech & Distribution",
    location: "Mumbai",
    avatar: "RS",
    rating: 5,
    metricHighlight: "₹45L Dead Stock Liquidated",
  },
  {
    id: "priya-nair",
    quote: "Connecting Tally took under 5 minutes. The daily pulse briefing every morning gives our board total confidence in our working capital runway.",
    author: "Priya Nair",
    role: "Head of Finance",
    company: "Apex Healthcare Supplies",
    location: "Bengaluru",
    avatar: "PN",
    rating: 5,
    metricHighlight: "100% Real-time visibility",
  },
];
