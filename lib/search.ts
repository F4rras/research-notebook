import { Index } from "flexsearch";
import { notes } from "@/lib/velite";

const index = new Index({
    tokenize: "forward",
});

notes.forEach((note, i) => {
    index.add(
        i,
        `
        ${note.title}
        ${note.description}
        ${note.category}
        ${note.tags.join(" ")}
        `
    );
});

export function searchNotes(query: string) {
    if (!query.trim()) return [];

    const ids = index.search(query) as number[];

    return ids.map((id) => notes[id]);
}