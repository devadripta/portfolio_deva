"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Research Fellow",
        org: "BITS Pilani, K K Birla Goa Campus",
        duration: "December 2025 - Present",
        location: "Goa, India",
        bullets: [
            "Working on an industry-sponsored ML project for end-to-end automotive lifecycle and safety systems.",
            "Developing and evaluating ML models and pipelines for real-world, large-scale data.",
        ],
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
        dotColor: "#6366f1",
    },
    {
        role: "Research Intern",
        org: "Indian Institute of Education Science and Research (IISER), Kolkata",
        duration: "March 2023 - January 2025",
        location: "Kolkata, India",
        bullets: [
            "Developed SportsOpi, a 43K-comment dataset on six major sports controversies, using LLaMA-3.1's multi-phase annotation and human verification (κ > 0.8) for reliable 4-way stance labels.",
            "Fine-tuned LLaMA-3.1-8b and DeepSeek-8b, raising stance-detection F1 from ~0.35 to ~0.75 and performed attention-based probing to interpret model gains.",
        ],
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
        dotColor: "#3b82f6",
    },
    {
        role: "Research Intern",
        org: "Defence Institute of Advanced Technology, Defence Research and Development Organisation (DIAT, DRDO)",
        duration: "December 2023 - March 2024",
        location: "Pune, India",
        bullets: [
            "Developed a novel EEG signal classification method for upper limb movement tasks, achieving 97.50% micro-averaged accuracy and 99.17% mean accuracy, outperforming recent approaches.",
            "Extracted and evaluated time-domain statistical and band-power features from pre-processed EEG signals using multiple machine learning classifiers, including KNN, SVM, and an ensemble classifier, improving motor imagery task classification accuracy by 10% with MATLAB and Python.",
        ],
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
        dotColor: "#a855f7",
    },
    {
        role: "Project Intern",
        org: "Indian Institute of Technology (IIT), Bombay",
        duration: "October 2023 - March 2024",
        location: "Bombay, India",
        bullets: [
            "Project Title: Brain Tumor Detection. Implemented a Convolutional Neural Network (CNN) for Brain Tumor Detection which achieved a robust testing accuracy of 95%, demonstrating superior generalization ability in identifying brain tumors from MRI images.",
            "Utilized a pre-trained ResNet-50 model for brain tumor detection that achieved a high training accuracy of 99.50%.",
            "Conducted a comprehensive comparative analysis between CNN and ResNet-50 models.",
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

                {/* 2x2 compact card grid */}
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

