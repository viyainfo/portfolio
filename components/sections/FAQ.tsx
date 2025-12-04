"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { useRef } from "react";

export function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: "What is included in your branding services?",
      a: "Our branding services include logo design, brand guidelines, color palettes, typography selection, and brand strategy to create a cohesive identity.",
    },
    {
      q: "How long does it take to complete a branding project?",
      a: "Typically 4-6 weeks depending on project scope, revisions needed, and client feedback timeline. We work in sprints with regular check-ins.",
    },
    {
      q: "Do you offer mobile-friendly designs?",
      a: "Yes, all our designs are fully responsive and optimized for mobile, tablet, and desktop devices with modern best practices.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Absolutely. We specialize in website redesigns, modernizing outdated sites while preserving what works and improving user experience.",
    },
    {
      q: "Do you provide custom development solutions?",
      a: "Yes, we build custom web apps, dashboards, and digital products tailored to your specific business needs using modern tech stacks.",
    },
    {
      q: "Will I be able to update the website on my own?",
      a: "Yes, we can integrate a CMS like WordPress, Contentful, or Sanity so you can easily update content without coding knowledge.",
    },
    {
      q: "How do you approach digital marketing campaigns?",
      a: "We start with strategy and goals, then execute through SEO, content marketing, social media, and paid ads with regular performance tracking.",
    },
    {
      q: "Can you track the performance of marketing campaigns?",
      a: "Yes, we set up analytics dashboards to track KPIs, conversions, traffic sources, and ROI with detailed monthly reports.",
    },
  ];

  return (
    <Section id="faq" className="!pb-24">
      {/* Desktop Two-Column Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16" ref={containerRef}>
        {/* Left Column - Sticky */}
        <div className="sticky top-24 self-start h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-fuchsia-400 mb-3">&#123; FAQ &#125;</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
              CLEAR SOLUTIONS TO
              <br />
              YOUR CONCERNS
            </h2>
            
            {/* Decorative Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20" />
              <div className="relative aspect-[4/3] bg-slate-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-slate-300 text-sm">Got Questions?</p>
                    <p className="text-slate-400 text-xs mt-1">We have answers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Scrolling FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm text-fuchsia-400 mb-3">&#123; FAQ &#125;</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight mb-6">
            CLEAR SOLUTIONS TO YOUR CONCERNS
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.details
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-slate-800/80 bg-slate-950/80 px-4 py-4"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-slate-100 list-none">
                <span>{faq.q}</span>
                <Plus className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const ref = useRef<HTMLDetailsElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98]);

  return (
    <motion.details
      ref={ref}
      style={{ opacity, y, scale }}
      className="group rounded-2xl border border-slate-800/50 bg-slate-950/80 backdrop-blur-sm hover:border-slate-700 transition-colors duration-300"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-medium text-slate-100 list-none">
        <span>{faq.q}</span>
        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-fuchsia-500 transition-colors">
          <Plus className="h-4 w-4 text-slate-400 group-hover:text-fuchsia-400 transition-all group-open:rotate-45" />
        </div>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
      </div>
    </motion.details>
  );
}

