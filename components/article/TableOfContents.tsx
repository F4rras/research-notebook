interface TOCItem {
    depth: number;
    title: string;
    slug: string;
}

interface Props {
    toc: TOCItem[];
}

export default function TableOfContents({
    toc,
}: Props) {
    return (
        <aside className="sticky top-24">
            <h2 className="mb-4 font-semibold">
                Contents
            </h2>

            <nav className="space-y-2">
                {toc.map((item) => (
                    <a
                        key={item.slug}
                        href={`#${item.slug}`}
                        className={`
                            block
                            text-sm
                            text-gray-400
                            hover:text-cyan-400
                            ${item.depth === 2 ? "ml-4" : ""}
                        `}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>
        </aside>
    );
}