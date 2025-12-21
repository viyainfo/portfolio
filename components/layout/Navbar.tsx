"use client";

import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

export function Navbar() {
  const navItems: any[] = [
    // { label: "Services", href: "#services" },
    // { label: "Process", href: "#process" },
    // { label: "Projects", href: "#projects" },
    // { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-99 backdrop-blur-xl border-b border-slate-800/60 bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-0 py-5">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <div className="w-[150]">
            <img src='/viyainfo_brand.svg' alt="ViyaInfo" />
          </div>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems?.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="flex items-center gap-3"> */}
        <motion.div
          variants={fadeUp}
          custom={0.24}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <Rocket className="h-4 w-4" />
            <span>Launch my project</span>
            {/* <ArrowRight className="h-4 w-4" /> */}
          </a>
        </motion.div>
        {/* </div> */}
      </nav>
    </header>
  );
}

