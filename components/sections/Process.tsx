"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [isSticky, setIsSticky] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Refs for mobile and desktop layouts
  const step1RefMobile = useRef<HTMLDivElement | null>(null);
  const step2RefMobile = useRef<HTMLDivElement | null>(null);
  const step3RefMobile = useRef<HTMLDivElement | null>(null);
  const step4RefMobile = useRef<HTMLDivElement | null>(null);
  const step5RefMobile = useRef<HTMLDivElement | null>(null);
  const step6RefMobile = useRef<HTMLDivElement | null>(null);
  const endTriggerRefMobile = useRef<HTMLDivElement | null>(null);

  const step1RefDesktop = useRef<HTMLDivElement | null>(null);
  const step2RefDesktop = useRef<HTMLDivElement | null>(null);
  const step3RefDesktop = useRef<HTMLDivElement | null>(null);
  const step4RefDesktop = useRef<HTMLDivElement | null>(null);
  const step5RefDesktop = useRef<HTMLDivElement | null>(null);
  const step6RefDesktop = useRef<HTMLDivElement | null>(null);
  const endTriggerRefDesktop = useRef<HTMLDivElement | null>(null);

  // State to track if we're on mobile
  const [isMobileView, setIsMobileView] = useState(false);

  // Update mobile view state on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use the appropriate refs based on viewport
  const step1Ref = isMobileView ? step1RefMobile : step1RefDesktop;
  const step2Ref = isMobileView ? step2RefMobile : step2RefDesktop;
  const step3Ref = isMobileView ? step3RefMobile : step3RefDesktop;
  const step4Ref = isMobileView ? step4RefMobile : step4RefDesktop;
  const step5Ref = isMobileView ? step5RefMobile : step5RefDesktop;
  const step6Ref = isMobileView ? step6RefMobile : step6RefDesktop;
  const endTriggerRef = isMobileView ? endTriggerRefMobile : endTriggerRefDesktop;

  // Simple callback refs
  const setStep1RefMobile = (el: HTMLDivElement | null) => {
    step1RefMobile.current = el;
  };
  const setStep2RefMobile = (el: HTMLDivElement | null) => {
    step2RefMobile.current = el;
  };
  const setStep3RefMobile = (el: HTMLDivElement | null) => {
    step3RefMobile.current = el;
  };
  const setStep4RefMobile = (el: HTMLDivElement | null) => {
    step4RefMobile.current = el;
  };
  const setStep5RefMobile = (el: HTMLDivElement | null) => {
    step5RefMobile.current = el;
  };
  const setStep6RefMobile = (el: HTMLDivElement | null) => {
    step6RefMobile.current = el;
  };
  const setEndTriggerRefMobile = (el: HTMLDivElement | null) => {
    endTriggerRefMobile.current = el;
  };

  const setStep1RefDesktop = (el: HTMLDivElement | null) => {
    step1RefDesktop.current = el;
  };
  const setStep2RefDesktop = (el: HTMLDivElement | null) => {
    step2RefDesktop.current = el;
  };
  const setStep3RefDesktop = (el: HTMLDivElement | null) => {
    step3RefDesktop.current = el;
  };
  const setStep4RefDesktop = (el: HTMLDivElement | null) => {
    step4RefDesktop.current = el;
  };
  const setStep5RefDesktop = (el: HTMLDivElement | null) => {
    step5RefDesktop.current = el;
  };
  const setStep6RefDesktop = (el: HTMLDivElement | null) => {
    step6RefDesktop.current = el;
  };
  const setEndTriggerRefDesktop = (el: HTMLDivElement | null) => {
    endTriggerRefDesktop.current = el;
  };

  // Improved scroll detection with better margins for smoother transitions
  // Using responsive margins: smaller for mobile, larger for desktop
  const step1InView = useInView(step1Ref, {
    margin: "-100px 0px -50% 0px",
    amount: 0.3
  });
  const step2InView = useInView(step2Ref, {
    margin: "-100px 0px -50% 0px",
    amount: 0.3
  });
  const step3InView = useInView(step3Ref, {
    margin: "-100px 0px -50% 0px",
    amount: 0.3
  });
  const step4InView = useInView(step4Ref, {
    margin: "-100px 0px -50% 0px",
    amount: 0.3
  });
  const step5InView = useInView(step5Ref, {
    margin: "-100px 0px -50% 0px",
    amount: 0.3
  });
  const step6InView = useInView(step6Ref, {
    margin: "-100px 0px -30% 0px",
    amount: 0.3
  });

  // Detect when scrolled past step 6
  const endTriggerInView = useInView(endTriggerRef, {
    margin: "-200px 0px -30% 0px"
  });

  // Check if section container is in view
  const sectionInView = useInView(containerRef, {
    margin: "-100px 0px -100px 0px"
  });

  // Improved step detection with smoother transitions and better priority handling
  useEffect(() => {
    // If section is not in view, don't update
    if (!sectionInView) return;

    // Priority-based step detection (highest priority first)
    // This ensures smooth transitions without flickering
    if (step1InView && (!step2InView || activeStep <= 1)) {
      setActiveStep(1);
    } else if (step2InView && (!step3InView || activeStep <= 2)) {
      setActiveStep(2);
    } else if (step3InView && (!step4InView || activeStep <= 3)) {
      setActiveStep(3);
    } else if (step4InView && (!step5InView || activeStep <= 4)) {
      setActiveStep(4);
    } else if (step5InView && (!step6InView || activeStep <= 5)) {
      setActiveStep(5);
    } else if (step6InView) {
      setActiveStep(6);
    }
  }, [step1InView, step2InView, step3InView, step4InView, step5InView, step6InView, sectionInView, activeStep]);

  // Release sticky ONLY when scrolled past step 6
  useEffect(() => {
    // Keep sticky true for all steps (1-6)
    // Only release when end trigger is in view AND step 6 is not in view (definitely past it)
    if (endTriggerInView && !step6InView) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  }, [endTriggerInView, step6InView]);

  const steps = [
    {
      number: "1",
      title: "Discover",
      desc: "We understand your goals, challenges, and requirements to create the right solution.",
      icon: "🔍",
      color: "from-blue-400 to-blue-500",
      image: "/images/OP_Discover.png",
      mobileSetRef: setStep1RefMobile,
      desktopSetRef: setStep1RefDesktop,
    },
    {
      number: "2",
      title: "Plan & Strategy",
      desc: "We structure the project, define the roadmap, and prepare the ideal tech stack.",
      icon: "📋",
      color: "from-purple-400 to-purple-500",
      image: "/images/OP_Plan_Strategy.png",
      mobileSetRef: setStep2RefMobile,
      desktopSetRef: setStep2RefDesktop,
    },
    {
      number: "3",
      title: "Design",
      desc: "We design intuitive, modern, and visually appealing interfaces for the best user experience.",
      icon: "🎨",
      color: "from-pink-400 to-pink-500",
      image: "/images/OP_Design.png",
      mobileSetRef: setStep3RefMobile,
      desktopSetRef: setStep3RefDesktop,
    },
    {
      number: "4",
      title: "Develop",
      desc: "We convert ideas into functional, scalable products using modern technologies.",
      icon: "⚙️",
      color: "from-green-400 to-green-500",
      image: "/images/OP_Develop.png",
      mobileSetRef: setStep4RefMobile,
      desktopSetRef: setStep4RefDesktop,
    },
    {
      number: "5",
      title: "Test & Launch",
      desc: "We ensure stability, security, and performance before delivering the final product.",
      icon: "🚀",
      color: "from-orange-400 to-orange-500",
      image: "/images/OP_Test_Launch.png",
      mobileSetRef: setStep5RefMobile,
      desktopSetRef: setStep5RefDesktop,
    },
    {
      number: "6",
      title: "Support",
      desc: "We provide ongoing maintenance, updates, and enhancements.",
      icon: "🛠️",
      color: "from-cyan-400 to-cyan-500",
      image: "/images/OP_Support.png",
      mobileSetRef: setStep6RefMobile,
      desktopSetRef: setStep6RefDesktop,
    },
  ];

  return (
    <Section id="process">
      <div ref={containerRef}>
        {/* MOBILE LAYOUT - Title and Steps Only */}
        <div className="lg:hidden">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              Our Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-2">
              A simple, structured, and transparent workflow that ensures quality delivery every time.
            </p>
          </div>

          <div className="relative pb-12">
            <div className="space-y-8">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx + 1;
                const isPassed = activeStep > idx + 1;

                return (
                  <div
                    key={step.number}
                    ref={step.mobileSetRef}
                    className="relative flex gap-4 sm:gap-5"
                  >
                    {/* Timeline Line & Dot */}
                    <div className="relative flex flex-col items-center">
                      {/* Number Circle - Animated */}
                      <motion.div
                        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-10 relative ${
                          isActive || isPassed 
                            ? 'bg-gradient-to-br from-cyan-500 to-fuchsia-500' 
                            : 'bg-slate-900'
                        }`}
                        initial={false}
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          boxShadow: isActive 
                            ? '0 0 15px rgba(6, 182, 212, 0.4)' 
                            : 'none'
                        }}
                        transition={{ 
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        <span
                          className="text-lg sm:text-xl font-bold relative z-10 transition-colors duration-500"
                          style={{
                            color: isActive || isPassed ? "rgb(255, 255, 255)" : "rgb(148, 163, 184)",
                          }}
                        >
                          {step.number}
                        </span>
                      </motion.div>

                      {/* Connecting Line - Animated Fill */}
                      {idx < steps.length - 1 && (
                        <div className="absolute top-12 sm:top-14 w-0.5 overflow-hidden"
                          style={{ height: 'calc(100% + 2rem)' }}
                        >
                          {/* Background line */}
                          <div className="absolute inset-0 bg-slate-700" />

                          {/* Animated fill line */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-fuchsia-500 origin-top"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: isPassed ? 1 : 0 }}
                            transition={{ 
                              duration: 0.5,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content - Animated */}
                    <div
                      className="flex-1 pt-0 sm:pt-1 transition-opacity duration-500"
                      style={{
                        opacity: isActive ? 1 : isPassed ? 0.7 : 0.4,
                      }}
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* End trigger - invisible element to detect when scrolled past step 6 */}
            <div ref={setEndTriggerRefMobile} className="h-24" />
          </div>
        </div>

        {/* DESKTOP LAYOUT - Two Column */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN - Sticky Title & Animated Image */}
          <div className={`self-start transition-all duration-300 ${isSticky ? 'lg:sticky lg:top-24' : 'lg:relative'}`}>
            <div>
              <div className="mb-6 lg:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Our Process
                </h2>
                <p className="text-sm md:text-base text-slate-400 mb-2">
                  A simple, structured, and transparent workflow that ensures quality delivery every time.
                </p>
              </div>

              {/* Animated Image Container */}
              <div className="relative w-full">
                <AnimatePresence mode="wait">
                  {(() => {
                    const currentStep = steps[activeStep - 1] || steps[5] || steps[0];
                    return (
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ 
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="relative w-full h-[350px] lg:h-[400px]"
                      >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden">
                          {currentStep.image ? (
                            <Image
                              src={currentStep.image}
                              alt={currentStep.title}
                              fill
                              className="object-cover transition-all duration-500"
                              style={{ borderRadius: '1.5rem' }}
                            />
                          ) : (
                            /* Fallback: Gradient Placeholder */
                            <div className={`absolute inset-0 bg-gradient-to-br rounded-3xl ${currentStep.color || 'from-cyan-400 to-cyan-500'}`} />
                          )}
                        </div>
                        {/* Step Image */}
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Steps with Animated Timeline */}
          <div className="relative pb-40">
            <div className="space-y-16">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx + 1;
                const isPassed = activeStep > idx + 1;

                return (
                  <div
                    key={step.number}
                    ref={step.desktopSetRef}
                    className="relative flex gap-6"
                  >
                    {/* Timeline Line & Dot */}
                    <div className="relative flex flex-col items-center">
                      {/* Number Circle - Animated */}
                      <motion.div
                        className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10 relative ${
                          isActive || isPassed 
                            ? 'bg-gradient-to-br from-cyan-500 to-fuchsia-500' 
                            : 'bg-slate-900'
                        }`}
                        initial={false}
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          boxShadow: isActive 
                            ? '0 0 20px rgba(6, 182, 212, 0.4)' 
                            : 'none'
                        }}
                        transition={{ 
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        <span
                          className="text-xl font-bold relative z-10 transition-colors duration-500"
                          style={{
                            color: isActive || isPassed ? "rgb(255, 255, 255)" : "rgb(148, 163, 184)",
                          }}
                        >
                          {step.number}
                        </span>
                      </motion.div>

                      {/* Connecting Line - Animated Fill */}
                      {idx < steps.length - 1 && (
                        <div className="absolute top-14 w-0.5 overflow-hidden"
                          style={{ height: 'calc(100% + 2.5rem)' }}
                        >
                          {/* Background line */}
                          <div className="absolute inset-0 bg-slate-700" />

                          {/* Animated fill line */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-fuchsia-500 origin-top"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: isPassed ? 1 : 0 }}
                            transition={{ 
                              duration: 0.5,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content - Animated */}
                    <div
                      className="flex-1 pt-1 transition-opacity duration-500"
                      style={{
                        opacity: isActive ? 1 : isPassed ? 0.7 : 0.4,
                      }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* End trigger - invisible element to detect when scrolled past step 6 */}
            <div ref={setEndTriggerRefDesktop} className="h-60" />
          </div>
        </div>
      </div>
    </Section>
  );
}

