"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Product Lead, SaaS Startup",
      quote:
        "Viyainfo felt like an internal product team, not an agency. They shipped our MVP faster than expected.",
    },
    {
      name: "Founder, Fintech",
      quote:
        "Clear communication, clean code and strong design sense. Our investors loved the updated dashboard.",
    },
    {
      name: "CTO, Services Company",
      quote:
        "Handled both UI and backend very smoothly. Their Next.js knowledge saved us weeks of trial and error.",
    },
  ];

  return (
    <Section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
            Trusted by teams who care about quality.
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Consistent communication, maintainable code and design that actually
            converts — that&apos;s the promise.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          className="grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5"
            >
              <Quote className="h-4 w-4 text-fuchsia-400" />
              <p className="mt-3 text-xs sm:text-sm text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 text-xs font-medium text-slate-400">
                {t.name}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

