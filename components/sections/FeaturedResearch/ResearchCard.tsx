import Badge from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import { ResearchItem } from "@/types";

interface Props {
    item: ResearchItem;
}

export default function ResearchCard({ item }: Props) {
    return (
        <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/8 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative z-10">

                <Badge>{item.status}</Badge>

                <div className="mt-6 flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">

                    <span className="text-5xl opacity-20">⚛</span>

                </div>

                <div className="mt-6 flex items-start justify-between gap-4">

                    <div>

                        <p className="text-sm uppercase tracking-wider text-cyan-400">
                            {item.category}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold transition-colors group-hover:text-cyan-300">
                            {item.title}
                        </h3>

                    </div>

                    <ArrowUpRight className="mt-1 text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />

                </div>

                <p className="mt-4 leading-7 text-zinc-400">
                    {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>

            </div>
        </article>
    );
}