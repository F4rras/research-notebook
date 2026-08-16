"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroArtwork() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();

        mouseX.set(event.clientX - rect.left - rect.width / 2);
        mouseY.set(event.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    const coreX = useTransform(mouseX, [-200, 200], [-15, 15]);
    const coreY = useTransform(mouseY, [-200, 200], [-15, 15]);

    const glowX = useTransform(mouseX, [-200, 200], [-30, 30]);
    const glowY = useTransform(mouseY, [-200, 200], [-30, 30]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative hidden h-[520px] items-center justify-center lg:flex"
        >
            {/* Glow */}
            <motion.div
                style={{
                    x: glowX,
                    y: glowY,
                }}
                className="absolute h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
            />

            {/* Outer Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 40,
                    ease: "linear",
                }}
                className="absolute h-96 w-96 rounded-full border border-cyan-400/20"
            />

            {/* Inner Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                }}
                className="absolute h-64 w-64 rounded-full border border-white/10"
            />

            {/* Scientific Symbols */}
            <span className="absolute top-6 text-3xl text-cyan-300">∇</span>

            <span className="absolute right-8 text-3xl text-white/70">ℏ</span>

            <span className="absolute bottom-8 text-3xl text-cyan-300">Σ</span>

            <span className="absolute left-6 text-3xl text-white/60">∫</span>

            <span className="absolute left-1/2 top-20 -translate-x-1/2 text-xl text-cyan-300">
                π
            </span>

            {/* Core */}
            <motion.div
                style={{
                    x: coreX,
                    y: coreY,
                }}
                animate={{
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                }}
                className="h-24 w-24 rounded-full border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-xl"
            />
        </motion.div>
    );
}