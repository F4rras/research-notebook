import Link from "next/link";
import { notes } from "@/lib/velite";

export default function CategoriesPage() {
    const categories = Array.from(
        new Set(notes.map((note) => note.category))
    );

    return (
        <main className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="text-5xl font-bold mb-8">
                Categories
            </h1>

            <div className="grid gap-4">
                {categories.map((category) => {
                    const count = notes.filter(
                        (n) => n.category === category
                    ).length;

                    return (
                        <Link
                            key={category}
                            href={`/category/${category
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            className="
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                p-5
                                transition
                                hover:border-cyan-400
                            "
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-semibold">
                                    {category}
                                </span>

                                <span className="text-gray-400">
                                    {count} notes
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}