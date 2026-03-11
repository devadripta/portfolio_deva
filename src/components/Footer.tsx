"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[#0a0012]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>© {new Date().getFullYear()} Devadripta Jadhav.</span>
                        <span className="hidden sm:inline">Built with</span>
                        <Heart size={14} className="text-red-400 hidden sm:inline" />
                        <span className="hidden sm:inline">& Next.js</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/devadripta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-electric-blue transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://github.com/devadripta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="mailto:devadripta@gmail.com"
                            className="text-gray-400 hover:text-purple-light transition-colors"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
