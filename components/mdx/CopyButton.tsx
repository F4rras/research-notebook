"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({
    code,
}: {
    code: string;
}) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(code);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <button
            onClick={handleCopy}
            className="
                flex
                items-center
                gap-2
                rounded-md
                border
                border-zinc-700
                px-3
                py-1
                text-xs
                hover:bg-zinc-800
                transition
            "
        >
            {copied ? (
                <>
                    <Check size={14} />
                    Copied
                </>
            ) : (
                <>
                    <Copy size={14} />
                    Copy
                </>
            )}
        </button>
    );
}