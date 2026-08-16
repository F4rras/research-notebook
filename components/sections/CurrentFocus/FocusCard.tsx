interface Props {
    title: string;
    description: string;
}

export default function FocusCard({
    title,
    description,
}: Props) {
    return (
        <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/8">


            <h3 className="text-xl font-semibold transition-colors group-hover:text-cyan-300">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
                {description}
            </p>

        </article>
    );
}
