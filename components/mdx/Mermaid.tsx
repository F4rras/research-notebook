"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
});

interface Props {
    chart: string;
}

export default function Mermaid({
    chart,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function render() {
            if (!ref.current) return;

            const id = "mermaid-" + Math.random();

            const { svg } =
                await mermaid.render(id, chart);

            ref.current.innerHTML = svg;
        }

        render();
    }, [chart]);

    return (
        <div
            ref={ref}
            className="my-8 flex justify-center"
        />
    );
}