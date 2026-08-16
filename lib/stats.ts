import { notes } from "@/lib/velite";

export const totalNotes = notes.length;

export const totalCategories = new Set(
    notes.map((note) => note.category)
).size;

export const totalTags = new Set(
    notes.flatMap((note) => note.tags)
).size;