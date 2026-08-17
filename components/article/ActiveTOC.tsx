"use client";

import { useEffect, useState } from "react";

type TocItem = {
    title: string;
    url: string;
};

export default function ActiveTOC({
    toc,
}: {
    toc: TocItem[];
}) {
    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
            }
        );

        toc.forEach((item) => {
            const id = item.url.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [toc]);

    if (toc.length === 0) {
        return null;
    }

    return (
        <aside className="lg:sticky lg:top-28 lg:self-start">

            {/* Mobile / Tablet */}
            <div className="rounded-2xl border border-white/10 bg-white/5 lg:hidden">

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                >
                    <span className="text-sm font-semibold text-white">
                        Table of Contents
                    </span>

                    <span className="text-cyan-400">
                        {open ? "−" : "+"}
                    </span>
                </button>

                {open && (
                    <nav className="border-t border-white/10 px-4 py-3">
                        <div className="space-y-2">
                            {toc.map((item) => (
                                <a
                                    key={item.url}
                                    href={item.url}
                                    onClick={() => setOpen(false)}
                                    className={`block text-sm leading-6 transition ${active === item.url
                                        ? "font-semibold text-cyan-400"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}

            </div>

            {/* Desktop */}
            <nav className="hidden space-y-2 border-l border-white/10 pl-5 lg:block">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    On this page
                </p>

                {toc.map((item) => (
                    <a
                        key={item.url}
                        href={item.url}
                        className={`block text-sm leading-6 transition ${active === item.url
                            ? "font-semibold text-cyan-400"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>

        </aside>
    );
}