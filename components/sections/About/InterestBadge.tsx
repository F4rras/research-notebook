interface InterestBadgeProps {
    label: string;
}

export default function InterestBadge({
    label,
}: InterestBadgeProps) {
    return (
        <div
            className="
        rounded-full
        border border-cyan-500/20
        bg-cyan-500/5
        px-4 py-2
        text-sm
        text-cyan-300
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:bg-cyan-500/10
      "
        >
            {label}
        </div>
    );
}