import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({ children, className, size = "lg", ...props }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1440px]",
  };

  return (
    <div className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
