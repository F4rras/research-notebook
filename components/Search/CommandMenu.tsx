"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchNotes } from "@/lib/search";

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

export default function CommandMenu() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setOpen((o) => !o);
            }
        };

        window.addEventListener("keydown", down);
        return () => window.removeEventListener("keydown", down);
    }, []);
    const results = searchNotes(query);
    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <Command>
                <CommandInput
                    value={query}
                    onValueChange={setQuery}
                    placeholder="Search notes..."
                />

                <CommandList>
                    <CommandEmpty>No notes found.</CommandEmpty>

                    <CommandGroup heading="Notes">
                        {results.map((item) => (
                            <CommandItem
                                key={item.slug}
                                value={`${item.title} ${item.category} ${item.tags.join(" ")}`}
                                onSelect={() => {
                                    router.push(`/notebook/${item.slug}`);
                                    setOpen(false);
                                }}
                            >
                                <div className="flex flex-col">
                                    <span>{item.title}</span>
                                    <span className="text-xs opacity-60">
                                        {item.category}
                                    </span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command >
        </CommandDialog>
    );
}