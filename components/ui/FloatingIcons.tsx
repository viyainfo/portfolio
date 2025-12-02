"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingIconsProps {
    children: ReactNode;
    duration?: number;
    distance?: number;
}

export default function FloatingIcons({
    children,
    duration = 3,
    distance = 20,
}: FloatingIconsProps) {
    return (
        <div className="relative flex items-center justify-center gap-6">
            {/* Clone all child icons and wrap with floating animation */}
            {Array.isArray(children)
                ? children.map((icon, index) => (
                    <motion.div
                        key={index}
                        animate={{
                            y: [0, -distance, 0],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2, // stagger movement
                        }}
                        className="flex items-center justify-center"
                    >
                        {icon}
                    </motion.div>
                ))
                : children}
        </div>
    );
}
