import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FocusCard from "./FocusCard";
import { currentFocus } from "@/data/currentFocus";

export default function CurrentFocus() {
    return (
        <section className="py-28">
            <Container>

                <SectionTitle
                    eyebrow="Research"
                    title="Current Focus"
                    description="The topics and technologies I'm actively exploring."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {currentFocus.map((item) => (
                        <FocusCard
                            key={item.title}
                            {...item}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}