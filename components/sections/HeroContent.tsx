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
            className="max-w-3xl mt-10 sm:mt-20 lg:mt-32"
        >
            {/* Badge */}
            <div className="mb-6">
                <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur">
                    Research Notebook
                </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
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
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
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
                className="mt-10 flex flex-wrap gap-4"
            >
                <Button href="/notebook" variant="primary">
                    Browse Notes
                </Button>

                <Button href="/projects" variant="secondary">
                    View Projects
                </Button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex flex-wrap gap-10"
            >
                <div>
                    <h3 className="text-3xl font-bold text-cyan-400">
                        {totalNotes}
                    </h3>

                    <p className="text-sm text-zinc-500">
                        Research Notes
                    </p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-cyan-400">
                        {totalCategories}
                    </h3>

                    <p className="text-sm text-zinc-500">
                        Categories
                    </p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-cyan-400">
                        {totalTags}
                    </h3>

                    <p className="text-sm text-zinc-500">
                        Tags
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}