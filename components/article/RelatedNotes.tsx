import NoteCard from "@/components/notebook/NoteCard";

interface Props {
    notes: any[];
}

export default function RelatedNotes({
    notes,
}: Props) {
    if (!notes.length) return null;

    return (
        <section className="mt-20">

            <h2 className="mb-8 text-3xl font-bold">
                Related Notes
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
                {notes.map((note) => (
                    <NoteCard
                        key={note.slug}
                        note={note}
                    />
                ))}
            </div>

        </section>
    );
}