"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  const testimonials = [
    {
      title: "Customer-First Approach",
      description:
        "Your business goals guide our decisions, ensuring solutions crafted around your needs.",
    },
    {
      title: "Experienced Team",
      description:
        "Skilled developers, designers, and strategists with hands-on industry experience.",
      featured: true,
    },
    {
      title: "On-Time Delivery",
      description:
        "We follow a structured workflow to deliver projects on schedule without compromise.",
    },
  ];

  return (
    <Section className="">
      <div className="space-y-12 overflow-hidden">
        <div className="mb-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight flex justify-center items-center gap-2">
            <span>
              Why Choose
            </span>
            <span>
              <img src='/viyainfo_brand.svg' alt="ViyaInfo" width={140} />
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver digital solutions that create real impact.
          </p>
        </div>

        <div className="grid gap-2 lg:grid-cols-3 items-end max-w-6xl mx-auto px-4">
          {testimonials.map((item, idx) => (
            <div
              key={item.title}
              className={`
                relative rounded-t-3xl p-6 sm:p-8 transition-all duration-300 border border-slate-800/50
                ${item.featured
                  ? "bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl lg:-mt-8 lg:py-12 lg:scale-105"
                  : "bg-slate-900/90"
                }
                hover:scale-105 hover:shadow-2xl hover:border-slate-700 flex items-end
              `}
              style={{
                minHeight: item.featured ? "420px" : "360px",
                zIndex: item.featured ? 1 : 0
              }}
            >
              <div className="flex flex-col h-full justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

