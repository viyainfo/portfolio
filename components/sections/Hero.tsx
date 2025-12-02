"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { LogosStrip } from "./LogosStrip";

export function Hero() {
  return (
    <Section id="top" className="pt-4 sm:pt-5 lg:pt-8 h-[90vh] flex items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] items-center"
      >
        {/* Left */}
        <div>
          <motion.h1
            variants={fadeUp}
            custom={0.08}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-[56px] font-semibold tracking-tight"
          >
            <span className="block text-slate-100">
              Smart IT Solutions for a{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Smarter Tomorrow.
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.16}
            className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl"
          >
            We build modern digital solutions that help businesses grow faster.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.24}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Rocket className="h-4 w-4" />
              <span>Launch my project</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-slate-500 hover:bg-slate-800/80 transition-all"
            >
              <span>View work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          variants={fadeUp}
          custom={0.24}
          className="relative"
        >
          {/* Glowing card background */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-cyan-400/30 blur-2xl opacity-70" />
          <div className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-5 sm:p-6 shadow-2xl shadow-fuchsia-900/60">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 border border-slate-700">
                  <Sparkles className="h-5 w-5 text-fuchsia-400" />
                </div>
                <div>
                  <div className="text-md font-medium text-slate-100">
                    Project timeline
                  </div>
                  <div className="text-sm text-slate-400">Design → Code → Deploy</div>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[12px] font-medium text-emerald-300 border border-emerald-500/40">
                4–8 weeks avg
              </span>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              {[
                {
                  label: "Landing pages",
                  sub: "High-converting Next.js marketing sites",
                },
                {
                  label: "Dashboards & SaaS",
                  sub: "Fullstack apps with auth, APIs & DB",
                },
                {
                  label: "Mobile apps",
                  sub: "React Native apps for Android & iOS",
                },
                {
                  label: "AI integration",
                  sub: "Chatbots, assistants & automation",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-3 py-2.5"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-slate-100">{item.label}</span>
                    </div>
                    <p className="mt-1 text-[12px] text-slate-400">
                      {item.sub}
                    </p>
                  </div>
                  <span className="mt-0.5 text-[12px] text-slate-400">
                    Included
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <LogosStrip />
    </Section>
  );
}

