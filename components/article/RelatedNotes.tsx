import NoteCard from "@/components/notebook/NoteCard";

interface Props {
    notes: any[];
}

export default function RelatedNotes({
    notes,
}: Props) {
    if (!notes.length) return null;

    return (
        <section className="mt-16 sm:mt-20">

            <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
                Related Notes
            </h2>

            <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
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