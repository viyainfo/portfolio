"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function FAQ() {
  const faqs = [
    {
      q: "How do we start working together?",
      a: "Fill the form or email with a short description of your project. We'll schedule a quick call to align on scope, timeline and the right plan.",
    },
    {
      q: "Do you only work on subscription?",
      a: "No. Subscription is great for ongoing work. For fixed-scope projects (like a one-time MVP or website), we can do a fixed estimate.",
    },
    {
      q: "Which stack do you prefer?",
      a: "Frontend with Next.js/React, backend with Node/Express/Nest, and databases like PostgreSQL/MongoDB. For mobile, React Native.",
    },
    {
      q: "Can you join our existing team?",
      a: "Yes. We can work with your designers, developers or PMs and collaborate via GitHub, Jira, Slack, etc.",
    },
  ];

  return (
    <Section id="faq">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
            Questions, answered.
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            If something isn&apos;t covered here, reach out — we&apos;ll reply
            with honest, transparent answers.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          className="space-y-3"
        >
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-800/80 bg-slate-950/80 px-4 py-3"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm text-slate-100 list-none">
                <span>{f.q}</span>
                <ChevronDown className="h-4 w-4 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">{f.a}</p>
            </details>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

