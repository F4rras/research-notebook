import CodeBlock from "./CodeBlock";
import Callout from "./Callout";

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

        return (
            <CodeBlock lang={language}>
                {code}
            </CodeBlock>
        );
    },
};