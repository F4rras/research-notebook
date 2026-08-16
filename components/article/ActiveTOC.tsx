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

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
            }
        );

        toc.forEach(item => {
            const id = item.url.replace("#", "");
            const element = document.getElementById(id);

            if (element)
                observer.observe(element);
        });

        return () => observer.disconnect();
    }, [toc]);

    return (
        <nav className="space-y-2">
            {toc.map(item => (
                <a
                    key={item.url}
                    href={item.url}
                    className={`block transition ${active === item.url
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-400"
                        }`}
                >
                    {item.title}
                </a>
            ))}
        </nav>
    );
}