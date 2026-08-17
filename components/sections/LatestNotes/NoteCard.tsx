import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NoteItem } from "@/types";

interface Props {
    cardItem: NoteItem;
}

export default function NoteCard({ cardItem }: Props) {
    return (
        <Link
            href={`/notebook/${cardItem.slug}`}
            className="group block"
        >
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/8 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:p-6">

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 sm:text-sm">

                    <span className="font-medium text-cyan-400">
                        {cardItem.category}
                    </span>

                    <span>•</span>

                    <span>{cardItem.readTime}</span>

                    <span>•</span>

                    <span>{cardItem.date}</span>

                </div>

                {/* Title */}
                <h3 className="mt-4 break-words text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-cyan-300 sm:mt-5 sm:text-2xl">
                    {cardItem.title}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400 sm:mt-4 sm:text-base">
                    {cardItem.description}
                </p>

                {/* Read More */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400 transition-all duration-300 group-hover:gap-3 sm:mt-8 sm:text-base">

                    Read Note

                    <ArrowRight
                        size={18}
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />

                </div>

            </article>
        </Link>
    );
}