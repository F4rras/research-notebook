import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ResearchCard from "./ResearchCard";
import { research } from "@/data/research";

export default function FeaturedResearch() {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <Container>

                <div className="flex items-end justify-between gap-6">
                    <SectionTitle
                        eyebrow="Research"
                        title="Featured Research"
                        description="A selection of research projects and scientific questions I'm currently exploring."
                    />

                    <a
                        href="/research"
                        className="mb-8 hidden shrink-0 text-sm font-medium text-cyan-400 transition hover:text-cyan-300 sm:block"
                    >
                        View all →
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {research.slice(0, 3).map((item) => (
                        <ResearchCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

                <a
                    href="/research"
                    className="mt-8 block text-center text-sm font-medium text-cyan-400 sm:hidden"
                >
                    View all research →
                </a>

            </Container>
        </section>
    );
}