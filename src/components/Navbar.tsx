"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Leadership", href: "#volunteering" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track which section is currently in view
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top, behavior: "smooth" });
            }
            setMobileOpen(false);
        },
        []
    );

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "navbar-blur shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand / Name */}
                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                        <span className="gradient-text">D</span>
                        <span className="text-white/90">.</span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`nav-link relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                        isActive
                                            ? "text-white bg-white/[0.06]"
                                            : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden navbar-blur border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-4 py-3 flex flex-col gap-0.5">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace("#", "");
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`px-4 py-3 text-sm rounded-lg transition-all ${
                                            isActive
                                                ? "text-white bg-indigo-500/10 border-l-2 border-indigo-500"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
