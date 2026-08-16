import Link from "next/link";

export default function CategoryBadge({
    category,
}: {
    category: string;
}) {
    return (
        <Link
            href={`/category/${category
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            className="
                inline-flex
                rounded-lg
                bg-purple-500/10
                px-3
                py-1
                text-sm
                font-medium
                text-purple-400
                hover:bg-purple-500/20
                transition
            "
        >
            {category}
        </Link>
    );
}