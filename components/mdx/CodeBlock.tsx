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
        const match = cls.match(/language-([\w-]+)/);

        if (match) {
            language = match[1];
        }
    }

    if (language === "mermaid") {
        return <Mermaid chart={code} />;
    }

    return (
        <div className="my-8 w-full max-w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

            {/* Header */}
            <div className="flex min-w-0 items-center justify-between gap-3 border-b border-zinc-800 px-3 py-2 sm:px-4">

                <span className="min-w-0 truncate text-xs uppercase tracking-wider text-zinc-400">
                    {language}
                </span>

                <div className="shrink-0">
                    <CopyButton code={code} />
                </div>

            </div>

            {/* Code */}
            <div className="w-full max-w-full overflow-x-auto">
                <pre
                    {...props}
                    className="m-0 w-max min-w-full whitespace-pre p-3 text-xs leading-6 sm:p-4 sm:text-sm"
                >
                    {children}
                </pre>
            </div>

        </div>
    );
}