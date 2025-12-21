"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Company Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
            Let’s Build Something Amazing
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto pb-5">Have an idea or project in mind? Our team is ready to help you turn it into a powerful digital product.</p>

          {/* Profile Card */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-100">V</span>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-100">ViyaInfo Team</h3>
              <p className="text-sm text-slate-400 mb-3">CEO & Founder</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                At ViyaInfo, we believe in building meaningful digital experiences.
                If you ever have questions or need guidance, we&apos;re always here to support you.
                Your success is our mission — let&apos;s create something incredible together.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-6">
            {/* Name and Email in One Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Service Needed?
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer">
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="ai-automation">AI & Automation</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What Can I Help You...
              </label>
              <textarea
                rows={6}
                placeholder="Hello, I'd like to enquire about..."
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/30 active:scale-[0.98]"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

