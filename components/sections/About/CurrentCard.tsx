interface CurrentCardProps {
    icon: string;
    title: string;
    value: string;
}

export default function CurrentCard({
    icon,
    title,
    value,
}: CurrentCardProps) {
    return (
        <div
            className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        transition
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
      "
        >
            <div className="text-2xl">{icon}</div>

            <p className="mt-3 text-sm text-gray-400">
                {title}
            </p>

            <h3 className="mt-1 font-semibold text-white">
                {value}
            </h3>
        </div>
    );
}