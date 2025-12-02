"use client";

import React from "react";

interface AppBackgroundProps {
  children: React.ReactNode;
}

export function AppBackground({ children }: AppBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      {/* Background gradients with animation */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl bg-blob-1" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl bg-blob-2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f172a_0,_#020617_55%,_#020617_100%)]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px]" />

      {children}
    </div>
  );
}

