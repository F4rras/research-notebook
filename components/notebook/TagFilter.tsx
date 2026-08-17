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
                    type="button"
                    onClick={() => onSelect(tag)}
                    className={`
                        rounded-full
                        border
                        px-3 py-1.5
                        text-xs
                        transition
                        sm:text-sm
                        ${selected === tag
                            ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                            : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                        }
                    `}
                >
                    #{tag}
                </button>
            ))}
        </div>
    );
}