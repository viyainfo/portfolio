"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery & scope",
      desc: "We understand your goals, users, and constraints. Then define a realistic, lean roadmap.",
    },
    {
      step: "02",
      title: "UX flows & UI design",
      desc: "User flows, wireframes, and final UI screens in Figma — ready for development.",
    },
    {
      step: "03",
      title: "Build & integrate",
      desc: "Convert designs into production-ready code: frontend, backend APIs, auth, and integrations.",
    },
    {
      step: "04",
      title: "Launch & iterate",
      desc: "Ship to production, track feedback, and refine with continuous improvements.",
    },
  ];

  return (
    <Section id="process">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
            Simple, transparent process.
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            No messy hand-offs. Design and development under one roof — with
            async communication that respects your time.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          className="grid gap-4 sm:grid-cols-2"
        >
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5"
            >
              <div className="absolute -left-3 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-[10px] font-semibold text-slate-950 shadow-lg">
                {step.step}
              </div>
              <h3 className="pl-4 text-sm font-semibold text-slate-50">
                {step.title}
              </h3>
              <p className="mt-2 pl-4 text-xs sm:text-sm text-slate-400">
                {step.desc}
              </p>
              {idx < steps.length - 1 && (
                <div className="mt-3 pl-4 text-[10px] text-slate-500">
                  ~3–5 days per phase on average
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

