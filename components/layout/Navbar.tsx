"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import SearchDialog from "@/components/Search/SearchDialog";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Notebook", href: "/notebook" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="relative mx-auto mt-4 w-[94%] max-w-7xl">

                {/* Main Navbar */}
                <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 backdrop-blur-xl sm:px-6">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2.5"
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />

                        <span className="text-base font-semibold tracking-tight sm:text-lg">
                            Research Notebook
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
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
                    <div className="flex items-center gap-2">

                        <SearchDialog />

                        {/* GitHub Desktop */}
                        <a
                            href="https://github.com/F4rras"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden rounded-xl border border-white/10 p-2 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400 md:flex"
                        >
                            <FaGithub className="h-5 w-5" />
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="rounded-xl border border-white/10 p-2 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
                        >
                            {menuOpen ? (
                                <FiX className="h-5 w-5" />
                            ) : (
                                <FiMenu className="h-5 w-5" />
                            )}
                        </button>

                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute left-0 right-0 top-[4.5rem] rounded-2xl border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-xl md:hidden">
                        <nav className="flex flex-col gap-1">
                            {navItems.map((item) => {
                                const active = pathname === item.href;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`rounded-xl px-4 py-3 transition ${active
                                            ? "bg-cyan-400/10 text-cyan-400"
                                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}

                            {/* GitHub Mobile */}
                            <a
                                href="https://github.com/F4rras"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-white/5 hover:text-cyan-400"
                            >
                                <FaGithub className="h-5 w-5" />
                                GitHub
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}