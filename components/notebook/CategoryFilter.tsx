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
        <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`rounded-full px-4 py-2 transition ${selected === category
                        ? "bg-cyan-500 text-black"
                        : "bg-white/5"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}