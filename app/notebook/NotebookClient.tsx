"use client";

import { useMemo, useState } from "react";

import SearchBar from "@/components/notebook/SearchBar";
import CategoryFilter from "@/components/notebook/CategoryFilter";
import TagFilter from "@/components/notebook/TagFilter";
import NotebookGrid from "@/components/notebook/NotebookGrid";

interface Props {
    notes: any[];
}

export default function NotebookClient({ notes }: Props) {
    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    const [tag, setTag] = useState("All");

    const categories = [
        "All",
        ...new Set(notes.map((note) => note.category)),
    ];

    const tags = [
        "All",
        ...new Set(
            notes.flatMap((note) => note.tags ?? [])
        ),
    ];

    const filteredNotes = useMemo(() => {
        return notes.filter((note) => {
            const matchesSearch =
                note.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                note.description
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesCategory =
                category === "All" ||
                note.category === category;

            const matchesTag =
                tag === "All" ||
                note.tags?.includes(tag);

            return (
                matchesSearch &&
                matchesCategory &&
                matchesTag
            );
        });
    }, [notes, search, category, tag]);

    return (
        <main className="mx-auto max-w-7xl py-20">

            <SearchBar
                value={search}
                onChange={setSearch}
            />

            <div className="mt-6">
                <CategoryFilter
                    categories={categories}
                    selected={category}
                    onSelect={setCategory}
                />
            </div>

            <div className="mt-4">
                <TagFilter
                    tags={tags}
                    selected={tag}
                    onSelect={setTag}
                />
            </div>

            <div className="mt-10">
                <NotebookGrid notes={filteredNotes} />
            </div>

        </main>
    );
}