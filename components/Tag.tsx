import Link from "next/link";

export default function Tag({
    tag,
}: {
    tag: string;
}) {
    return (
        <Link
            href={`/tags/${tag}`}
            className="
                rounded-full
                bg-cyan-500/10
                px-3
                py-1
                text-sm
                text-cyan-400
                transition
                hover:bg-cyan-500/20
            "
        >
            #{tag}
        </Link>
    );
}