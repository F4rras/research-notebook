"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY > 400);
        }

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () =>
            window.removeEventListener("scroll", onScroll);
    }, []);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <button
            onClick={scrollTop}
            className={`
                fixed
                bottom-8
                right-8
                z-50
                rounded-full
                bg-cyan-500
                p-3
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-110
                ${visible
                    ? "opacity-100 translate-y-0"
                    : "pointer-events-none opacity-0 translate-y-4"
                }
            `}
        >
            <ArrowUp size={20} />
        </button>
    );
}