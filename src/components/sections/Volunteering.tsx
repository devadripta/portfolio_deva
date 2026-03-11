"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import { Users, Mic, Calendar } from "lucide-react";

const volunteeringData = [
    {
        role: "General Secretary",
        org: "TESA (E&TC Student's Association), PVGCOET",
        duration: "Aug 2023 – Aug 2024",
        Icon: Users,
        highlights: [
            "Led flagship TECHCRAFT national tech event (20+ yr legacy)",
            "Brought major sponsorships from industry",
            "Organized seminars with guests from top institutions",
        ],
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
    },
    {
        role: "Co-founder & Networking Head",
        org: "CodePVG",
        duration: "Jan 2022 – Apr 2025",
        Icon: Mic,
        highlights: [
            "Produced podcasts with IIT Bombay alumni & Goldman Sachs NY VP",
            "Hosted sessions on Python, Tinkercad, LinkedIn",
            "Built campus peer learning ecosystem for 1000+ students",
        ],
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
    {
        role: "Event Organizer",
        org: "Google Developer Student Clubs (GDSC)",
        duration: "Aug 2022 – Aug 2023",
        Icon: Calendar,
        highlights: [
            "Organized React/GitHub workshops",
            "Co-managed Annual Ideathon (multi-college)",
            "Logistics and permissions for large-scale events",
        ],
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    },
];

export default function Volunteering() {
    return (
        <section id="volunteering" className="relative py-28 bg-[#08000f]" style={{ minHeight: "100vh" }}>
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(99,102,241,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="section-container relative">
                <SectionHeading
                    title="Leadership & Volunteering"
                    subtitle="Building communities and driving impact beyond research"
                />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {volunteeringData.map((item, i) => {
                        const { Icon } = item;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                            >
                                <div
                                    className="glass-card glass-card-hover"
                                    style={{ padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column" }}
                                >
                                    {/* Icon + role */}
                                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                                        <div
                                            style={{
                                                padding: "10px",
                                                borderRadius: 12,
                                                background: item.gradient,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Icon size={20} color="white" />
                                        </div>
                                        <div>
                                            <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "white" }}>{item.role}</h3>
                                            <p style={{ color: "#818cf8", fontSize: "0.8rem", fontWeight: 500, marginTop: 2 }}>{item.org}</p>
                                            <p style={{ color: "#6b7280", fontSize: "0.75rem", marginTop: 2 }}>{item.duration}</p>
                                        </div>
                                    </div>

                                    <ul style={{ listStyle: "none", flexGrow: 1 }}>
                                        {item.highlights.map((h, j) => (
                                            <li key={j} style={{ display: "flex", gap: "0.4rem", marginBottom: "0.4rem" }}>
                                                <span style={{ color: "#818cf8", fontSize: "0.7rem", marginTop: 6, flexShrink: 0 }}>▹</span>
                                                <span style={{ color: "#d1d5db", fontSize: "0.83rem", lineHeight: 1.6 }}>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
