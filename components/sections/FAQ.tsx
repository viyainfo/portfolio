"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { useRef } from "react";

export function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: "What services does Viyainfo provide?",
      a: "We offer web development, mobile app development, UI/UX design, social media creatives, graphic design, and content writing.",
    },
    {
      q: "How long does it take to complete a project?",
      a: "Project duration depends on complexity, but most websites/apps are delivered within 2–6 weeks.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes, we provide complete maintenance, updates, and support after project delivery.",
    },
    {
      q: "What technologies do you use?",
      a: "React, Next.js, Angular, Node.js, MongoDB, MySQL, React Native, AWS, and more.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Absolutely — we can revamp your design, improve performance, and upgrade technology.",
    },
    {
      q: "Do you develop mobile apps for both iOS and Android?",
      a: "Yes, we develop cross-platform mobile apps using React Native that work on both iOS and Android, saving time and cost.",
    },
    {
      q: "What is included in your UI/UX design service?",
      a: "Our UI/UX design includes user research, wireframing, prototyping, visual design, user testing, and design system creation for consistent brand experience.",
    },
    {
      q: "Are your websites mobile-responsive?",
      a: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices with modern best practices.",
    },
    {
      q: "How does the design revision process work?",
      a: "We include multiple revision rounds in our packages. You can provide feedback, and we'll refine the design until you're completely satisfied.",
    },
    {
      q: "Do you handle website hosting and deployment?",
      a: "Yes, we can set up hosting on AWS, Vercel, Netlify, or your preferred platform and handle the complete deployment process.",
    },
  ];

  return (
    <Section id="faq">
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
            <div className="text-center lg:text-left">
              <h2 className="text-[36px] font-bold text-white leading-tight mb-5">
                Frequently Asked Questions
              </h2>
              <p className="text-[18px] text-slate-400 mt-3 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Find answers to common questions about our services and process.
              </p>
            </div>

            {/* Decorative Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20" />
              <div className="relative aspect-[4/3] bg-slate-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                 <img src="/faq.png"/>
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
          className="mb-8 text-center"
        >
          <h2 className="text-[36px] font-bold text-white leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] text-slate-400 mt-3 leading-relaxed mb-6 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
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

