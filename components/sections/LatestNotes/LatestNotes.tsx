import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import NoteCard from "./NoteCard";
import { notes } from "@/.velite";
import Link from "next/link";
import container from "@/components/ui/Container";

export default function LatestNotes() {
    const latestNotes = [...notes]
        .sort(
            (a, b) =>
                new Date(b.date).getTime() -
                new Date(a.date).getTime()
        )
        .slice(0, 3);

    return (
        <section className="py-20 sm:py-24 lg:py-28">
            <Container>

                <div className="flex items-end justify-between gap-6">

                    <SectionTitle
                        eyebrow="Notebook"
                        title="Latest Notes"
                        description="Recent ideas, experiments, and things I've been learning."
                    />

                    <a
                        href="/notebook"
                        className="mb-12 hidden shrink-0 text-sm font-medium text-cyan-400 transition hover:text-cyan-300 sm:block"
                    >
                        View all →
                    </a>

                </div>

                {/* notes grid */}
                <div className="grid gap-6">
                    {latestNotes.map((item) => (
                        <NoteCard
                            key={item.slug}
                            cardItem={{
                                ...item,
                                id: Number(item.slug),
                                date: item.date,
                            }}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
