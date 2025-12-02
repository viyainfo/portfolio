"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Projects() {
  const projects = [
    {
      name: "InsightBoard",
      type: "Analytics Dashboard",
      desc: "Data-rich admin panel with role-based access, custom charts and real-time updates.",
      stack: "Next.js · Node · PostgreSQL",
    },
    {
      name: "Viyapay",
      type: "Fintech Web App",
      desc: "Secure, responsive app for managing payouts, invoices and transaction analytics.",
      stack: "React · Express · MongoDB",
    },
    {
      name: "Tasky Mobile",
      type: "Productivity Mobile App",
      desc: "Cross-platform task manager with offline sync and push notifications.",
      stack: "React Native · REST APIs",
    },
  ];

  return (
    <Section id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
              Projects that feel premium and perform.
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Real-world apps shipped for startups and internal teams. Clean
              UI, clean code, and maintainable architectures.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          className="grid gap-5 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 hover:border-fuchsia-500/70 hover:bg-slate-900/80 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-slate-950/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wide text-fuchsia-300/90">
                  {project.type}
                </div>
                <div className="flex gap-1 text-[10px] text-yellow-300/90">
                  <Star className="h-3 w-3 fill-yellow-300/80" />
                  <Star className="h-3 w-3 fill-yellow-300/80" />
                  <Star className="h-3 w-3 fill-yellow-300/80" />
                </div>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">
                {project.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                {project.desc}
              </p>
              <p className="mt-3 text-[11px] text-slate-300">
                {project.stack}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

