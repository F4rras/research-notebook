"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
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
            const query = search.toLowerCase();

            const matchesSearch =
                note.title
                    .toLowerCase()
                    .includes(query) ||
                note.description
                    .toLowerCase()
                    .includes(query);

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
        <main className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
            <Container>

                {/* Search */}
                <SearchBar
                    value={search}
                    onChange={setSearch}
                />

                {/* Category */}
                <div className="mt-5 sm:mt-6">
                    <CategoryFilter
                        categories={categories}
                        selected={category}
                        onSelect={setCategory}
                    />
                </div>

                {/* Tags */}
                <div className="mt-3 sm:mt-4">
                    <TagFilter
                        tags={tags}
                        selected={tag}
                        onSelect={setTag}
                    />
                </div>

                {/* Results */}
                <div className="mt-8 sm:mt-10">
                    <NotebookGrid notes={filteredNotes} />
                </div>

            </Container>
        </main>
    );
}