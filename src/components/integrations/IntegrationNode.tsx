"use client";

import React from "react";
import { Database, MessageCircle, Mail, FileSpreadsheet, PlusCircle } from "lucide-react";
import { IntegrationData } from "@/data/integrations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5" />,
  PlusCircle: <PlusCircle className="w-5 h-5" />,
};

interface IntegrationNodeProps {
  integration: IntegrationData;
  isActive?: boolean;
  onSelect?: () => void;
}

export function IntegrationNode({ integration, isActive, onSelect }: IntegrationNodeProps) {
  const icon = iconMap[integration.iconName] || <Database className="w-5 h-5" />;

  return (
    <div
      onClick={onSelect}
      className={cn(
        "p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer group flex items-center gap-3.5",
        "bg-white/80 dark:bg-slate-900/80 hover:-translate-y-1 hover:shadow-xl",
        isActive
          ? "border-purple-500 shadow-lg shadow-purple-500/20 bg-purple-50/60 dark:bg-purple-950/40"
          : "border-purple-500/15 dark:border-purple-500/20 hover:border-purple-500/40"
      )}
    >
      <div
        className="p-3 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
        style={{ backgroundColor: integration.highlightColor }}
      >
        {icon}
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {integration.name}
          </h4>
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            {integration.status}
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
          {integration.description}
        </p>
      </div>
    </div>
  );
}
