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
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/8 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">

                    <span className="font-medium text-cyan-400">
                        {cardItem.category}
                    </span>

                    <span>•</span>

                    <span>{cardItem.readTime}</span>

                    <span>•</span>

                    <span>{cardItem.date}</span>

                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-cyan-300">
                    {cardItem.title}
                </h3>

                <p className="mt-4 line-clamp-3 leading-7 text-zinc-400">
                    {cardItem.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-medium text-cyan-400 transition-all duration-300 group-hover:gap-3">

                    Read Note

                    <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                </div>

            </article>
        </Link>
    );
}