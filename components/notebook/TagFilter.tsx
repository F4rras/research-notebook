"use client";

interface Props {
    tags: string[];
    selected: string;
    onSelect: (tag: string) => void;
}

export default function TagFilter({
    tags,
    selected,
    onSelect,
}: Props) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => onSelect(tag)}
                    className={`rounded-full border px-3 py-1 text-sm ${selected === tag
                        ? "border-cyan-400 text-cyan-400"
                        : "border-white/20"
                        }`}
                >
                    #{tag}
                </button>
            ))}
        </div>
    );
}