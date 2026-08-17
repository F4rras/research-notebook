"use client";

interface Props {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({
    categories,
    selected,
    onSelect,
}: Props) {
    return (
        <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    onClick={() => onSelect(category)}
                    className={`
                        rounded-full
                        px-3 py-1.5
                        text-sm
                        transition
                        sm:px-4 sm:py-2
                        ${selected === category
                            ? "bg-cyan-500 text-black"
                            : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                        }
                    `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}