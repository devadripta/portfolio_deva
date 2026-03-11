"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setReady(true));
    }, []);

    if (!ready) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: false,
                background: { color: { value: "transparent" } },
                fpsLimit: 60,
                particles: {
                    color: { value: ["#6366f1", "#3b82f6", "#a855f7", "#818cf8"] },
                    links: {
                        color: "#6366f1",
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.8,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: { default: "out" },
                    },
                    number: {
                        density: { enable: true },
                        value: 80,
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.4 },
                        animation: {
                            enable: true,
                            speed: 0.5,
                            sync: false,
                        },
                    },
                    shape: { type: "circle" },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                    },
                    modes: {
                        grab: { distance: 140, links: { opacity: 0.3 } },
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 z-0"
        />
    );
}
