'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function GoToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300); // Show after 300px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {visible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="
            fixed bottom-6 right-6 z-50
            p-3 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/30
            hover:from-cyan-600 hover:to-fuchsia-600 hover:shadow-cyan-500/50 active:scale-95
            transition-all duration-300
          "
                >
                    <FaArrowUp size={16} />
                </motion.button>
            )}
        </>
    );
}
