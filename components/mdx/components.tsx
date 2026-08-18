import CodeBlock from "./CodeBlock";
import Callout from "./Callout";
import { useState } from "react";

export const mdxComponents = {
    Callout,

    pre: ({ children }: any) => {
        const language =
            children.props.className?.replace(
                "language-",
                ""
            ) ?? "text";

        const code =
            children.props.children;
        const [mobileOpen, setMobileOpen] = useState(false);
        return (
            <CodeBlock lang={language}>
                {code}
            </CodeBlock>
        );
    },
};