import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 text-white flex flex-col justify-center">
      <Container size="md" className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold">Solutions for Indian Businesses</h1>
        <p className="text-slate-400">
          Tailored financial intelligence for Founders, CFOs, Sales Leads, and Operations.
        </p>
        <div className="pt-4">
          <Button href="/" variant="primary">
            ← Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
