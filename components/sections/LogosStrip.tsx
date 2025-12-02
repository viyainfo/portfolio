"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiFramer, SiGithubactions, SiOpenai, SiLangchain, SiVercel, SiAngular } from "react-icons/si";

export function LogosStrip() {
  const logos = [
    { name: "Next.js", icon: <SiNextdotjs size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Angular", icon: <SiAngular size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
    { name: "Framer Motion", icon: <SiFramer size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "OpenAI", icon: <SiOpenai size={40} /> },
    { name: "LangChain", icon: <SiLangchain size={40} /> },
    { name: "Figma", icon: <FaFigma size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "Vercel", icon: <SiVercel size={40} /> },
    { name: "GitHub Actions", icon: <SiGithubactions size={40} /> },
  ];

  return (
    <section className={`relative mt-[100px]`}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative overflow-hidden whitespace-nowrap w-full rounded-lg">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex gap-3 whitespace-nowrap"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  duration: 12,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {logos.map((logo) => (
                  <div
                    key={logo.name + "-copy"}
                    className="flex items-center gap-4 rounded-full  px-3 py-1 text-[10px] sm:text-lg text-slate-500"
                  >
                    {logo.icon}
                    {logo.name}
                  </div>
                ))}
                {logos.map((logo) => (
                  <div
                    key={logo.name + "-copy"}
                    className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs text-slate-300"
                  >
                    {logo.icon}
                    {logo.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

