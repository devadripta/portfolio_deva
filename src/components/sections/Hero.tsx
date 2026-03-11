"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileDown } from "lucide-react";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";

const ParticlesBackground = dynamic(
    () => import("@/components/ParticlesBackground"),
    { ssr: false }
);

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0012] via-[#1a0533] to-[#0a0012]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
            <ParticlesBackground />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-indigo-400 text-base md:text-lg mb-4 font-medium tracking-wide"
                    >
                        👋 Hello, I&apos;m
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
                    >
                        <span className="gradient-text">Devadripta</span>
                        <br />
                        <span className="text-white">Jadhav</span>
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8 h-10"
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    "Applied ML Researcher",
                                    "NLP & LLM Engineer",
                                    "Biomedical AI Developer",
                                    "Research Fellow @ BITS Pilani",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
                    >
                        <a
                            href="#projects"
                            className="group flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 min-w-[200px]"
                        >
                            View My Work
                            <ArrowDown
                                size={18}
                                className="group-hover:translate-y-1 transition-transform"
                            />
                        </a>
                        <a
                            href="/Devadripta_Jadhav_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 font-bold transition-all duration-300 hover:scale-105 min-w-[200px]"
                        >
                            <FileDown
                                size={18}
                                className="group-hover:-translate-y-0.5 transition-transform"
                            />
                            View CV
                        </a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="flex items-center justify-center gap-5"
                    >
                        {[
                            {
                                icon: Linkedin,
                                href: "https://www.linkedin.com/in/devadripta",
                                label: "LinkedIn",
                            },
                            {
                                icon: Github,
                                href: "https://github.com/devadripta",
                                label: "GitHub",
                            },
                            {
                                icon: Mail,
                                href: "mailto:devadripta@gmail.com",
                                label: "Email",
                            },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={
                                    href.startsWith("http") ? "noopener noreferrer" : undefined
                                }
                                className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300"
                                aria-label={label}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-gray-500 text-xs tracking-widest uppercase">
                        Scroll
                    </span>
                    <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center pt-1.5">
                        <motion.div
                            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-1.5 rounded-full bg-indigo-400"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
