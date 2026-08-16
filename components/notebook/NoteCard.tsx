import Link from "next/link";

interface Props {
    note: any;
}

export default function NoteCard({ note }: Props) {
    return (
        <Link
            href={`/notebook/${note.slug}`}
            className="
                block
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                transition
                hover:border-cyan-400
                hover:-translate-y-1
            "
        >
            <p className="text-sm text-cyan-400">
                {note.category}
            </p>

            <h2 className="mt-3 text-2xl font-bold">
                {note.title}
            </h2>

            <p className="mt-3 text-gray-400">
                {note.description}
            </p>
        </Link>
    );
}