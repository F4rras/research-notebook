import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import NoteCard from "./NoteCard";
import { notes } from "@/.velite";

export default function LatestNotes() {
    return (
        <section className="py-28">
            <Container>
                <SectionTitle
                    title="Latest Notes"
                    subtitle="Thoughts, ideas, and research notes from my learning journey."
                />

                <div className="grid gap-8">
                    {notes.map((item) => (
                        <NoteCard
                            key={item.slug}
                            cardItem={{ ...item, id: Number(item.slug), date: item.date }}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}