import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ResearchCard from "./ResearchCard";
import { research } from "@/data/research";
export default function FeaturedResearch() {
    return (
        <section id="featured-research">
            <Container>
                <SectionTitle
                    title="Featured Research"
                    description="Projects and research I'm currently working on."
                />

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {research.map((item) => (
                        <ResearchCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}