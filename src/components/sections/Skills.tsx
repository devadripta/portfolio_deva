"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

const radarData = [
    { subject: "Python", A: 95 },
    { subject: "PyTorch", A: 85 },
    { subject: "TensorFlow", A: 88 },
    { subject: "NLP/LLMs", A: 90 },
    { subject: "Comp. Vision", A: 82 },
    { subject: "Signal Proc.", A: 80 },
];

const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "C++", "Java", "SQL", "JavaScript", "R", "MATLAB"],
        color: "#6366f1",
    },
    {
        title: "ML / AI",
        skills: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "NumPy", "pandas"],
        color: "#3b82f6",
    },
    {
        title: "Cloud & Data",
        skills: ["GCP", "AWS", "MongoDB", "DBMS"],
        color: "#a855f7",
    },
    {
        title: "Dev & Tools",
        skills: ["Git", "REST APIs", "ReactJS", "HTML/CSS", "Linux"],
        color: "#ec4899",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-28 bg-[#0b0018]" style={{ minHeight: "100vh" }}>
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 55% 55% at 80% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)",
                }}
            />

            <div className="section-container relative">
                <SectionHeading title="Skills" subtitle="Technical proficiency across ML, development, and cloud" />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
                        gap: "3rem",
                        alignItems: "start",
                    }}
                >
                    {/* Radar Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card"
                        style={{ padding: "2rem" }}
                    >
                        <h3 style={{ fontWeight: 600, fontSize: "1rem", color: "white", textAlign: "center", marginBottom: "1rem" }}>
                            Core Competencies
                        </h3>
                        <ResponsiveContainer width="100%" height={320}>
                            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                                <PolarGrid stroke="rgba(99,102,241,0.15)" strokeDasharray="3 3" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: "#a5b4fc", fontSize: 11 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="Skills" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} strokeWidth={2} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Skill Badge Groups */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {skillCategories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card"
                                style={{ padding: "1.25rem" }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color }} />
                                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "white" }}>{cat.title}</span>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                    {cat.skills.map((skill, j) => (
                                        <motion.span
                                            key={j}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 + j * 0.04 }}
                                            className="skill-badge"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
