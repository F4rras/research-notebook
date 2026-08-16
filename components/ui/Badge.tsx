interface BadgeProps {
    children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
    return (
        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
            {children}
        </span>
    );
}