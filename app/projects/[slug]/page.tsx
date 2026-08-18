import { notFound } from "next/navigation";
import { projects } from "@/data/data/projects";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = projects.find(
        (project) => project.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
            <Container>
                {/* Back */}
                <Link
                    href="/projects"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-zinc-400
                        transition
                        hover:text-cyan-400
                    "
                >
                    <ArrowLeft size={18} />
                    Back to Projects
                </Link>

                {/* Header */}
                <div>
                    <p className="text-sm font-medium text-cyan-400">
                        {project.category}
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
                        {project.title}
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
                        {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Overview */}
                <section className="mt-16">
                    <h2 className="text-xl font-semibold text-zinc-200">
                        Overview
                    </h2>

                    <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
                        {project.overview}
                    </p>
                </section>

                {/* Technologies */}
                <section className="mt-14">
                    <h2 className="text-xl font-semibold text-zinc-200">
                        Technologies
                    </h2>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Highlights */}
                <section className="mt-14">
                    <h2 className="text-xl font-semibold text-zinc-200">
                        Highlights
                    </h2>

                    <div className="mt-5 space-y-3">
                        {project.highlights.map((highlight) => (
                            <div
                                key={highlight}
                                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-400"
                            >
                                {highlight}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Status */}
                <section className="mt-14">
                    <h2 className="text-xl font-semibold text-zinc-200">
                        Status
                    </h2>

                    <p className="mt-3 text-sm text-cyan-400">
                        {project.status}
                    </p>
                </section>
            </Container>
        </main>
    );
}