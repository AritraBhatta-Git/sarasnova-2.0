import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sarasnova 2.0 — AI CFO for Indian Businesses",
  description:
    "Sarasnova 2.0 connects with Tally, reads your data in real-time, and turns it into clarity, insights, and action—every single day for Indian businesses.",
  keywords: [
    "AI CFO",
    "Tally integration",
    "Indian SMB business intelligence",
    "Cash flow forecasting",
    "Receivables recovery",
    "Dead stock liquidation",
    "Sarasnova 2.0",
    "Ask SARAS",
  ],
  authors: [{ name: "Sarasnova AI" }],
  openGraph: {
    title: "Sarasnova 2.0 — AI CFO for Indian Businesses",
    description:
      "Turn financial & operational data into clear insights, risks and actions with Sarasnova 2.0.",
    url: "https://sarasnova.ai",
    siteName: "Sarasnova 2.0",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarasnova 2.0 — AI CFO for Indian Businesses",
    description: "AI CFO for Indian Businesses powered by real-time Tally data sync.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased selection:bg-purple-500 selection:text-white`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
