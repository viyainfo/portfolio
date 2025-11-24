"use client";

// Next.js 14 + TailwindCSS + Framer Motion
// Viyainfo landing page with:
// - Sticky navbar with shadow on scroll
// - Mobile hamburger menu
// - Scrollspy active highlight
// - Smooth scrolling to sections (same page)
// - Basic animations via Framer Motion
// - Services, About, Portfolio, Contact & Footer

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sections = ["hero", "about", "services", "portfolio", "contact"] as const;

type SectionId = (typeof sections)[number];

export default function Home() {
  const [active, setActive] = useState<SectionId>("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const scrollToSection = (id: SectionId) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      setShadow(scrollY > 30);

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(sec);
        }
      });
    };

    handler(); // run once on mount
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkClass = (id: SectionId) => {
    const base = "transition-colors";
    const activeClass = "text-yellow-300 font-semibold";
    const idleClass = "hover:text-gray-200";
    return `${base} ${active === id ? activeClass : idleClass}`;
  };

  return (
    <main className="bg-white text-black scroll-smooth min-h-screen">
      {/* HEADER & NAV */}
      <header
        id="hero"
        className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white pb-20"
      >
        <nav
          className={`flex items-center justify-between px-6 md:px-12 py-4 fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md transition-shadow ${
            shadow ? "shadow-lg" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-300 to-purple-500" />
            <span className="text-2xl font-bold tracking-wide">Viyainfo</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 text-sm md:text-base items-center">
            <button onClick={() => scrollToSection("about")} className={linkClass("about")}>
              About
            </button>
            <button onClick={() => scrollToSection("services")} className={linkClass("services")}>
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className={linkClass("portfolio")}>
              Portfolio
            </button>
            <button onClick={() => scrollToSection("contact")} className={linkClass("contact")}>
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-4 py-2 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-3xl leading-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-black/70 backdrop-blur-md text-white px-6 py-6 space-y-4">
            <button className="block w-full text-left" onClick={() => scrollToSection("about")}>
              About
            </button>
            <button className="block w-full text-left" onClick={() => scrollToSection("services")}>
              Services
            </button>
            <button className="block w-full text-left" onClick={() => scrollToSection("portfolio")}>
              Portfolio
            </button>
            <button className="block w-full text-left" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>
        )}

        {/* HERO SECTION */}
        <section className="px-6 md:px-20 pt-32 md:pt-40 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Empowering
              <span className="block">Digital Innovation</span>
            </h1>
            <p className="text-base md:text-lg mb-8 opacity-90">
              Viyainfo Tech Solutions builds smart, scalable and secure software products tailored
              for growing businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-white text-purple-700 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Talk to Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-6 py-3 bg-transparent border border-white rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
              >
                View Services
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs md:text-sm opacity-90">
              {[
                "3+ Years Experience",
                "Fullstack Development",
                "Secure Infrastructure",
                "Client-Centric Approach",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg.white/10 border border-white/20 backdrop-blur-md bg-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end flex-1"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center shadow-2xl">
              <Image src="/tech-sphere.png" alt="Tech visual" width={220} height={220} />
            </div>
          </motion.div>
        </section>
      </header>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white text-black py-20 md:py-24 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Our Services</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          From UI to deployment, we provide end-to-end technology solutions for web and mobile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Responsive, performant websites using modern stacks like React and Next.js.",
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform apps built with React Native and robust backend APIs.",
            },
            {
              title: "Fullstack Solutions",
              desc: "Complete systems from UI to database, designed for scale.",
            },
            {
              title: "UI/UX Design",
              desc: "Clean and intuitive user experiences for web and mobile products.",
            },
            {
              title: "Cloud & DevOps",
              desc: "Deployments on AWS / cloud with CI/CD, security and monitoring.",
            },
            {
              title: "Automation & Integrations",
              desc: "Workflows, APIs and tools that save time and reduce manual effort.",
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-20 md:py-24 px-6 md:px-20 bg-gradient-to-br from-purple-600 to-blue-500 text.white text-white"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="opacity-95 leading-relaxed mb-4 text-sm md:text-base">
              Viyainfo Tech Solutions is a fullstack-focused tech partner helping startups and
              businesses ship high-quality software faster.
            </p>
            <ul className="space-y-2 text-sm md:text-base">
              <li>✔ Mission-driven, long-term partnerships</li>
              <li>✔ Strong experience with React, Angular, Node.js and modern stacks</li>
              <li>✔ Focus on clean architecture, performance and security</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white/15 backdrop-blur-xl h-56 md:h-64 flex items-center justify-center text-center text-sm md:text-base px-6"
          >
            Building reliable digital products with modern technology and a strong focus on user
            experience.
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 md:py-24 px-6 md:px-20 bg-gray-50 text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Selected Work</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          A quick look at the kind of solutions we can build for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["HR Management Portal", "Loan Processing Dashboard", "Property Retrieval System"].map(
            (project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl h-52 bg-white border border-gray-200 shadow-sm hover:shadow-xl transition p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold mb-2 text-base md:text-lg">{project}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Built with modern web technologies, focusing on performance, usability and
                    scalability.
                  </p>
                </div>
                <span className="mt-4 text-xs md:text-sm text-purple-700 font-medium">
                  View case study (coming soon)
                </span>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-20 md:py-24 px-6 md:px-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Let&apos;s Build Something</h2>
        <p className="text-center opacity-90 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Share your idea or requirement and we&apos;ll get back to you with a clear next step.
        </p>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-6 md:p-10 rounded-3xl">
          <form className="grid grid-cols-1 gap-4 md:gap-6">
            <input
              className="p-3 md:p-4 rounded-xl bg-white text-black text-sm md:text-base"
              placeholder="Your Name"
            />
            <input
              className="p-3 md:p-4 rounded-xl bg.white text-black text-sm md:text-base bg-white"
              placeholder="Email Address"
              type="email"
            />
            <input
              className="p-3 md:p-4 rounded-xl bg-white text-black text-sm md:text-base"
              placeholder="Phone Number"
              type="tel"
            />
            <textarea
              className="p-3 md:p-4 rounded-xl bg-white text-black h-28 md:h-32 text-sm md:text-base"
              placeholder="Tell us briefly about your project or requirement"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 md:py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-100 transition text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-8 px-6 md:px-20 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-0 md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-300 to-purple-500" />
              <span className="font-semibold text-white">Viyainfo Tech Solutions</span>
            </div>
            <p className="text-xs md:text-sm text-gray-400">
              Building reliable digital products with modern web and mobile technologies.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs md:text-sm">
            <span>© {new Date().getFullYear()} Viyainfo. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
