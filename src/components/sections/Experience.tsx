"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Research Fellow",
        org: "BITS Pilani, Goa Campus",
        duration: "Dec 2025 – Present",
        location: "Goa, India",
        bullets: [
            "Industry-sponsored ML project for end-to-end automotive lifecycle & safety systems.",
            "Building and evaluating ML pipelines on large-scale real-world data.",
        ],
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
        dotColor: "#6366f1",
    },
    {
        role: "Research Intern",
        org: "IISER Kolkata",
        duration: "Mar 2023 – Jan 2025",
        location: "Kolkata, India",
        bullets: [
            "Built SportsOpi — 43K-comment stance detection dataset (LLaMA-3.1 + human verify, κ > 0.8).",
            "Fine-tuned LLaMA-3.1-8B & DeepSeek-8B, lifting F1 from ~0.35 to ~0.75.",
        ],
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
        dotColor: "#3b82f6",
    },
    {
        role: "Research Intern",
        org: "DIAT-DRDO, Pune",
        duration: "Dec 2023 – Mar 2024",
        location: "Pune, India",
        bullets: [
            "Novel EEG classification for upper-limb movement — 97.50% micro-averaged accuracy.",
            "Time-domain & band-power features via KNN, SVM, ensemble methods in Python & MATLAB.",
        ],
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
        dotColor: "#a855f7",
    },
    {
        role: "Project Intern",
        org: "IIT Bombay",
        duration: "Oct 2023 – Mar 2024",
        location: "Mumbai, India",
        bullets: [
            "Brain Tumour Detection: CNN (95% test acc.) + fine-tuned ResNet-50 (99.5% train acc.).",
            "Comprehensive comparative analysis of both deep learning architectures on MRI data.",
        ],
        gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
        dotColor: "#ec4899",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-14 bg-[#0b0018]"
            style={{ minHeight: "100vh" }}
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 60% at 30% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="section-container relative">
                <SectionHeading
                    title="Experience"
                    subtitle="Research and engineering roles at premier institutions"
                />

                {/* 2×2 compact card grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    style={{ maxWidth: 900, margin: "0 auto" }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                        >
                            <div className="glass-card glass-card-hover h-full" style={{ padding: "1.25rem" }}>
                                {/* Gradient top bar */}
                                <div
                                    style={{
                                        height: 3,
                                        borderRadius: 3,
                                        background: exp.gradient,
                                        marginBottom: "1rem",
                                    }}
                                />

                                {/* Header */}
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.5rem" }}>
                                    <div
                                        style={{
                                            padding: "7px",
                                            borderRadius: "9px",
                                            background: exp.gradient,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Briefcase size={14} color="white" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "white", lineHeight: 1.3 }}>{exp.role}</h3>
                                        <p style={{ color: "#818cf8", fontSize: "0.8rem", fontWeight: 500 }}>{exp.org}</p>
                                    </div>
                                </div>

                                {/* Meta */}
                                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.6rem", flexWrap: "wrap" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "0.72rem", color: "#9ca3af" }}>
                                        <Calendar size={10} /> {exp.duration}
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "0.72rem", color: "#9ca3af" }}>
                                        <MapPin size={10} /> {exp.location}
                                    </span>
                                </div>

                                {/* Bullets */}
                                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                    {exp.bullets.map((b, i) => (
                                        <li key={i} style={{ display: "flex", gap: "0.4rem", marginBottom: "0.3rem" }}>
                                            <span style={{ color: exp.dotColor, marginTop: "5px", fontSize: "0.65rem", flexShrink: 0 }}>▹</span>
                                            <span style={{ color: "#d1d5db", fontSize: "0.81rem", lineHeight: 1.55 }}>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

