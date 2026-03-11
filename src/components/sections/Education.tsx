"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
    {
        degree: "PhD in Computer Science (CSIS)",
        institution: "BITS Pilani, K K Birla Goa Campus",
        duration: "Dec 2025 – Present",
        location: "Goa, India",
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
        bullets: [
            "Working on an industry-sponsored ML project for end-to-end automotive lifecycle and safety systems.",
            "Developing and evaluating ML models and pipelines for real-world, large-scale data.",
        ],
    },
    {
        degree: "B.E. in Electronics & Telecommunication",
        institution: "SPPU, Pune",
        duration: "Dec 2021 – May 2025",
        location: "Pune, India",
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
        bullets: [
            "Core coursework in electronics, signal processing, embedded systems, and computing.",
            "Active in campus tech communities and collaborative research projects.",
        ],
    },
];

export default function Education() {
    return (
        <section id="education" className="relative py-28 bg-[#0b0018]" style={{ minHeight: "80vh" }}>
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(168,85,247,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="section-container relative">
                <SectionHeading title="Education" subtitle="Academic foundations in computer science and engineering" />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
                        gap: "1.5rem",
                        maxWidth: 900,
                        margin: "0 auto",
                    }}
                >
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <div
                                className="glass-card glass-card-hover"
                                style={{ padding: "2rem", height: "100%", position: "relative", overflow: "hidden" }}
                            >
                                {/* Gradient top bar */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 3,
                                        background: edu.gradient,
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 16,
                                    }}
                                />
                                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginTop: "0.5rem" }}>
                                    <div
                                        style={{
                                            padding: 12,
                                            borderRadius: 12,
                                            background: edu.gradient,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <GraduationCap size={24} color="white" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "white", lineHeight: 1.4 }}>{edu.degree}</h3>
                                        <p style={{ color: "#818cf8", fontWeight: 500, fontSize: "0.85rem", margin: "4px 0" }}>{edu.institution}</p>
                                        <div style={{ display: "flex", gap: "0.75rem", color: "#6b7280", fontSize: "0.75rem", marginBottom: "0.75rem" }}>
                                            <span>{edu.duration}</span>
                                            <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                                                <MapPin size={10} /> {edu.location}
                                            </span>
                                        </div>
                                        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                                            {edu.bullets.map((bullet, j) => (
                                                <li key={j} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.4rem" }}>
                                                    <span style={{ color: "#818cf8", fontSize: "0.85rem", marginTop: 2, flexShrink: 0 }}>•</span>
                                                    <span style={{ color: "#d1d5db", fontSize: "0.83rem", lineHeight: 1.6 }}>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
