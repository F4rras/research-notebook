import Tag from "@/components/Tag";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";

interface Props {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
}

export default function ArticleHeader({
    title,
    description,
    category,
    date,
    readTime,
    tags,
}: Props) {
    return (
        <header className="mb-12">
            <Link
                href="/notebook"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8"
            >
                <ArrowLeft size={18} />
                Back to Notebook
            </Link>

            <h1 className="mt-3 text-5xl font-bold">
                {title}
            </h1>

            <p className="mt-4  text-xl text-gray-400">
                {description}
            </p>
            <div className="mt-3 mb-6 flex items-center gap-4 text-sm text-gray-500">
                <span>{date}</span>
                <span>•</span>
                <span>{readTime}</span>
            </div>
            <CategoryBadge category={category} />

            <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Tag
                        key={tag}
                        tag={tag}
                    />
                ))}
            </div>

        </header>
    );
}