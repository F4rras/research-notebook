import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FocusCard from "./FocusCard";
import { currentFocus } from "@/data/currentFocus";

export default function CurrentFocus() {
    return (
        <section className="py-16 sm:py-20 lg:py-28">
            <Container>

                <SectionTitle
                    eyebrow="Research"
                    title="Current Focus"
                    description="The topics and technologies I'm actively exploring."
                />

                <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
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