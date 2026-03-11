"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";

export default function About() {
    return (
        <section id="about" className="relative py-28 bg-[#08000f]" style={{ minHeight: "100vh" }}>
            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(99,102,241,0.07) 0%, transparent 70%)",
                }}
            />

            <div className="section-container relative">
                <SectionHeading
                    title="About Me"
                    subtitle="A researcher who turns complex problems into elegant AI solutions."
                />

                {/* Two-column layout — stacks on mobile, side-by-side on lg */}
                <div className="flex flex-col lg:grid lg:grid-cols-[auto_1fr] gap-12 items-center mb-20">
                    {/* Profile Monogram */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative group w-[260px] h-[340px]">
                            {/* Animated gradient glow behind */}
                            <div
                                className="absolute -inset-3 rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-2xl"
                                style={{ background: "linear-gradient(135deg, #6366f1, #3b82f6, #a855f7)" }}
                            />
                            {/* Main card with image */}
                            <div className="relative glass-card w-full h-full rounded-2xl overflow-hidden">
                                <img
                                    src="/deva_image.png"
                                    alt="Devadripta Jadhav"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-5">
                            I&apos;m an applied machine learning researcher currently pursuing my{" "}
                            <span className="text-indigo-400 font-semibold">
                                PhD in Computer Science at BITS Pilani, K K Birla Goa Campus
                            </span>
                            , where I&apos;m a Research Fellow working on industry-sponsored ML systems for
                            automotive lifecycle and safety.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-5">
                            My work spans{" "}
                            <span className="text-blue-400 font-semibold">NLP &amp; LLMs</span>,{" "}
                            <span className="text-purple-400 font-semibold">biomedical signal processing</span>, and{" "}
                            <span className="text-indigo-400 font-semibold">computer vision.</span>
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            I&apos;ve interned at{" "}
                            <span className="text-gray-200 font-medium">IISER Kolkata</span>,{" "}
                            <span className="text-gray-200 font-medium">Defence Institute of Advanced Technology (DIAT-DRDO)</span>, and{" "}
                            <span className="text-gray-200 font-medium">IIT Bombay</span>, and co-founded{" "}
                            <span className="text-indigo-400 font-semibold">CodePVG</span>, a campus tech community
                            that brought together 1000+ students.
                        </p>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
