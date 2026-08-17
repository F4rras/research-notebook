import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/data/projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-28">
            <Container>

                <SectionTitle
                    eyebrow="Engineering"
                    title="Projects"
                    description="Things I build, experiment with, and develop."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

            </Container>
        </main>
    );
}