"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FloatingIcons from "../ui/FloatingIcons";

import {
  SiAngular,
  SiExpress,
  SiFramer,
  SiJupyter,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";

import {
  FaFigma,
  FaNodeJs,
  FaReact,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaAppStoreIos,
} from "react-icons/fa";

import {
  TbBrandReactNative,
  TbBrandAdobeXd,
  TbBrandAdobePhotoshop,
  TbBrandAdobe,
  TbBrandPython,
  TbBrandAndroid,
  TbAutomation,
} from "react-icons/tb";

export function Services() {
  const [active, setActive] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const t1 = useRef(null);
  const t2 = useRef(null);
  const t3 = useRef(null);
  const t4 = useRef(null);
  const t5 = useRef(null);

  const v1 = useInView(t1, { amount: 0.5 });
  const v2 = useInView(t2, { amount: 0.5 });
  const v3 = useInView(t3, { amount: 0.5 });
  const v4 = useInView(t4, { amount: 0.5 });
  const v5 = useInView(t5, { amount: 0.5 });

  useEffect(() => {
    if (v1) setActive(1);
    else if (v2) setActive(2);
    else if (v3) setActive(3);
    else if (v4) setActive(4);
    else if (v5) setActive(5);
  }, [v1, v2, v3, v4, v5]);

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next service
      setActive((prev) => (prev < 5 ? prev + 1 : prev));
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right - previous service
      setActive((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,   // each child animates after 150ms
      delayChildren: 0.1
    }
  }
};

const videoVariant = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as any
    }
  }
};

  return (
    <div className="text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Mobile Card Slider */}
      <div className="md:hidden mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3 max-w-2xl mx-auto">
            Fast, scalable, and user-friendly applications built with modern tech.
          </p>
        </div>

        {/* Swipeable Cards */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800"
            >
              {active === 1 && (
                <div>
                  {/* Video Section */}
                  <div className="relative h-[220px] sm:h-[280px] bg-black">
                    <video
                      src="/videos/dashboard.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-bold text-2xl sm:text-3xl mb-4">
                      Web Apps & Dashboards
                    </h3>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                      We develop responsive apps and internal dashboards using clean APIs,
                      secure architecture, and best-in-class frontend frameworks —
                      tailored for startups and enterprises.
                    </p>
                    
                    {/* Icons Grid */}
                    <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-slate-700">
                      <FaReact size={32} className="text-blue-400" title="React" />
                      <SiNextdotjs size={32} className="text-white" title="Next.js" />
                      <SiAngular size={32} className="text-rose-600" title="Angular" />
                      <SiTailwindcss size={32} className="text-cyan-500" title="Tailwind" />
                      <FaNodeJs size={32} className="text-yellow-400" title="Node.js" />
                      <SiExpress size={32} className="text-slate-500" title="Express" />
                      <SiMongodb size={32} className="text-green-600" title="MongoDB" />
                    </div>
                  </div>
                </div>
              )}

              {active === 2 && (
                <div>
                  {/* Video Section */}
                  <div className="relative h-[220px] sm:h-[280px] bg-black">
                    <video
                      src="/videos/mobile.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-bold text-2xl sm:text-3xl mb-4">
                      Mobile App Development
                    </h3>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                      We build high-quality mobile apps for Android & iOS using a shared
                      codebase — ensuring fast delivery, smooth performance, and scalable
                      architecture.
                    </p>
                    
                    {/* Icons Grid */}
                    <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-slate-700">
                      <TbBrandReactNative size={32} className="text-sky-700" title="React Native" />
                      <FaNodeJs size={32} className="text-yellow-400" title="Node.js" />
                      <SiTailwindcss size={32} className="text-cyan-500" title="Tailwind" />
                      <TbBrandAndroid size={32} className="text-green-500" title="Android" />
                      <FaAppStoreIos size={32} className="text-sky-500" title="iOS" />
                    </div>
                  </div>
                </div>
              )}

              {active === 3 && (
                <div>
                  {/* Video Section */}
                  <div className="relative h-[220px] sm:h-[280px] bg-black">
                    <video
                      src="/videos/UIUX-branding.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-bold text-2xl sm:text-3xl mb-4">
                      UI/UX & Branding
                    </h3>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                      From user flows to design systems, we craft intuitive UI/UX and modern
                      branding that elevate your digital presence.
                    </p>
                    
                    {/* Icons Grid */}
                    <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-slate-700">
                      <FaFigma size={32} className="text-slate-500" title="Figma" />
                      <SiFramer size={32} className="text-[#0055FF]" title="Framer" />
                      <TbBrandAdobePhotoshop size={32} className="text-[#31A8FF]" title="Photoshop" />
                      <TbBrandAdobeXd size={32} className="text-[#FF2BC2]" title="Adobe XD" />
                      <TbBrandAdobe size={32} className="text-[#FF0000]" title="Adobe" />
                    </div>
                  </div>
                </div>
              )}

              {active === 4 && (
                <div>
                  {/* Video Section */}
                  <div className="relative h-[220px] sm:h-[280px] bg-black">
                    <video
                      src="/videos/socila-media.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-bold text-2xl sm:text-3xl mb-4">
                      Social Media Marketing
                    </h3>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                      We manage your social presence with creative content, ads, and
                      growth-focused strategies to help your brand grow.
                    </p>
                    
                    {/* Icons Grid */}
                    <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-slate-700">
                      <FaWhatsapp size={32} className="text-green-500" title="WhatsApp" />
                      <FaFacebook size={32} className="text-blue-500" title="Facebook" />
                      <FaInstagram size={32} className="text-neutral-400" title="Instagram" />
                    </div>
                  </div>
                </div>
              )}

              {active === 5 && (
                <div>
                  {/* Video Section */}
                  <div className="relative h-[220px] sm:h-[280px] bg-black">
                    <video
                      src="/videos/dashboard.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-bold text-2xl sm:text-3xl mb-4">
                      AI & Automation
                    </h3>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                      We build AI assistants, chatbot systems, and automation workflows
                      using modern AI APIs to reduce manual work and scale operations.
                    </p>
                    
                    {/* Icons Grid */}
                    <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-slate-700">
                      <TbBrandPython size={32} className="text-white" title="Python" />
                      <SiLangchain size={32} className="text-lime-300" title="LangChain" />
                      <SiOpenai size={32} className="text-white" title="OpenAI" />
                      <TbAutomation size={32} className="text-sky-800" title="Automation" />
                      <SiJupyter size={32} className="text-amber-500" title="Jupyter" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots - Bottom */}
        <div className="flex justify-center gap-2 mt-6">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setActive(num)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === num ? 'w-8 bg-blue-500' : 'w-2 bg-slate-600'
              }`}
              aria-label={`Go to service ${num}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Two-Column Layout */}
      <div className="hidden md:block mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">

          {/* LEFT SIDE - Desktop */}
          <aside className="md:sticky md:top-24 h-fit">
            <div className="flex flex-col pb-6 md:pb-8">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
              <p className="text-base sm:text-lg text-slate-400 mt-3 leading-relaxed">
                Fast, scalable, and user-friendly applications built with modern tech.
              </p>
            </div>

            {/* Desktop Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-auto"
              >
                {active === 1 && (
                  <div className="h-[350]">
                    <div className="flex flex-col justify-between pb-8 h-full">
                      <div>
                        <h3 className="font-bold text-2xl sm:text-3xl leading-tight">
                          Web Apps & Dashboards
                        </h3>
                        <p className="text-justify text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                          We develop responsive apps and internal dashboards using clean APIs,
                          secure architecture, and best-in-class frontend frameworks —
                          tailored for startups and enterprises.
                        </p>
                      </div>
                      <div>
                        <FloatingIcons distance={20} duration={3}>
                          <FaReact size={40} className="text-blue-400" />
                          <SiNextdotjs size={40} className="text-white" />
                          <SiAngular size={40} className="text-rose-600" />
                          <SiTailwindcss size={40} className="text-cyan-500" />
                          <FaNodeJs size={40} className="text-yellow-400" />
                          <SiExpress size={40} className="text-slate-500" />
                          <SiMongodb size={40} className="text-green-600" />
                        </FloatingIcons>
                      </div>
                    </div>
                  </div>
                )}

                {active === 2 && (
                  <div className="h-[350]">
                    <div className="flex flex-col justify-between pb-8 h-full">
                      <div>
                        <h3 className="font-bold text-2xl sm:text-3xl leading-tight">
                          Mobile App Development
                        </h3>
                        <p className="text-justify text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                          We build high-quality mobile apps for Android & iOS using a shared
                          codebase — ensuring fast delivery, smooth performance, and scalable
                          architecture.
                        </p>
                      </div>
                      <div>
                        <FloatingIcons distance={20} duration={3}>
                          <TbBrandReactNative size={40} className="text-sky-700" />
                          <FaNodeJs size={40} className="text-yellow-400" />
                          <SiTailwindcss size={40} className="text-cyan-500" />
                          <TbBrandAndroid size={40} className="text-green-500" />
                          <FaAppStoreIos size={40} className="text-sky-500" />
                        </FloatingIcons>
                      </div>
                    </div>
                  </div>
                )}

                {active === 3 && (
                  <div className="h-[350]">
                    <div className="flex flex-col justify-between pb-8 h-full">
                      <div>
                        <h3 className="font-bold text-2xl sm:text-3xl leading-tight">
                          UI/UX & Branding
                        </h3>
                        <p className="text-justify text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                          From user flows to design systems, we craft intuitive UI/UX and modern
                          branding that elevate your digital presence.
                        </p>
                      </div>
                      <div>
                        <FloatingIcons distance={20} duration={3}>
                          <FaFigma size={40} className="text-slate-500" />
                          <SiFramer size={40} className="text-[#0055FF]" />
                          <TbBrandAdobePhotoshop size={40} className="text-[#31A8FF]" />
                          <TbBrandAdobeXd size={40} className="text-[#FF2BC2]" />
                          <TbBrandAdobe size={40} className="text-[#FF0000]" />
                        </FloatingIcons>
                      </div>
                    </div>
                  </div>
                )}

                {active === 4 && (
                  <div className="h-[350]">
                    <div className="flex flex-col justify-between pb-8 h-full">
                      <div>
                        <h3 className="font-bold text-2xl sm:text-3xl leading-tight">
                          Social Media Marketing
                        </h3>
                        <p className="text-justify text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                          We manage your social presence with creative content, ads, and
                          growth-focused strategies to help your brand grow.
                        </p>
                      </div>
                      <div>
                        <FloatingIcons distance={20} duration={3}>
                          <FaWhatsapp size={40} className="text-green-500" />
                          <FaFacebook size={40} className="text-blue-500" />
                          <FaInstagram size={40} className="text-neutral-400" />
                        </FloatingIcons>
                      </div>
                    </div>
                  </div>
                )}

                {active === 5 && (
                  <div className="h-[350]">
                    <div className="flex flex-col justify-between pb-8 h-full">
                      <div>
                        <h3 className="font-bold text-2xl sm:text-3xl leading-tight">
                          AI & Automation
                        </h3>
                        <p className="text-justify text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                          We build AI assistants, chatbot systems, and automation workflows
                          using modern AI APIs to reduce manual work and scale operations.
                        </p>
                      </div>
                      <div>
                        <FloatingIcons distance={20} duration={3}>
                          <TbBrandPython size={40} className="text-white" />
                          <SiLangchain size={40} className="text-lime-300" />
                          <SiOpenai size={40} className="text-white" />
                          <TbAutomation size={40} className="text-sky-800" />
                          <SiJupyter size={40} className="text-amber-500" />
                        </FloatingIcons>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </aside>

          {/* RIGHT SIDE - Desktop Videos */}
          <div className="flex flex-col gap-24 lg:gap-32">

          <motion.div
            ref={t1}
            variants={videoVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="rounded-3xl overflow-hidden h-[500px] lg:h-[600px] bg-black"
          >
            <video
              src="/videos/dashboard.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            ref={t2}
            variants={videoVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="rounded-3xl overflow-hidden h-[500px] lg:h-[600px] bg-black"
          >
            <video
              src="/videos/mobile.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            ref={t3}
            variants={videoVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="rounded-3xl overflow-hidden h-[500px] lg:h-[600px] bg-black"
          >
            <video
              src="/videos/UIUX-branding.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            ref={t4}
            variants={videoVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="rounded-3xl overflow-hidden h-[500px] lg:h-[600px] bg-black"
          >
            <video
              src="/videos/socila-media.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            ref={t5}
            variants={videoVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="rounded-3xl overflow-hidden h-[500px] lg:h-[600px] bg-black"
          >
            <video
              src="/videos/dashboard.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
