"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, AlertCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Email sent successfully! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send email. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success/Error Message */}
            <AnimatePresence>
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Name and Email in One Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johnsmith@gmail.com"
                  required
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
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="AI & Automation">AI & Automation</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What Can I Help You... *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Hello, I'd like to enquire about..."
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

