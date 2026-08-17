import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ResearchCard from "@/components/sections/FeaturedResearch/ResearchCard";
import { research } from "@/data/research";

export default function ResearchPage() {
    return (
        <main className="min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-28">
            <Container>

                <SectionTitle
                    eyebrow="Research"
                    title="Research"
                    description="Scientific questions, investigations, experiments, and ideas I'm exploring."
                />

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {research.map((item) => (
                        <ResearchCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

            </Container>
        </main>
    );
}