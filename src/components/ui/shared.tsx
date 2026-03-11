"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    label: string;
    duration?: number;
}

export function AnimatedCounter({
    end,
    suffix = "",
    prefix = "",
    label,
    duration = 2,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTime: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
        >
            <div className="text-3xl md:text-4xl font-bold gradient-text">
                {prefix}
                {count}
                {suffix}
            </div>
            <div className="text-gray-400 text-sm mt-1">{label}</div>
        </motion.div>
    );
}

export function SectionHeading({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
            )}
            <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
        </motion.div>
    );
}
