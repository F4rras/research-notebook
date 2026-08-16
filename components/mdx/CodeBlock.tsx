"use client";

import CopyButton from "./CopyButton";
import Mermaid from "./Mermaid";

interface Props extends React.HTMLAttributes<HTMLPreElement> { }

export default function CodeBlock({
    children,
    ...props
}: Props) {
    let code = "";
    let language = "text";

    const child = children as any;

    if (child?.props) {
        code = String(child.props.children ?? "");

        const cls = child.props.className ?? "";
        const match = cls.match(/language-(\w+)/);

        if (language === "mermaid") {
            return (
                <Mermaid chart={code} />
            );
        }
    }

    return (
        <div className="my-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
                <span className="text-xs uppercase tracking-wider text-zinc-400">
                    {language}
                </span>

                <CopyButton code={code} />
            </div>

            <pre
                {...props}
                className="overflow-x-auto p-4 text-sm"
            >
                {children}
            </pre>
        </div>
    );
}