"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
            Tell us about your next project.
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Share a short brief and we&apos;ll respond with next steps, a rough
            timeline, and the best plan for your budget.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          animate="visible"
          className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <form className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 text-sm">
                <label className="text-slate-200">Name</label>
                <input
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-fuchsia-500/70"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="space-y-1.5 text-sm">
                <label className="text-slate-200">Email</label>
                <input
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-fuchsia-500/70"
                  placeholder="you@company.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-1.5 text-sm">
              <label className="text-slate-200">What do you want to build?</label>
              <textarea
                className="min-h-[120px] w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-fuchsia-500/70"
                placeholder="Short description of your idea, current status, and any deadlines."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 text-sm">
                <label className="text-slate-200">Budget range</label>
                <select className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-fuchsia-500/70">
                  <option value="">Select an option</option>
                  <option value="under-25k">Under ₹25,000</option>
                  <option value="25-75k">₹25,000 – ₹75,000</option>
                  <option value="75k-1.5l">₹75,000 – ₹1.5L</option>
                  <option value="above-1.5l">Above ₹1.5L</option>
                </select>
              </div>
              <div className="space-y-1.5 text-sm">
                <label className="text-slate-200">Timeline</label>
                <select className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-fuchsia-500/70">
                  <option value="">Select an option</option>
                  <option value="asap">ASAP</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <span>Send project brief</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="space-y-4 text-sm">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
              <h3 className="text-sm font-semibold text-slate-100 mb-2">
                Direct contact
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-fuchsia-400" />
                  <span>viyainfotechsolution@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-fuchsia-400" />
                  <span>+91 · 9353726228</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-fuchsia-400" />
                  <span>Remote · India</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
              <h3 className="text-sm font-semibold text-slate-100 mb-2">
                Social & code
              </h3>
              <div className="flex gap-3 text-xs text-slate-300">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 hover:border-fuchsia-500/60 transition"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 hover:border-fuchsia-500/60 transition"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

