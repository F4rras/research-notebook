import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroArtwork from "./HeroArtwork";

export default function Hero() {
    return (
        <section className="relative flex min-h-[auto] items-center overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28 lg:min-h-[90vh] lg:py-0">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <HeroContent />
                    <div className="mb-[-6rem] lg:mb-0">
                        <HeroArtwork />
                    </div>
                </div>
            </Container>
        </section>
    );
}