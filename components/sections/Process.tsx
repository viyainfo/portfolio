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

  console.log('Current activeStep:', activeStep);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Refs for each step
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);
  const step6Ref = useRef(null);
  const endTriggerRef = useRef(null);

  const step1InView = useInView(step1Ref, {
    margin: "-100px 0px -60% 0px"
  });
  const step2InView = useInView(step2Ref, {
    margin: "-100px 0px -60% 0px"
  });
  const step3InView = useInView(step3Ref, {
    margin: "-100px 0px -60% 0px"
  });
  const step4InView = useInView(step4Ref, {
    margin: "-100px 0px -60% 0px"
  });
  const step5InView = useInView(step5Ref, {
    margin: "-100px 0px -60% 0px"
  });
  const step6InView = useInView(step6Ref, {
    margin: "-100px 0px -40% 0px"
  });

  // Detect when scrolled past step 6
  const endTriggerInView = useInView(endTriggerRef, {
    margin: "-200px 0px -40% 0px"
  });

  // Check if section container is in view
  const sectionInView = useInView(containerRef, {
    margin: "-100px 0px -100px 0px"
  });

  // Update active step based on which step is in view (immediate sync)
  useEffect(() => {
    console.log('Steps in view:', { step1InView, step2InView, step3InView, step4InView, step5InView, step6InView });
    console.log('Section in view:', sectionInView);

    // If section just entered view and step 1 is in view, prioritize step 1
    if (sectionInView && step1InView && !step2InView && !step3InView && !step4InView && !step5InView && !step6InView) {
      console.log('Section entered view, setting activeStep to 1');
      setActiveStep(1);
      return;
    }

    // Check steps in priority order: step 1 has highest priority
    if (step1InView) {
      console.log('Setting activeStep to 1');
      setActiveStep(1);
    } else if (step2InView) {
      console.log('Setting activeStep to 2');
      setActiveStep(2);
    } else if (step3InView) {
      console.log('Setting activeStep to 3');
      setActiveStep(3);
    } else if (step4InView) {
      console.log('Setting activeStep to 4');
      setActiveStep(4);
    } else if (step5InView) {
      console.log('Setting activeStep to 5');
      setActiveStep(5);
    } else if (step6InView) {
      console.log('Setting activeStep to 6');
      setActiveStep(6);
    }
    // If no steps are in view, keep current step (don't reset to 1)
  }, [step1InView, step2InView, step3InView, step4InView, step5InView, step6InView, sectionInView]);

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
      ref: step1Ref,
    },
    {
      number: "2",
      title: "Plan & Strategy",
      desc: "We structure the project, define the roadmap, and prepare the ideal tech stack.",
      icon: "📋",
      color: "from-purple-400 to-purple-500",
      ref: step2Ref,
    },
    {
      number: "3",
      title: "Design",
      desc: "We design intuitive, modern, and visually appealing interfaces for the best user experience.",
      icon: "🎨",
      color: "from-pink-400 to-pink-500",
      ref: step3Ref,
    },
    {
      number: "4",
      title: "Develop",
      desc: "We convert ideas into functional, scalable products using modern technologies.",
      icon: "⚙️",
      color: "from-green-400 to-green-500",
      ref: step4Ref,
    },
    {
      number: "5",
      title: "Test & Launch",
      desc: "We ensure stability, security, and performance before delivering the final product.",
      icon: "🚀",
      color: "from-orange-400 to-orange-500",
      ref: step5Ref,
    },
    {
      number: "6",
      title: "Support",
      desc: "We provide ongoing maintenance, updates, and enhancements.",
      icon: "🛠️",
      color: "from-cyan-400 to-cyan-500",
      ref: step6Ref,
    },
  ];

  return (
    <Section id="process">
      <div ref={containerRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT COLUMN - Sticky Title & Animated Image */}
        <div className={`self-start transition-all duration-300 ${isSticky ? 'lg:sticky lg:top-24' : 'lg:relative'}`}>
          <div>
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Our Process
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mb-2">
                A simple, structured, and transparent workflow that ensures quality delivery every time.
              </p>
            </div>

            {/* Animated Image Container */}
            <div className="relative">
              {(() => {
                const currentStep = steps[activeStep - 1] || steps[5] || steps[0];
                return (
                  <div
                    className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${currentStep.color || 'from-cyan-400 to-cyan-500'
                      } p-6 sm:p-8 shadow-2xl transition-all duration-500`}
                  >
                    <div className="w-full h-[300px] sm:h-[350px] lg:h-[300px]" style={{ position: 'relative' }}>
                      {/* Add your images here based on step: */}
                      {/* <Image src={`/images/process-step-${activeStep}.jpg`} alt={currentStep.title} fill className="object-cover rounded-2xl" /> */}

                      {/* Dynamic Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-10 right-10 w-36 h-36 bg-white/10 rounded-full blur-3xl" />

                        <div className="text-center text-white z-10 relative">
                          <div className="text-6xl sm:text-7xl mb-4 transition-all duration-300">
                            {currentStep.icon || '🛠️'}
                          </div>
                          <p className="text-xl sm:text-2xl font-bold">
                            Step {activeStep}
                          </p>
                          <p className="text-sm sm:text-base opacity-90 mt-2 px-4">
                            {currentStep.title || 'Support'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Steps with Animated Timeline */}
        <div className="relative pb-20 lg:pb-40">
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx + 1;
              const isPassed = activeStep > idx + 1;

              return (
                <div
                  key={step.number}
                  ref={step.ref}
                  className="relative flex gap-6"
                >
                  {/* Timeline Line & Dot */}
                  <div className="relative flex flex-col items-center">
                    {/* Number Circle - Animated */}
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10 relative border-4 transition-all duration-500"
                      style={{
                        backgroundColor: isActive || isPassed ? "rgb(249, 115, 22)" : "rgb(15, 23, 42)",
                        borderColor: isActive || isPassed ? "rgb(249, 115, 22)" : "rgb(71, 85, 105)",
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
                    </div>

                    {/* Connecting Line - Animated Fill */}
                    {idx < steps.length - 1 && (
                      <div className="absolute top-12 w-0.5 overflow-hidden"
                        style={{ height: 'calc(100% + 4rem)' }}
                      >
                        {/* Background line */}
                        <div className="absolute inset-0 bg-slate-700" />

                        {/* Animated fill line */}
                        <div
                          className="absolute inset-0 bg-orange-500 origin-top transition-transform duration-500"
                          style={{
                            transform: isPassed ? 'scaleY(1)' : 'scaleY(0)',
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content - Animated */}
                  <div
                    className="flex-1 pt-2 transition-opacity duration-500"
                    style={{
                      opacity: isActive ? 1 : isPassed ? 0.7 : 0.4,
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End trigger - invisible element to detect when scrolled past step 6 */}
          <div ref={endTriggerRef} className="h-40 lg:h-60" />
        </div>
      </div>
    </Section>
  );
}

