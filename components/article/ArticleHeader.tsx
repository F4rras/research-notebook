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
        <header className="mb-10 sm:mb-12">

            {/* Back */}
            <Link
                href="/notebook"
                className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-cyan-400 sm:mb-8 sm:text-base"
            >
                <ArrowLeft size={18} />
                Back to Notebook
            </Link>

            {/* Title */}
            <h1 className="break-words text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:text-xl">
                {description}
            </p>

            {/* Metadata */}
            <div className="mt-4 mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 sm:mt-3 sm:mb-6 sm:text-sm">
                <span>{date}</span>

                <span>•</span>

                <span>{readTime}</span>
            </div>

            {/* Category */}
            <CategoryBadge category={category} />

            {/* Tags */}
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