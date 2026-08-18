import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/data/projects";

export default function FeaturedProjects() {
    return (
        <section className="py-20 sm:py-24 lg:py-28">
            <Container>

                <div className="flex items-end justify-between gap-6">

                    <SectionTitle
                        eyebrow="Projects"
                        title="Things I'm Building"
                        description="A selection of software, engineering, and technology projects."
                    />

                    <a
                        href="/projects"
                        className="mb-12 hidden shrink-0 text-sm font-medium text-cyan-400 transition hover:text-cyan-300 sm:block"
                    >
                        View all →
                    </a>

                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

                <a
                    href="/projects"
                    className="mt-8 block text-center text-sm font-medium text-cyan-400 sm:hidden"
                >
                    View all projects →
                </a>

            </Container>
        </section>
    );
}