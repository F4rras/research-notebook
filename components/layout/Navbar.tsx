"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import SearchDialog from "@/components/Search/SearchDialog";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Notebook", href: "/notebook" },
    { name: "Research", href: "/research" },
    { name: "About", href: "/about" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto mt-5 flex h-16 w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 backdrop-blur-xl">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />

                    <span className="text-lg font-semibold tracking-tight">
                        Research Notebook
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`transition ${active
                                    ? "text-cyan-400"
                                    : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-3">

                    <SearchDialog />

                    <a
                        href="https://github.com/F4rras"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden rounded-xl border border-white/10 p-2 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400 md:flex"
                    >
                        <FaGithub className="h-5 w-5" />
                    </a>

                </div>

            </div>
        </header>
    );
}