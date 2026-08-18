"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { searchNotes } from "@/lib/search";

export default function SearchDialog() {
    const [query, setQuery] = useState("");

    const results = searchNotes(query);

    return (
        <div className="relative w-full">
            {/* Search */}
            <div
                className="
                    flex items-center
                    rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    transition-all duration-300
                    focus-within:border-cyan-400/30
                    focus-within:bg-white/[0.06]
                "
            >
                <Search
                    size={17}
                    className="
                        ml-3.5 shrink-0
                        text-zinc-500
                        transition-colors
                        duration-300
                        peer-focus:text-cyan-400
                    "
                />

                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="
                        peer w-full
                        bg-transparent
                        px-3 py-2.5
                        text-sm text-zinc-200
                        placeholder:text-zinc-600
                        outline-none
                    "
                />

                <kbd
                    className="
                        mr-2.5 hidden
                        rounded-md
                        border border-white/10
                        bg-white/5
                        px-1.5 py-0.5
                        text-[10px]
                        text-zinc-600
                        sm:block
                    "
                >
                    /
                </kbd>
            </div>

            {/* Results */}
            {query && (
                <div
                    className="
                        absolute left-0 right-0 top-[calc(100%+0.5rem)]
                        z-50
                        overflow-hidden
                        rounded-2xl
                        border border-white/10
                        bg-zinc-950/95
                        shadow-2xl
                        backdrop-blur-2xl
                    "
                >
                    {results.length > 0 ? (
                        <div className="p-2">
                            {results.map((note) => (
                                <Link
                                    key={note.slug}
                                    href={`/notebook/${note.slug}`}
                                    className="
                                        group flex items-center
                                        gap-3
                                        rounded-xl
                                        px-3 py-3
                                        transition-colors duration-200
                                        hover:bg-white/[0.06]
                                    "
                                >
                                    <div
                                        className="
                                            flex h-8 w-8 shrink-0
                                            items-center justify-center
                                            rounded-lg
                                            bg-white/5
                                            text-zinc-500
                                            transition-colors
                                            group-hover:text-cyan-400
                                        "
                                    >
                                        <Search size={15} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3
                                            className="
                                                truncate
                                                text-sm font-medium
                                                text-zinc-300
                                                group-hover:text-cyan-300
                                            "
                                        >
                                            {note.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-0.5 truncate
                                                text-xs
                                                text-zinc-600
                                            "
                                        >
                                            {note.description}
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={15}
                                        className="
                                            shrink-0
                                            text-zinc-700
                                            transition-all
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                            group-hover:text-cyan-400
                                        "
                                    />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="px-4 py-6 text-center">
                            <p className="text-sm text-zinc-500">
                                No notes found.
                            </p>

                            <p className="mt-1 text-xs text-zinc-700">
                                Try a different keyword.
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}