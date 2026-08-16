import NoteCard from "./NoteCard";

interface Props {
    notes: any[];
}

export default function NotebookGrid({
    notes,
}: Props) {
    if (notes.length === 0) {
        return (
            <p className="text-gray-500">
                No notes found.
            </p>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
                <NoteCard
                    key={note.slug}
                    note={note}
                />
            ))}
        </div>
    );
}