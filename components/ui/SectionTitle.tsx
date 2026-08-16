interface Props {
    eyebrow?: string;
    title: string;
    description?: string;
}

export default function SectionTitle({
    eyebrow,
    title,
    description,
}: Props) {
    return (
        <div className="mb-14 max-w-3xl">
            {eyebrow && (
                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
                    {eyebrow}
                </span>
            )}

            <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-lg leading-8 text-zinc-400">
                    {description}
                </p>
            )}
        </div>
    );
}