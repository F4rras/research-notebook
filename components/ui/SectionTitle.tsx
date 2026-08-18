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
        <div className="mb-12 max-w-3xl">

            {eyebrow && (
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                    {description}
                </p>
            )}

        </div>
    );
}