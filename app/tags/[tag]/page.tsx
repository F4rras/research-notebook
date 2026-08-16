import { notes } from "@/lib/velite";
import { notFound } from "next/navigation";

import NoteCard from "@/components/notebook/NoteCard";

export async function generateStaticParams() {
    const tags = Array.from(
        new Set(
            notes.flatMap((note) => note.tags)
        )
    );

    return tags.map((tag) => ({
        tag,
    }));
}

export default async function TagPage({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const filtered = notes.filter((note) =>
        note.tags.includes(tag)
    );

    if (filtered.length === 0) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-6xl px-6 py-16">

            <h1 className="text-5xl font-bold">
                #{tag}
            </h1>

            <p className="mt-2 text-gray-400">
                {filtered.length} notes
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {filtered.map((note) => (
                    <NoteCard
                        key={note.slug}
                        note={note}
                    />
                ))}
            </div>


        </main>
    );
}