import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/data/projects";


interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block h-full"
        >
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                {/* Image */}
                <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-zinc-900">

                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                            <span className="text-6xl opacity-20">
                                ◈
                            </span>
                        </div>
                    )}

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Status */}
                    <span className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-black/60 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                        {project.status}
                    </span>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-6">

                    <div className="flex items-start justify-between gap-4">

                        <div>
                            <p className="text-sm uppercase tracking-wider text-cyan-400">
                                {project.category}
                            </p>

                            <h2 className="mt-2 text-2xl font-bold tracking-tight transition-colors group-hover:text-cyan-300">
                                {project.title}
                            </h2>
                        </div>

                        <ArrowUpRight
                            size={20}
                            className="mt-1 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                        />
                    </div>

                    <p className="mt-4 flex-1 leading-7 text-zinc-400">
                        {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                </div>

            </article>
        </Link>
    );
}