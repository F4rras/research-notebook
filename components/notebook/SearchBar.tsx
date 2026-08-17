"use client";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({
    value,
    onChange,
}: Props) {
    return (
        <input
            type="text"
            placeholder="Search notes..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                w-full
                rounded-xl
                border border-white/10
                bg-white/5
                px-4 py-3
                text-sm
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                focus:border-cyan-400
                focus:ring-1
                focus:ring-cyan-400/30
                sm:px-5
                sm:text-base
            "
        />
    );
}