"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/CTAButton";
import {
    totalNotes,
    totalCategories,
    totalTags,
} from "@/lib/stats";

export default function HeroContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-3xl sm:mt-20 lg:mt-32"
        >
            {/* Badge */}
            <div className="mb-5 sm:mb-6">
                <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur sm:px-4 sm:text-sm">
                    Research Notebook
                </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Exploring{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Mathematics,
                    <br />
                    Theoretical Physics,
                    <br />
                    Artificial Intelligence,
                    <br />
                    and Engineering.
                </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8">
                A collection of research notes, engineering projects,
                simulations, and technical articles documenting my journey
                through mathematics, physics, artificial intelligence, and
                scientific computing.
            </p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
            >
                <Button href="/notebook" variant="primary">
                    Browse Notes
                </Button>

                <Button href="/projects" variant="secondary">
                    View Projects
                </Button>
            </motion.div>

            {/* Statistics */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap gap-x-8 gap-y-6 sm:mt-12 sm:gap-10"
            >
                <div>
                    <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                        {totalNotes}
                    </h3>

                    <p className="text-xs text-zinc-500 sm:text-sm">
                        Research Notes
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                        {totalCategories}
                    </h3>

                    <p className="text-xs text-zinc-500 sm:text-sm">
                        Categories
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                        {totalTags}
                    </h3>

                    <p className="text-xs text-zinc-500 sm:text-sm">
                        Tags
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}