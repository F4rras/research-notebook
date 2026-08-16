import Link from "next/link";

interface ButtonProps {
    href?: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

export default function Button({
    href = "#",
    children,
    variant = "primary",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300";

    const styles = {
        primary:
            "bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-105",

        secondary:
            "border border-white/15 text-white hover:border-cyan-400 hover:bg-white/5",
    };

    return (
        <Link href={href} className={`${base} ${styles[variant]}`}>
            {children}
        </Link>
    );
}