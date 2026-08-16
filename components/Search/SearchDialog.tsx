"use client";

import { useState } from "react";
import Link from "next/link";
import { searchNotes } from "@/lib/search";

export default function SearchDialog() {
    const [query, setQuery] = useState("");

    const results = searchNotes(query);

    return (
        <div className="w-full max-w-xl">

            <input
                className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/40
                    p-4
                    outline-none
                "
                placeholder="Search notes..."
                value={query}
                onChange={(e) =>
                    setQuery(e.target.value)
                }
            />

            {query && (
                <div className="mt-4 space-y-2">
                    {results.map((note) => (
                        <Link
                            key={note.slug}
                            href={`/notebook/${note.slug}`}
                            className="
                                block
                                rounded-lg
                                border
                                border-white/10
                                p-4
                                hover:border-cyan-400
                            "
                        >
                            <h3 className="font-semibold">
                                {note.title}
                            </h3>

                            <p className="text-sm text-gray-400">
                                {note.description}
                            </p>
                        </Link>
                    ))}
                </div>
            )}

        </div>
    );
}