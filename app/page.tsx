"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Layers,
  Palette,
  CloudCog,
  Workflow,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ChevronRight,
} from "lucide-react";


// Services Data
const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "High-performance web apps built with React, Next.js and Angular — optimized for speed and SEO.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using React Native with secure APIs and cloud backends.",
  },
  {
    icon: Layers,
    title: "Fullstack Product Development",
    description:
      "End-to-end solutions from UI to database with Node.js, REST APIs and clean architecture.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive interfaces, component systems and user journeys to improve engagement.",
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    description:
      "AWS deployments, CI/CD pipelines, monitoring, automation and security best practices.",
  },
  {
    icon: Workflow,
    title: "Integrations & Automation",
    description:
      "Payment gateways, APIs and automation workflows that save your business hours every week.",
  },
];

// Portfolio Data
const projects = [
  {
    title: "HR Management Portal",
    description:
      "Attendance, leave, approvals and employee workflows in one integrated system.",
  },
  {
    title: "Loan Processing Dashboard",
    description:
      "A secure dashboard for managing loan applications, verification and approvals.",
  },
  {
    title: "AI Property Retrieval System",
    description:
      "Smart search and filtering engine for property datasets using intelligent logic.",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* ========================== HERO SECTION ============================= */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 grid gap-12 md:grid-cols-2 items-center">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Viyainfo Tech Solutions
          </span>

          <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
            Empowering Digital Products  
            <span className="block text-blue-500">That Actually Ship</span>
          </h1>

          <p className="mt-4 text-slate-300 text-sm md:text-base max-w-xl">
            We help startups and businesses design, build and scale modern web & mobile
            applications using React, Angular, Node.js, and cloud-native architectures.
          </p>

          <div className="mt-6 flex gap-3 text-xs text-slate-300 flex-wrap">
            <span className="rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              3+ Years Fullstack Experience
            </span>
            <span className="rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              Production-Ready Solutions
            </span>
            <span className="rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              Secure & Scalable
            </span>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-sm font-medium">
              Contact Us
            </button>
            <button className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium hover:bg-slate-900">
              View Projects
            </button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 h-40 w-40 bg-blue-500/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-emerald-500/20 blur-3xl rounded-full"></div>

          <div className="relative border border-slate-800 rounded-2xl bg-slate-900/70 p-6">
            <p className="text-xs text-emerald-400 mb-2">Tech Stack</p>
            <p className="text-sm text-slate-200">
              React · Next.js · Angular · Node.js · Express · AWS · CI/CD
            </p>
          </div>
        </motion.div>
      </section>


      {/* ========================== SERVICES SECTION ============================= */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
          <p className="mt-3 text-slate-300 text-sm md:text-base">
            End-to-end engineering solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-800 bg-slate-900/60 rounded-2xl p-6 hover:border-blue-500/60 hover:-translate-y-1 transition"
            >
              <service.icon className="h-6 w-6 mb-3 text-blue-400" />
              <h3 className="font-medium text-base">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ========================== ABOUT SECTION ============================= */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Who We Are</h2>
          <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
            Viyainfo Tech Solutions is a fullstack-focused engineering partner helping
            businesses launch scalable digital products. We specialize in modern JavaScript
            frameworks and cloud-based architectures.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-blue-400 text-3xl font-bold">3+</p>
              <p className="text-xs text-slate-400">Years Experience</p>
            </div>
            <div>
              <p className="text-blue-400 text-3xl font-bold">10+</p>
              <p className="text-xs text-slate-400">Projects Delivered</p>
            </div>
            <div>
              <p className="text-blue-400 text-3xl font-bold">5+</p>
              <p className="text-xs text-slate-400">Domains Covered</p>
            </div>
          </div>
        </motion.div>
      </section>


      {/* ========================== PORTFOLIO SECTION ============================= */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Recent Projects</h2>
          <p className="mt-3 text-slate-300 text-sm">
            A glimpse of the solutions we’ve delivered.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-blue-500/60 hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              <button className="mt-4 flex items-center gap-1 text-blue-400 text-sm hover:underline">
                Learn More <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ========================== CONTACT SECTION ============================= */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s Build Together</h2>
          <p className="mt-3 text-slate-300 text-sm max-w-lg mx-auto">
            Share your idea and we’ll get back with a clear technical roadmap.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
            <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/60">
              <Mail className="h-6 w-6 mb-2 text-blue-400" />
              <p className="font-medium">Email</p>
              <p className="text-sm text-slate-300">contact@viyainfo.com</p>
            </div>

            <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/60">
              <MapPin className="h-6 w-6 mb-2 text-blue-400" />
              <p className="font-medium">Location</p>
              <p className="text-sm text-slate-300">Bengaluru, India</p>
            </div>

            <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/60">
              <Github className="h-6 w-6 mb-2 text-blue-400" />
              <p className="font-medium">GitHub</p>
              <p className="text-sm text-slate-300">github.com/viyainfo</p>
            </div>
          </div>
        </motion.div>
      </section>


      {/* ========================== FOOTER ============================= */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Viyainfo Tech Solutions. All rights reserved.
      </footer>

    </main>
  );
}
