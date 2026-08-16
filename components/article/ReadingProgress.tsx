"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function updateProgress() {
            const scrollTop = window.scrollY;

            const docHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percent =
                docHeight > 0
                    ? (scrollTop / docHeight) * 100
                    : 0;

            setProgress(percent);
        }

        updateProgress();

        window.addEventListener("scroll", updateProgress);

        return () =>
            window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div
            className="
                fixed
                left-0
                top-0
                z-50
                h-1
                bg-cyan-400
                transition-all
            "
            style={{
                width: `${progress}%`,
            }}
        />
    );
}