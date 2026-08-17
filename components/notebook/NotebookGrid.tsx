import NoteCard from "./NoteCard";

interface Props {
    notes: any[];
}

export default function NotebookGrid({
    notes,
}: Props) {
    if (notes.length === 0) {
        return (
            <p className="py-10 text-center text-gray-500">
                No notes found.
            </p>
        );
    }

    return (
        <div className="grid min-w-0 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
                <div key={note.slug} className="min-w-0">
                    <NoteCard note={note} />
                </div>
            ))}
        </div>
    );
}