"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CinemaWrapperProps {
    children: React.ReactNode;
    zIndex: number;
    /** Set true on the last section so it never fades out */
    isLast?: boolean;
}

export default function CinemaWrapper({ children, zIndex, isLast = false }: CinemaWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 767px)");
        const onChange = () => setIsMobile(media.matches);
        onChange();
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    // Track how far we've scrolled through THIS section
    // 0 = section top at viewport top, 1 = section bottom at viewport top
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Slightly scale down as we exit
    const scale = useTransform(
        scrollYProgress,
        [0, 0.6, 1],
        [1, 1, isLast ? 1 : 0.92]
    );

    // Dark overlay fades in from 55% onwards → "lights going out" cinematic vanish
    const overlayOpacity = useTransform(
        scrollYProgress,
        [0.5, 0.88],
        [0, isLast ? 0 : 1]
    );

    return (
        <div
            ref={ref}
            style={{
                position: isMobile ? "relative" : "sticky",
                top: isMobile ? "auto" : 0,
                zIndex: isMobile ? "auto" : zIndex,
                overflow: isMobile ? "visible" : "hidden",
                background: "#08000f",
                borderTopLeftRadius: !isMobile && zIndex > 1 ? 24 : 0,
                borderTopRightRadius: !isMobile && zIndex > 1 ? 24 : 0,
                boxShadow:
                    !isMobile && zIndex > 1
                        ? "0 -12px 48px 0 rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.05)"
                        : "none",
            }}
        >
            {/* Scale the content slightly as this section exits */}
            <motion.div style={{ scale: isMobile ? 1 : scale, transformOrigin: "top center" }}>
                {children}
            </motion.div>

            {/* Dark vignette overlay — fades in to swallow the section cinematically */}
            {!isLast && !isMobile && (
                <motion.div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse at center, rgba(2,0,8,0.85) 0%, #08000f 100%)",
                        opacity: overlayOpacity,
                        pointerEvents: "none",
                        zIndex: 200,
                    }}
                />
            )}
        </div>
    );
}
