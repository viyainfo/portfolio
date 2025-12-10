"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Teams() {
    const teamMembers = [
        {
            name: "Pavan Kumar",
            role: "Founder, CEO",
            image: "/pav.png", // Placeholder
            bgColor: "from-blue-500/20 to-cyan-500/20",
        },
        {
            name: "Shameer",
            role: "Managing Director",
            image: "/sham.png", // Placeholder
            bgColor: "from-violet-500/20 to-fuchsia-500/20",
        },
        {
            name: "Adlin Yona",
            role: "Designer Head",
            image: "/adln.png", // Placeholder
            bgColor: "from-orange-500/20 to-amber-500/20",
        },
    ];

    return (
        <Section id="team">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
            >
                {/* Header - Curved Design */}
                <motion.div
                    variants={fadeUp}
                    custom={0}
                    className="text-center mb-8"
                >
                    <div className="inline-block">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                            Meet Our Team
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                            A group of passionate professionals dedicated to building high-quality digital experiences.
                        </p>
                    </div>
                </motion.div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group"
                        >
                            {/* Card - Exact Framer-style design */}
                            <div className="relative shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                                {/* Main Container */}
                                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden">
                                    {/* Image/Portrait Area - Full card */}
                                    <div className="absolute inset-0">
                                        {/* Portrait Image */}
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Black Gradient Overlay - Initially visible, hidden on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 group-hover:opacity-0 transition-opacity duration-500" />

                                        {/* Subtle lighting - visible on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Bottom Text Block - Full width at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0">
                                        <div className="relative">
                                            {/* Curved Corner SVG - Top-Left corner only */}
                                            <div className="absolute -top-[38px] left-0 w-[40px] h-[40px]">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="rotate-90">
                                                    <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#0D0F26" />
                                                </svg>
                                            </div>

                                            {/* Dark Text Block - rounded top-right corner */}
                                            <div className="bg-[#0D0F26] px-6 py-5 w-[180] rounded-tr-[40px]">
                                                <h3 className="text-base font-bold text-white leading-tight">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm text-slate-400 mt-1">
                                                    {member.role}
                                                </p>
                                            </div>
                                            <div className="absolute bottom-0 right-[144] w-[40px] h-[40px]">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="rotate-90">
                                                    <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#0D0F26" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}