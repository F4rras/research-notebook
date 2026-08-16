"use client";

import { useState } from "react";

type Props = {
    language?: string;
    children: React.ReactNode;
};

export default function CodeBlock({
    language,
    children,
}: Props) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        const text =
            typeof children === "string"
                ? children
                : "";

        await navigator.clipboard.writeText(text);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-2">
                <span className="text-xs uppercase text-gray-400">
                    {language}
                </span>

                <button
                    onClick={copy}
                    className="text-sm text-cyan-400"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>

            {children}
        </div>
    );
}