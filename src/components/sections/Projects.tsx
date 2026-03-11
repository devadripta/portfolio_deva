"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import { X, Github } from "lucide-react";

const projects = [
    {
        title: "AI-Powered Cost-Effective Spirometer",
        tags: ["TensorFlow", "Flutter", "CNN+LSTM", "MobileNetV2", "Healthcare AI"],
        badge: "🇯🇵 ICASI 2025, Tokyo",
        description:
            "Presented at International Conference on Applied System Innovation (ICASI) 2025, Tokyo. Developed a portable spirometer for asthma/COPD diagnosis. Orchestrated dual-model AI architecture: 1D CNN+LSTM for high-fidelity time-series analysis and MobileNetV2 for flow-volume imaging.",
        highlights: ["93.73% Acc (CNN+LSTM)", "92.7% Acc (Image)"],
        link: "https://ieeexplore.ieee.org/abstract/document/11148564",
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
        dotColor: "#6366f1",
    },
    {
        title: "SportsOpi — Stance Detection & LLM Fine-tuning",
        tags: ["LLaMA-3.1", "DeepSeek", "NLP", "Hugging Face"],
        badge: "IISER Kolkata",
        description:
            "Engineered a large-scale stance detection dataset (43K comments) on sports controversies. Fine-tuned LLaMA-3.1-8B and DeepSeek-8B models, achieving a significant performance leap (F1 score up from 0.35 to 0.75). Implemented attention-probing for model interpretability.",
        highlights: ["43K Dataset", "F1 Score: 0.75"],
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
        dotColor: "#3b82f6",
    },
    {
        title: "EEG Classification for Motor Imagery (DRDO)",
        tags: ["EEG", "MATLAB", "Python", "SVM"],
        badge: null,
        description:
            "Novel method for upper-limb movement classification achieving 97.50% micro-averaged accuracy — outperforming recent approaches.",
        highlights: ["97.50% Accuracy"],
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
        dotColor: "#a855f7",
    },
    {
        title: "Brain Tumour Detection (IIT Bombay)",
        tags: ["CNN", "ResNet-50", "MRI", "TensorFlow"],
        badge: null,
        description:
            "CNN (95% test acc.) + fine-tuned ResNet-50 (99.5% train acc.) on MRI images. Full comparative architecture study.",
        highlights: ["95% Test Acc.", "99.5% Train Acc."],
        gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
        dotColor: "#ec4899",
    },
    {
        title: "EMG-Based Robotics Claw (Prosthetics)",
        tags: ["EMG", "Robotics", "Biomedical", "Embedded"],
        badge: "🏆 2nd Rank in Department",
        description:
            "EMG-controlled prosthetic claw — secured 2nd rank in department in pre-final year B.E. project.",
        highlights: ["2nd Rank"],
        gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
        dotColor: "#f59e0b",
    },
];

export default function Projects() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section id="projects" className="relative py-28 bg-[#08000f]" style={{ minHeight: "100vh" }}>
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(99,102,241,0.06) 0%, transparent 65%)",
                }}
            />

            <div className="section-container relative">
                <SectionHeading title="Projects" subtitle="Research work and engineering projects that push boundaries" />

                {/* Card Grid — explicit 3-col */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            onClick={() => setSelected(i)}
                            style={{ cursor: "pointer" }}
                        >
                            <div
                                className="glass-card glass-card-hover"
                                style={{
                                    padding: "1.5rem",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                {/* Badge */}
                                {p.badge && (
                                    <span
                                        style={{
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            padding: "3px 10px",
                                            borderRadius: 9999,
                                            background: "rgba(99,102,241,0.15)",
                                            border: "1px solid rgba(99,102,241,0.25)",
                                            color: "#a5b4fc",
                                            display: "inline-block",
                                            width: "fit-content",
                                        }}
                                    >
                                        {p.badge}
                                    </span>
                                )}

                                {/* Title */}
                                <h3
                                    style={{
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                        color: "white",
                                        lineHeight: 1.4,
                                        flexGrow: 1,
                                    }}
                                >
                                    {p.title}
                                </h3>

                                {/* Highlights */}
                                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                                    {p.highlights.map((h, j) => (
                                        <span
                                            key={j}
                                            style={{
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                padding: "3px 10px",
                                                borderRadius: 6,
                                                background: p.gradient,
                                                color: "white",
                                            }}
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                                    {p.tags.slice(0, 3).map((t, j) => (
                                        <span key={j} className="skill-badge" style={{ fontSize: "0.7rem", padding: "3px 10px" }}>
                                            {t}
                                        </span>
                                    ))}
                                    {p.tags.length > 3 && (
                                        <span className="skill-badge" style={{ fontSize: "0.7rem", padding: "3px 10px" }}>
                                            +{p.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 9999,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1rem",
                        }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card"
                            style={{
                                maxWidth: 520,
                                width: "100%",
                                padding: "2rem",
                                position: "relative",
                                maxHeight: "85vh",
                                overflowY: "auto",
                                border: "1px solid rgba(99,102,241,0.25)",
                            }}
                        >
                            <button
                                onClick={() => setSelected(null)}
                                style={{
                                    position: "absolute",
                                    top: 16,
                                    right: 16,
                                    padding: 8,
                                    borderRadius: 8,
                                    background: "rgba(255,255,255,0.05)",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "#9ca3af",
                                }}
                            >
                                <X size={18} />
                            </button>

                            {projects[selected].badge && (
                                <span
                                    style={{
                                        display: "inline-block",
                                        marginBottom: "1rem",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        padding: "4px 12px",
                                        borderRadius: 9999,
                                        background: "rgba(99,102,241,0.15)",
                                        border: "1px solid rgba(99,102,241,0.25)",
                                        color: "#a5b4fc",
                                    }}
                                >
                                    {projects[selected].badge}
                                </span>
                            )}

                            <h3 style={{ fontWeight: 700, fontSize: "1.25rem", color: "white", marginBottom: "1rem", paddingRight: "2rem" }}>
                                {projects[selected].title}
                            </h3>

                            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                                {projects[selected].highlights.map((h, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            padding: "5px 14px",
                                            borderRadius: 8,
                                            background: projects[selected].gradient,
                                            color: "white",
                                            fontSize: "0.82rem",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {h}
                                    </span>
                                ))}
                            </div>

                            <p style={{ color: "#d1d5db", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                                {projects[selected].description}
                            </p>

                            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                                {projects[selected].tags.map((t, i) => (
                                    <span key={i} className="skill-badge">{t}</span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={projects[selected].link || "https://github.com/devadripta"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="grow flex items-center justify-center gap-2 padding-large rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                                    style={{ padding: "12px" }}
                                >
                                    {projects[selected].link ? "View Paper" : "View Code"}
                                </a>
                                <a
                                    href="https://github.com/devadripta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
