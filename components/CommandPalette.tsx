"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import Link from "next/link";
import { searchNotes } from "@/lib/search";

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        function down(e: KeyboardEvent) {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setOpen((o) => !o);
            }
        }

        window.addEventListener("keydown", down);

        return () => window.removeEventListener("keydown", down);
    }, []);

    const results = searchNotes(query);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>

                <Dialog.Overlay className="fixed inset-0 bg-black/60" />

                <Dialog.Content
                    className="
                        fixed
                        left-1/2
                        top-24
                        w-full
                        max-w-2xl
                        -translate-x-1/2
                        rounded-2xl
                        border
                        border-white/10
                        bg-zinc-900
                        p-6
                    "
                >

                    <input
                        autoFocus
                        value={query}
                        onChange={(e) =>
                            setQuery(e.target.value)
                        }
                        placeholder="Search notes..."
                        className="
                            mb-6
                            w-full
                            rounded-lg
                            border
                            border-white/10
                            bg-black/40
                            p-4
                            outline-none
                        "
                    />

                    <div className="space-y-2">

                        {results.map((note) => (
                            <Link
                                key={note.slug}
                                href={`/notebook/${note.slug}`}
                                onClick={() => setOpen(false)}
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

                        {query && results.length === 0 && (
                            <p className="text-center text-gray-400">
                                No notes found.
                            </p>
                        )}

                    </div>

                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    );
}