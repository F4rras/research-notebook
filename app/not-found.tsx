import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center py-20">
            <Container>
                <div className="mx-auto max-w-2xl text-center">

                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                        404
                    </p>

                    <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                        Page not found
                    </h1>

                    <p className="mx-auto mt-5 max-w-lg leading-7 text-zinc-400">
                        The page you're looking for doesn't exist or may have
                        been moved.
                    </p>

                    <Link
                        href="/"
                        className="
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border border-white/10
                            bg-white/5
                            px-5 py-3
                            text-sm font-medium
                            transition
                            hover:border-cyan-400/40
                            hover:bg-cyan-400/10
                            hover:text-cyan-400
                        "
                    >
                        <ArrowLeft size={17} />
                        Back to home
                    </Link>

                </div>
            </Container>
        </main>
    );
}