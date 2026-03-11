"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import { Send, Linkedin, Github, Mail, MapPin, Phone, CheckCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct mailto link as a fallback so user actually receives it
        const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:devadripta@gmail.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "12px 16px",
        borderRadius: 12,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "white",
        fontSize: "0.9rem",
        outline: "none",
        transition: "border-color 0.2s",
    };

    const labelStyle: React.CSSProperties = {
        display: "block",
        fontSize: "0.82rem",
        fontWeight: 500,
        color: "#d1d5db",
        marginBottom: 6,
    };

    return (
        <section id="contact" className="relative py-28 bg-[#08000f]" style={{ minHeight: "100vh" }}>
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 65%)",
                }}
            />

            <div className="section-container relative">
                <SectionHeading title="Get in Touch" subtitle="Let's collaborate on impactful research and projects" />

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 max-w-[960px] mx-auto">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card"
                        style={{ padding: "2rem" }}
                    >
                        {submitted ? (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 0", textAlign: "center" }}>
                                <CheckCircle size={48} color="#4ade80" style={{ marginBottom: 16 }} />
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: 8 }}>Message Sent!</h3>
                                <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>Thank you for reaching out. I&apos;ll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                <div>
                                    <label style={labelStyle}>Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your name"
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="your@email.com"
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Your message..."
                                        style={{ ...inputStyle, resize: "none" }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 8,
                                        padding: "13px 24px",
                                        borderRadius: 12,
                                        background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                                        color: "white",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        border: "none",
                                        cursor: "pointer",
                                        transition: "opacity 0.2s, transform 0.2s",
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                                >
                                    <Send size={16} /> Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                    >
                        {[
                            { Icon: Mail, label: "Email", value: "devadripta@gmail.com", href: "mailto:devadripta@gmail.com", gradient: "linear-gradient(135deg, #6366f1, #3b82f6)" },
                            { Icon: Phone, label: "Phone", value: "+91 9022475721", href: "tel:+919022475721", gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)" },
                        ].map(({ Icon, label, value, href, gradient }, i) => (
                            <div key={i} className="glass-card" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{ padding: 10, borderRadius: 12, background: gradient, flexShrink: 0 }}>
                                    <Icon size={18} color="white" />
                                </div>
                                <div>
                                    <p style={{ color: "#6b7280", fontSize: "0.75rem" }}>{label}</p>
                                    {href ? (
                                        <a href={href} style={{ color: "white", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none" }}>{value}</a>
                                    ) : (
                                        <p style={{ color: "white", fontWeight: 500, fontSize: "0.9rem" }}>{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Social */}
                        <div className="glass-card" style={{ padding: "1.25rem", display: "flex", gap: "0.75rem" }}>
                            {[
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/devadripta", label: "LinkedIn" },
                                { Icon: Github, href: "https://github.com/devadripta", label: "GitHub" },
                                { Icon: Mail, href: "mailto:devadripta@gmail.com", label: "Email" },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={label}
                                    style={{
                                        padding: 10,
                                        borderRadius: 10,
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        color: "#9ca3af",
                                        display: "flex",
                                        alignItems: "center",
                                        transition: "background 0.2s, color 0.2s",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.12)"; e.currentTarget.style.color = "#a5b4fc"; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#9ca3af"; }}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
