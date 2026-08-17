import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import { ResearchItem } from "@/types";

interface Props {
    item: ResearchItem;
}

export default function ResearchCard({ item }: Props) {
    return (
        <Link
            href={`/research/${item.slug}`}
            className="group block h-full"
        >
            <article
                className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/40
                    hover:bg-white/8
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
                    sm:p-6
                "
            >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">

                    {/* Status + Arrow */}
                    <div className="flex items-center justify-between gap-3">
                        <Badge>{item.status}</Badge>

                        <ArrowUpRight
                            size={20}
                            className="
                                text-zinc-500
                                transition-all
                                duration-300
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                                group-hover:text-cyan-400
                            "
                        />
                    </div>

                    {/* Image */}
                    <div className="relative mt-5 aspect-video overflow-hidden rounded-2xl border border-white/10">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>

                    {/* Category */}
                    <p className="mt-6 text-sm uppercase tracking-wider text-cyan-400">
                        {item.category}
                    </p>

                    {/* Title */}
                    <h3 className="mt-2 text-xl font-bold transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 line-clamp-4 text-sm leading-7 text-zinc-400 sm:text-base">
                        {item.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <Badge key={tag}>
                                {tag}
                            </Badge>
                        ))}
                    </div>

                </div>
            </article>
        </Link>
    );
}