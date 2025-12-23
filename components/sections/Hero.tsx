"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { LogosStrip } from "./LogosStrip";
import { useEffect, useState } from "react";

function TypingText({ text, gradientText, speed = 100 }: { text: string; gradientText: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = text + gradientText;

  useEffect(() => {
    let currentIndex = 0;
    setIsTyping(true);
    setDisplayedText("");
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [fullText, speed]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const regularPart = displayedText.slice(0, text.length);
  const gradientPart = displayedText.slice(text.length);

  return (
    <>
      {/* Hidden full text to reserve space and prevent layout shift */}
      <span className="invisible block" aria-hidden="true">
        {text}
        <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
          {gradientText}
        </span>
      </span>
      {/* Visible typing text */}
      <span className="absolute left-0 top-0 block text-slate-100">
        {regularPart}
        {gradientPart && (
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            {gradientPart}
          </span>
        )}
        {showCursor && isTyping && (
          <span className="inline-block ml-0.5 text-fuchsia-400">|</span>
        )}
      </span>
    </>
  );
}

export function Hero() {
  return (
    <Section id="top" className="min-h-[85vh] sm:min-h-[90vh] flex items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-[1.2fr_0.9fr] items-center w-full"
      >
        {/* Left */}
        <div className="order-1 text-center lg:text-left">
          <motion.h1
            variants={fadeUp}
            custom={0.08}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-semibold tracking-tight relative inline-block"
          >
            <TypingText text="Smart IT Solutions for a " gradientText="Smarter Tomorrow." speed={80} />
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.16}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0"
          >
            We build modern digital solutions that help businesses grow faster.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.24}
            className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              {/* <Rocket className="h-4 w-4" />
              <span>Launch my project</span> */}
              <span>View work</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-slate-500 hover:bg-slate-800/80 transition-all"
            >
            </a> */}
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          variants={fadeUp}
          custom={0.24}
          className="relative order-2 lg:order-2 w-full"
        >
          {/* Glowing card background */}
          <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-cyan-400/30 blur-2xl opacity-70" />
          <div className="relative rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-4 sm:p-5 lg:p-6 shadow-2xl shadow-fuchsia-900/60">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-6 w-6 sm:h-9 sm:w-9 items-center justify-center rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-700 flex-shrink-0">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-fuchsia-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-md font-medium text-slate-100">
                    Project timeline
                  </div>
                  <div className="text-[10px] sm:text-sm text-slate-400">Design → Code → Deploy</div>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[12px] font-medium text-emerald-300 border border-emerald-500/40 whitespace-nowrap self-start sm:self-auto">
                4–8 weeks avg
              </span>
            </div>

            <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
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
                  className="flex items-start justify-between gap-2 rounded-xl sm:rounded-2xl border border-slate-800/80 bg-slate-900/70 px-2.5 sm:px-3 py-2 sm:py-2.5"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-100 text-xs sm:text-sm">{item.label}</span>
                    </div>
                    <p className="mt-1 text-[11px] sm:text-[12px] text-slate-400">
                      {item.sub}
                    </p>
                  </div>
                  <span className="mt-0.5 text-[11px] sm:text-[12px] text-slate-400 whitespace-nowrap flex-shrink-0">
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

