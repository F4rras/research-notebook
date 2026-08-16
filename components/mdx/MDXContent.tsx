import * as runtime from "react/jsx-runtime";
import Callout from "./Callout";
import CodeBlock from "./CodeBlock";

const sharedComponents = {
    Callout,
    pre: CodeBlock,
};

function useMDXComponent(code: string) {
    const fn = new Function(code);

    return fn(runtime).default;
}

interface Props {
    code: string;
    components?: Record<string, React.ComponentType>;
}

export default function MDXContent({
    code,
    components,
}: Props) {
    const Component = useMDXComponent(code);

    return (
        <Component
            components={{
                ...sharedComponents,
                ...components,
            }}
        />
    );
}