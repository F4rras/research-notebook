import type { MDXComponents } from "mdx/types";

import Callout from "@/components/mdx/Callout";
import CodeBlock from "@/components/mdx/CodeBlock";
import Image from "@/components/mdx/Image";

export function useMDXComponents(
    components: MDXComponents
): MDXComponents {
    return {
        Callout,
        img: Image,
        pre: CodeBlock,

        code: (props) => (
            <code
                {...props}
                className="rounded bg-zinc-800 px-1.5 py-0.5 text-cyan-300"
            />
        ),

        ...components,
    };
}