interface Props {
    title: string;
    description: string;
}

export default function FocusCard({
    title,
    description,
}: Props) {
    return (
        <article
            className="
                group relative h-full overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
                transition-all duration-500 ease-out
                hover:-translate-y-1.5
                hover:border-cyan-400/30
                hover:bg-white/[0.07]
                hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.2)]
                sm:p-7
            "
        >
            {/* Hover glow */}
            <div
                className="
                    pointer-events-none absolute -right-16 -top-16
                    h-32 w-32 rounded-full
                    bg-cyan-400/10 blur-3xl
                    opacity-0 transition-opacity duration-500
                    group-hover:opacity-100
                "
            />

            {/* Top accent */}
            <div
                className="
                    mb-5 h-px w-10
                    bg-gradient-to-r from-cyan-400 to-transparent
                    transition-all duration-500
                    group-hover:w-20
                "
            />

            <div className="relative">
                <h3
                    className="
                        text-lg font-semibold tracking-tight text-zinc-100
                        transition-colors duration-300
                        group-hover:text-cyan-300
                        sm:text-xl
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        mt-3 max-w-xl
                        text-sm leading-7 text-zinc-400
                        transition-colors duration-300
                        group-hover:text-zinc-300
                        sm:text-base
                    "
                >
                    {description}
                </p>
            </div>

            {/* Bottom indicator */}
            <div
                className="
                    mt-6 flex items-center gap-2
                    text-xs font-medium uppercase tracking-[0.2em]
                    text-zinc-600
                    transition-colors duration-300
                    group-hover:text-cyan-400/70
                "
            >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Current Focus
            </div>
        </article>
    );
}