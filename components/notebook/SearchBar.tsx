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
                px-5
                py-3
                text-white
                outline-none
                focus:border-cyan-400
            "
        />
    );
}