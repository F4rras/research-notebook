import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import NoteCard from "./NoteCard";
import { notes } from "@/.velite";
import Link from "next/link";

export default function LatestNotes() {
    const latestNotes = [...notes]
        .sort(
            (a, b) =>
                new Date(b.date).getTime() -
                new Date(a.date).getTime()
        )
        .slice(0, 3);

    return (
        <section className="py-20 sm:py-28">
            <Container>

                <SectionTitle
                    title="Latest Notes"
                    description="Thoughts, ideas, and research notes from my learning journey."
                />

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

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/notebook"
                        className="
                            rounded-xl
                            border border-white/10
                            bg-white/5
                            px-5 py-3
                            text-sm font-medium
                            text-zinc-300
                            transition
                            hover:border-cyan-400/40
                            hover:bg-cyan-400/10
                            hover:text-cyan-300
                        "
                    >
                        View All Notes →
                    </Link>
                </div>

            </Container>
        </section>
    );
}
