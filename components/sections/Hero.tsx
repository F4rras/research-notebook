import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroArtwork from "./HeroArtwork";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center overflow-hidden">
            <Container>
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    <HeroContent />
                    <HeroArtwork />
                </div>
            </Container>
        </section>
    );
}