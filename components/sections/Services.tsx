"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FloatingIcons from "../ui/FloatingIcons";
import { SiAngular, SiExpress, SiFramer, SiJupyter, SiLangchain, SiMongodb, SiNextdotjs, SiOpenai, SiTailwindcss } from "react-icons/si";
import { FaFigma, FaNodeJs, FaReact, FaInstagram, FaFacebook, FaWhatsapp, FaAppStoreIos } from "react-icons/fa";
import { TbBrandReactNative, TbBrandAdobeXd, TbBrandAdobePhotoshop, TbBrandAdobe, TbBrandPython, TbBrandAndroid, TbAutomation } from "react-icons/tb";

export function Services() {
  const [active, setActive] = useState(1);

  const t1 = useRef(null);
  const t2 = useRef(null);
  const t3 = useRef(null);
  const t4 = useRef(null);
  const t5 = useRef(null);

  const v1 = useInView(t1, { amount: 0.4 });
  const v2 = useInView(t2, { amount: 0.4 });
  const v3 = useInView(t3, { amount: 0.4 });
  const v4 = useInView(t4, { amount: 0.4 });
  const v5 = useInView(t5, { amount: 0.4 });

  useEffect(() => {
    if (v1) setActive(1);
    else if (v2) setActive(2);
    else if (v3) setActive(3);
    else if (v4) setActive(4);
    else if (v5) setActive(5);
  }, [v1, v2, v3, v4, v5]);

  // same logic as your 1–3 version
  const getY = (cardIndex: number, activeIndex: number) => {
    if (cardIndex === activeIndex) return 0;
    if (cardIndex > activeIndex) return 750;
    return -10 * (activeIndex - cardIndex);
  };

  return (
    <div className="text-white py-32">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <aside className="md:sticky md:top-24 h-fit">
          <div className="flex flex-col pb-8">
            <span className="text-4xl font-bold">Our Services</span>
            <span className="text-sm text-slate-400">
              Fast, scalable, and user-friendly applications built with modern tech.
            </span>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-[80vh]"
          >
            {active === 1 && (
              <div className="h-[90%]">
                <div className="flex flex-col justify-between pb-10 h-[100%]">
                  <div>
                    <span className="font-bold text-2xl leading-10">Web Apps & Dashboards</span>
                    <div className="text-justify">
                      {/* <span className="text-md">Modern, scalable web applications built for speed and performance.</span> */}
                      <span className="text-md text-slate-300"> We develop responsive apps and internal dashboards using clean APIs, secure architecture, and best-in-class frontend frameworks — tailored for startups and enterprises.</span>
                    </div>
                  </div>
                  <div>
                    <FloatingIcons distance={25} duration={3}>
                      <FaReact size={40} className="text-blue-400" />
                      <SiNextdotjs size={40} className="text-white-500" />
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
            {active === 2 && <div className=" h-[90%]">
              <div className="flex flex-col justify-between pb-10 h-[100%]">
                <div>
                  <span className="font-bold text-2xl leading-10">Mobile App Development</span>
                  <div className="text-justify">
                    {/* <span className="text-md">Cross-platform mobile apps with a seamless user experience.</span> */}
                    <span className="text-md text-slate-300"> We build high-quality mobile apps for Android & iOS using a shared codebase, ensuring fast delivery, smooth performance, and scalable architecture.</span>
                  </div>
                </div>
                <div>
                  <FloatingIcons distance={25} duration={3}>
                    <TbBrandReactNative size={40} className="text-sky-700" />
                    <FaNodeJs size={40} className="text-yellow-400" />
                    <SiTailwindcss size={40} className="text-cyan-500" />
                    <TbBrandAndroid size={40} className="text-green-500" />
                    <FaAppStoreIos size={40} className="text-sky-500" />
                  </FloatingIcons>
                </div>
              </div>
            </div>}
            {active === 3 && <div className=" h-[90%]">
              <div className="flex flex-col justify-between pb-10 h-[100%]">
                <div>
                  <span className="font-bold text-2xl leading-10"> UI/UX & Branding</span>
                  <div className="text-justify">
                    {/* <span className="text-md">Pixel-perfect design systems and brand identity that stand out.</span> */}
                    <span className="text-md text-slate-300"> From user flows to design systems, we craft intuitive UI/UX and modern branding that elevate your digital presence and build trust with your audience.</span>
                  </div>
                </div>
                <div>
                  <FloatingIcons distance={25} duration={3}>
                    <FaFigma size={40} className="text-slate-500" />
                    <SiFramer size={40} className="text-[#0055FF]" />
                    <TbBrandAdobePhotoshop size={40} className="text-[#31A8FF]" />
                    <TbBrandAdobeXd size={40} className="text-[#FF2BC2]" />
                    <TbBrandAdobe size={40} className="text-[#FF0000]" />
                  </FloatingIcons>
                </div>
              </div>
            </div>}
            {active === 4 && <div className=" h-[90%]">
              <div className="flex flex-col justify-between pb-10 h-[100%]">
                <div>
                  <span className="font-bold text-2xl leading-10">Social Media Marketing</span>
                  <div className="text-justify">
                    {/* <span className="text-md">Growth-focused marketing that builds visibility and drives engagement.</span> */}
                    <span className="text-md text-slate-300"> We manage your social presence with creative content, performance campaigns, and strategy-driven execution to help your brand grow consistently.</span>
                  </div>
                </div>
                <div>
                  <FloatingIcons distance={25} duration={3}>
                    <FaWhatsapp size={40} className="text-green-500" />
                    <FaFacebook size={40} className="text-blue-500" />
                    <FaInstagram size={40} className="text-neutral-400" />
                  </FloatingIcons>
                </div>
              </div>
            </div>}
            {active === 5 && <div className=" h-[90%]">
              <div className="flex flex-col justify-between pb-10 h-[100%]">
                <div>
                  <span className="font-bold text-2xl leading-10">AI & Automation</span>
                  <div className="text-justify">
                    {/* <span className="text-md">Intelligent solutions that optimize workflows and save time.</span> */}
                    <span className="text-md text-slate-300"> We create AI assistants, chatbot systems, and automation workflows using modern AI APIs — helping businesses reduce manual work and scale efficiently.</span>
                  </div>
                </div>
                <div>
                  <FloatingIcons distance={25} duration={3}>
                    <TbBrandPython size={40} className="text-white-500" />
                    <SiLangchain size={40} className="text-lime-300" />
                    <SiOpenai size={40} className="text-white-500" />
                    <TbAutomation size={40} className="text-sky-800" />
                    <SiJupyter size={40} className="text-amber-500" />
                  </FloatingIcons>
                </div>
              </div>
            </div>}
          </motion.div>
        </aside>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* FIXED HEIGHT */}
          <div className="sticky top-24 h-[80vh]">

            {/* CARD 1 */}
            <motion.div
              className="absolute inset-0 bg-white/20 backdrop-blur-[40px] rounded-3xl flex items-center justify-center text-3xl font-bold h-[80vh]"
              style={{ zIndex: active === 1 ? 10 : 1 }}
              animate={{ y: getY(1, active) }}
              initial={{ y: 750 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Card 1
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="absolute inset-0 bg-white/20 backdrop-blur-[40px]  rounded-3xl flex items-center justify-center text-3xl font-bold h-[80vh]"
              style={{ zIndex: active === 2 ? 10 : 2 }}
              animate={{ y: getY(2, active) }}
              initial={{ y: 750 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Card 2
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className="absolute inset-0 bg-white/20 backdrop-blur-[40px]  rounded-3xl flex items-center justify-center text-3xl font-bold h-[80vh]"
              style={{ zIndex: active === 3 ? 10 : 3 }}
              animate={{ y: getY(3, active) }}
              initial={{ y: 750 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Card 3
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              className="absolute inset-0 bg-white/20 backdrop-blur-[40px]  rounded-3xl flex items-center justify-center text-3xl font-bold h-[80vh]"
              style={{ zIndex: active === 4 ? 10 : 4 }}
              animate={{ y: getY(4, active) }}
              initial={{ y: 750 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Card 4
            </motion.div>

            {/* CARD 5 */}
            <motion.div
              className="absolute inset-0 bg-white/20 backdrop-blur-[40px] rounded-3xl flex items-center justify-center text-3xl font-bold h-[80vh]"
              style={{ zIndex: active === 5 ? 10 : 5 }}
              animate={{ y: getY(5, active) }}
              initial={{ y: 750 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Card 5
            </motion.div>

          </div>

          {/* FIXED SPACING */}
          <div className="space-y-[80vh]">
            <div ref={t1} className="h-[80vh]" />
            <div ref={t2} className="h-[80vh]" />
            <div ref={t3} className="h-[80vh]" />
            <div ref={t4} className="h-[80vh]" />
            <div ref={t5} className="h-[80vh]" />
          </div>

        </div>
      </div>
    </div>
  );
}
