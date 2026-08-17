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
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-14">
            {eyebrow && (
                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 sm:text-sm">
                    {eyebrow}
                </span>
            )}

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-zinc-400 sm:mt-5 sm:text-lg sm:leading-8">
                    {description}
                </p>
            )}
        </div>
    );
}
