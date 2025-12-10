"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useRef } from "react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      name: "InsightBoard",
      type: "Analytics",
      desc: "Data-rich admin panel with role-based access, custom charts and real-time updates.",
      stack: "Next.js · Node · PostgreSQL",
      color: "from-blue-500/20 to-cyan-500/20",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Viyapay",
      type: "Fintech",
      desc: "Secure, responsive app for managing payouts, invoices and transaction analytics.",
      stack: "React · Express · MongoDB",
      color: "from-violet-500/20 to-fuchsia-500/20",
      gradient: "from-violet-500 to-fuchsia-500",
    },
    {
      name: "Tasky Mobile",
      type: "Productivity",
      desc: "Cross-platform task manager with offline sync and push notifications.",
      stack: "React Native · REST APIs",
      color: "from-orange-500/20 to-amber-500/20",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <Section id="projects" className="!pb-24">
      {/* Desktop Layout */}
      <div className="hidden lg:block" ref={containerRef}>
        {/* Container that holds both title and cards - limits sticky behavior */}
        <div className="relative" style={{ height: `${(projects.length * 480) + 200}px` }}>
          {/* Sticky Header - Stays visible during card animations, then scrolls with section */}
          <div className="sticky top-20 z-50 bg-slate-950 mb-8">
            <motion.div
                    variants={fadeUp}
                    custom={0}
                    className="text-center"
                >
                    <div className="inline-block">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                            Our Work
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                           A glimpse of the digital solutions we’ve delivered for businesses across different industries.
                        </p>
                    </div>
                </motion.div>
          </div>

          {/* Stacking Cards Container */}
          <div className="relative" style={{ height: `${projects.length * 480}px` }}>
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={idx}
                total={projects.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Grid Layout */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-50">
            Projects that feel premium and perform.
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Real-world apps shipped for startups and internal teams.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            custom={0.12}
            className="grid gap-6"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <ProjectCardContent project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

function ProjectCard({ project, index, total }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isLastCard = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.8],
    [0.9, 1, 1, 0.95]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8],
    [50, 0, 0]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    [0, 0, -1]
  );

  const stickyTop = 180 + (index * 50);

  // Last card is not sticky - allows entire section to scroll together
  if (isLastCard) {
    return (
      <motion.div
        ref={ref}
        style={{
          scale,
          y,
          rotate,
          marginTop: `${stickyTop}px`,
        }}
        className="relative z-10"
      >
        <div style={{ zIndex: total - index }}>
          <ProjectCardContent project={project} />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
        rotate,
        top: `${stickyTop}px`,
      }}
      className="sticky z-10"
    >
      <div style={{ zIndex: total - index }}>
        <ProjectCardContent project={project} />
      </div>
    </motion.div>
  );
}

function ProjectCardContent({ project }: any) {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative h-[400px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-all duration-500">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-100`} />

        {/* Decorative Circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl" />

        {/* Content */}
        <div className="relative h-full flex flex-col p-8">
          {/* Badge */}
          <div className={`inline-flex self-start items-center rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1`}>
            <span className="text-xs font-semibold text-white uppercase tracking-wide">
              {project.type}
            </span>
          </div>

          {/* Project Name */}
          <div className="mt-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
              {project.name}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {project.desc}
            </p>
            <p className="text-xs text-slate-400 mb-6">
              {project.stack}
            </p>

            {/* Arrow Button */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-50 blur-2xl`} />
        </div>
      </div>
    </div>
  );
}

