import { notes } from "@/lib/velite";

export function getRelatedNotes(slug: string) {
    const current = notes.find((n) => n.slug === slug);

    if (!current) return [];

    return notes
        .filter((n) => n.slug !== slug)
        .map((note) => {
            let score = 0;

            // kategori
            if (note.category === current.category) {
                score += 5;
            }

            // tags
            const commonTags = note.tags.filter((tag) =>
                current.tags.includes(tag)
            ).length;

            score += commonTags * 2;

            // read time
            if (
                Math.abs(
                    note.metadata.readingTime -
                    current.metadata.readingTime
                ) <= 2
            ) {
                score++;
            }

            return {
                ...note,
                score,
            };
        })
        .filter((note) => note.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}