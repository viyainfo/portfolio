"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Laptop,
  Smartphone,
  Palette,
  BrainCircuit,
  CheckCircle2,
  Star,
  Quote,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={`relative px-4 sm:px-6 lg:px-8 py-12 ${className}`}
  >
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f172a_0,_#020617_55%,_#020617_100%)]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px]" />

      <Navbar />
      <main className="pt-20 sm:pt-24">
        <Hero />
        <LogosStrip />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-xl border-b border-slate-800/60 bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/40">
            <span className="text-xs font-bold tracking-tight">V</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-semibold">
              ViyaInfo
            </span>
            {/* <span className="text-[10px] sm:text-xs text-slate-400">
              Tech Solutions
            </span> */}
          </div>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <span>Book a project</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <Section id="top" className="pt-4 sm:pt-5 lg:pt-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center"
      >
        {/* Left */}
        <div>
          {/* <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-slate-900/70 px-3 py-1 text-[11px] sm:text-xs text-slate-200 shadow-sm mb-4"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Now taking projects for December 2025</span>
          </motion.div> */}

          <motion.h1
            variants={fadeUp}
            custom={0.08}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight"
          >
            <span className="block text-slate-100">
              Ship stunning{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                websites & apps
              </span>
            </span>
            <span className="mt-2 block text-slate-300">
              with your own on-demand product team.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.16}
            className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl"
          >
            Viyainfo is a remote studio helping startups and founders build
            production-ready{" "}
            <span className="text-slate-200">
              UI/UX, web apps, mobile apps, and AI-powered tools
            </span>{" "}
            — fast, flexible, and subscription-friendly.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.24}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Rocket className="h-4 w-4" />
              <span>Launch my project</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-slate-500 hover:bg-slate-800/80 transition-all"
            >
              <span>View work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* <motion.div
            variants={fadeUp}
            custom={0.32}
            className="mt-6 grid gap-4 text-xs sm:text-sm text-slate-300 sm:grid-cols-3 max-w-xl"
          >
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
              <div className="text-lg sm:text-xl font-semibold text-slate-50">
                2.6+
              </div>
              <div className="text-slate-400">Years fullstack experience</div>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
              <div className="text-lg sm:text-xl font-semibold text-slate-50">
                10+
              </div>
              <div className="text-slate-400">Production projects shipped</div>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
              <div className="text-lg sm:text-xl font-semibold text-slate-50">
                Next.js · React · Node
              </div>
              <div className="text-slate-400">Modern, scalable stack</div>
            </div>
          </motion.div> */}
        </div>

        {/* Right */}
        <motion.div
          variants={fadeUp}
          custom={0.24}
          className="relative"
        >
          {/* Glowing card background */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-cyan-400/30 blur-2xl opacity-70" />
          <div className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-5 sm:p-6 shadow-2xl shadow-fuchsia-900/60">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 border border-slate-700">
                  <Sparkles className="h-5 w-5 text-fuchsia-400" />
                </div>
                <div className="text-xs">
                  <div className="font-medium text-slate-100">
                    Project timeline
                  </div>
                  <div className="text-slate-400">Design → Code → Deploy</div>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-medium text-emerald-300 border border-emerald-500/40">
                4–8 weeks avg
              </span>
            </div>

            <div className="mt-5 space-y-3 text-xs">
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
                  className="flex items-start justify-between gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-3 py-2.5"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-slate-100">{item.label}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400">
                      {item.sub}
                    </p>
                  </div>
                  <span className="mt-0.5 text-[10px] text-slate-400">
                    Included
                  </span>
                </div>
              ))}
            </div>

            {/* <div className="mt-5 rounded-2xl border border-fuchsia-500/40 bg-gradient-to-r from-fuchsia-900/40 via-slate-900 to-slate-900 px-4 py-3 text-xs flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-wide text-fuchsia-300/80">
                  Subscription-friendly
                </div>
                <div className="text-slate-100">
                  Pausable monthly plans for growing startups.
                </div>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-950 hover:bg-slate-50 transition">
                <span>See pricing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function LogosStrip() {
  const logos = ["Next.js", "React", "Node.js", "Framer Motion", "Tailwind"];

  return (
    <Section >
      <div className="rounded-3xl border border-slate-800/70 bg-slate-950/70 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Built with battle-tested technologies</span>
          </div>
          <div className="flex flex-wrap gap-3 text-[10px] sm:text-xs text-slate-300">
            {logos.map((logo) => (
              <div
                key={logo}
                className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  const services = [
    {
      icon: <Laptop className="h-5 w-5" />,
      title: "Web apps & dashboards",
      desc: "Modern, responsive apps using Next.js, React & Node with clean APIs and scalable architecture.",
      tags: ["Next.js", "SaaS", "Admin panels"],
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile app development",
      desc: "React Native apps for Android & iOS, sharing logic with your existing web stack.",
      tags: ["React Native", "Cross-platform"],
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "UI/UX & branding",
      desc: "Pixel-perfect Figma designs, design systems, and brand identity for startups.",
      tags: ["Figma", "Design systems"],
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "AI & automation",
      desc: "AI assistants, chatbots, and workflow automation using modern AI APIs.",
      tags: ["Chatbots", "Automation"],
    },
  ];

  return (
    <Section id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
              Services focused on shipping real products.
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              From landing pages to full SaaS platforms, Viyainfo plugs in as
              your extended product team — design + engineering together.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          className="grid gap-5 sm:grid-cols-2"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 hover:border-fuchsia-500/60 hover:bg-slate-900/80 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-slate-900/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity" />
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-700/80">
                  <span className="text-fuchsia-400">{service.icon}</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                {service.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900/80 border border-slate-800 px-2.5 py-1 text-[10px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery & scope",
      desc: "We understand your goals, users, and constraints. Then define a realistic, lean roadmap.",
    },
    {
      step: "02",
      title: "UX flows & UI design",
      desc: "User flows, wireframes, and final UI screens in Figma — ready for development.",
    },
    {
      step: "03",
      title: "Build & integrate",
      desc: "Convert designs into production-ready code: frontend, backend APIs, auth, and integrations.",
    },
    {
      step: "04",
      title: "Launch & iterate",
      desc: "Ship to production, track feedback, and refine with continuous improvements.",
    },
  ];

  return (
    <Section id="process">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
            Simple, transparent process.
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            No messy hand-offs. Design and development under one roof — with
            async communication that respects your time.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          className="grid gap-4 sm:grid-cols-2"
        >
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5"
            >
              <div className="absolute -left-3 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-[10px] font-semibold text-slate-950 shadow-lg">
                {step.step}
              </div>
              <h3 className="pl-4 text-sm font-semibold text-slate-50">
                {step.title}
              </h3>
              <p className="mt-2 pl-4 text-xs sm:text-sm text-slate-400">
                {step.desc}
              </p>
              {idx < steps.length - 1 && (
                <div className="mt-3 pl-4 text-[10px] text-slate-500">
                  ~3–5 days per phase on average
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      name: "InsightBoard",
      type: "Analytics Dashboard",
      desc: "Data-rich admin panel with role-based access, custom charts and real-time updates.",
      stack: "Next.js · Node · PostgreSQL",
    },
    {
      name: "Viyapay",
      type: "Fintech Web App",
      desc: "Secure, responsive app for managing payouts, invoices and transaction analytics.",
      stack: "React · Express · MongoDB",
    },
    {
      name: "Tasky Mobile",
      type: "Productivity Mobile App",
      desc: "Cross-platform task manager with offline sync and push notifications.",
      stack: "React Native · REST APIs",
    },
  ];

  return (
    <Section id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
              Projects that feel premium and perform.
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Real-world apps shipped for startups and internal teams. Clean
              UI, clean code, and maintainable architectures.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          className="grid gap-5 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 hover:border-fuchsia-500/70 hover:bg-slate-900/80 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-slate-950/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wide text-fuchsia-300/90">
                  {project.type}
                </div>
                <div className="flex gap-1 text-[10px] text-yellow-300/90">
                  <Star className="h-3 w-3 fill-yellow-300/80" />
                  <Star className="h-3 w-3 fill-yellow-300/80" />
                  <Star className="h-3 w-3 fill-yellow-300/80" />
                </div>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">
                {project.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                {project.desc}
              </p>
              <p className="mt-3 text-[11px] text-slate-300">
                {project.stack}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Testimonials() {
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
                “{t.quote}”
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

function FAQ() {
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


function Contact() {
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
            <p className="text-[11px] text-slate-500">
              This form is static right now. You can hook it to{" "}
              <span className="text-slate-300">Formspree, Resend, or your own API</span>{" "}
              to receive submissions.
            </p>
          </form>

          <div className="space-y-4 text-sm">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
              <h3 className="text-sm font-semibold text-slate-100 mb-2">
                Direct contact
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-fuchsia-400" />
                  <span>hello@viyainfo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-fuchsia-400" />
                  <span>+91 · your-number-here</span>
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
              <p className="mt-2 text-[11px] text-slate-500">
                Replace links with your actual profiles and this becomes your
                portfolio hub.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 mt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Viyainfo. Crafted with Next.js & love.
        </div>
        <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
          <span>Built by Pavan Kumar</span>
          <span className="hidden sm:inline">•</span>
          <span>Fullstack Developer · India</span>
        </div>
      </div>
    </footer>
  );
}
