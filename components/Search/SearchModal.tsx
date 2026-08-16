"use client";

import { useState } from "react";
import SearchDialog from "./SearchDialog";
import { useEffect } from "react";

export default function SearchModal() {

    const [open, setOpen] = useState(false);

    useEffect(() => {

        function handler(e: KeyboardEvent) {

            if ((e.ctrlKey || e.metaKey) && e.key === "k") {

                e.preventDefault();

                setOpen(true);

            }

        }

        window.addEventListener("keydown", handler);

        return () =>
            window.removeEventListener("keydown", handler);

    }, []);
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="rounded-lg border px-4 py-2"
            >
                Search
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-20">

                    <div className="w-full max-w-2xl rounded-xl bg-zinc-950 p-6">

                        <button
                            onClick={() => setOpen(false)}
                            className="mb-4"
                        >
                            Close
                        </button>
                        <div className="">
                            <SearchDialog />
                        </div>


                    </div>

                </div>
            )}
        </>
    );
}

