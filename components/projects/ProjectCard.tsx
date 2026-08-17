import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/data/projects";

interface Props {
    project: Project;
}

export default function ProjectCard({
    project,
}: Props) {
    return (
        <article
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:bg-white/8
                hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
            "
        >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">

                <div className="flex items-start justify-between gap-4">

                    <div>
                        <p className="text-sm uppercase tracking-wider text-cyan-400">
                            {project.category}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold transition-colors group-hover:text-cyan-300">
                            {project.title}
                        </h2>
                    </div>

                    <span
                        className="
                            shrink-0
                            rounded-full
                            border border-white/10
                            bg-white/5
                            px-3 py-1
                            text-xs
                            text-zinc-400
                        "
                    >
                        {project.status}
                    </span>

                </div>

                {/* Project visual */}
                <div
                    className="
                        mt-6
                        flex
                        aspect-video
                        items-center
                        justify-center
                        rounded-2xl
                        border border-white/10
                        bg-gradient-to-br
                        from-cyan-500/10
                        to-blue-500/10
                    "
                >
                    <span className="text-5xl opacity-20">
                        ⚙
                    </span>
                </div>

                <p className="mt-6 leading-7 text-zinc-400">
                    {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="
                                rounded-full
                                border border-white/10
                                bg-white/5
                                px-3 py-1
                                text-xs
                                text-zinc-400
                            "
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-cyan-400">
                    Explore Project
                    <ArrowUpRight
                        size={17}
                        className="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                        "
                    />
                </div>

            </div>
        </article>
    );
}