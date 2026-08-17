import Link from "next/link";

interface Props {
    note: any;
}

export default function NoteCard({ note }: Props) {
    return (
        <Link
            href={`/notebook/${note.slug}`}
            className="
                group
                block
                min-w-0
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:bg-white/8
                hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]
                sm:p-6
            "
        >
            {/* Category */}
            <p className="truncate text-sm font-medium text-cyan-400">
                {note.category}
            </p>

            {/* Title */}
            <h2 className="mt-3 break-words text-xl font-bold leading-tight tracking-tight transition-colors group-hover:text-cyan-300 sm:text-2xl">
                {note.title}
            </h2>

            {/* Description */}
            <p className="mt-3 line-clamp-3 break-words text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                {note.description}
            </p>

            {/* Read */}
            <div className="mt-6 text-sm font-medium text-cyan-400">
                Read Note →
            </div>
        </Link>
    );
}