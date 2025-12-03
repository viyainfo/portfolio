"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiFramer, SiGithubactions, SiOpenai, SiLangchain, SiVercel, SiAngular } from "react-icons/si";

export function LogosStrip() {
  const logos = [
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "React", icon: <FaReact className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "Angular", icon: <SiAngular className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "Express.js", icon: <SiExpress className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "OpenAI", icon: <SiOpenai className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "LangChain", icon: <SiLangchain className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "Figma", icon: <FaFigma className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "Docker", icon: <FaDocker className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "Vercel", icon: <SiVercel className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
  ];

  return (
    <div className="absolute bottom-4 left-0 right-0 w-full px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden py-2 sm:py-3">
          {/* Left gradient blur overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient blur overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-2 sm:gap-3 whitespace-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-1-${index}`}
                  className="flex items-center gap-2 sm:gap-2.5 md:gap-3  px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 text-slate-500"
                >
                  {logo.icon}
                  <span className="text-xs sm:text-sm md:text-base font-medium">{logo.name}</span>
                </div>
              ))}
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-2-${index}`}
                  className="flex items-center gap-2 sm:gap-2.5 md:gap-3 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 text-slate-500"
                >
                  {logo.icon}
                  <span className="text-xs sm:text-sm md:text-base font-medium">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

