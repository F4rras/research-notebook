interface Props {
    title: string;
    description: string;
}

export default function FocusCard({
    title,
    description,
}: Props) {
    return (
        <article className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/8 sm:p-6">

            <h3 className="text-lg font-semibold transition-colors group-hover:text-cyan-300 sm:text-xl">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                {description}
            </p>

        </article>
    );
}
