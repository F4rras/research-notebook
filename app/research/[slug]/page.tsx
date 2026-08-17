import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

import { research } from "@/data/research";
import { researchDetails } from "@/data/researchDetails";

export default async function ResearchDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const item = research.find(
        (researchItem) => researchItem.slug === slug
    );

    const detail = researchDetails.find(
        (researchItem) => researchItem.slug === slug
    );

    if (!item || !detail) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-28">
            <Container>

                {/* Back */}
                <Link
                    href="/research"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-zinc-400
                        transition
                        hover:text-cyan-400
                    "
                >
                    <ArrowLeft size={18} />
                    Back to Research
                </Link>

                {/* Header */}
                <header className="mt-8 max-w-4xl">

                    <div className="flex flex-wrap items-center gap-3">
                        <Badge>
                            {item.status}
                        </Badge>

                        <span className="text-sm uppercase tracking-wider text-cyan-400">
                            {item.category}
                        </span>
                    </div>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {item.title}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
                        {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <Badge key={tag}>
                                {tag}
                            </Badge>
                        ))}
                    </div>

                </header>

                {/* Content */}
                <div className="mt-16 grid gap-12 lg:grid-cols-12">

                    {/* Main Content */}
                    <article className="min-w-0 lg:col-span-8">

                        {/* Research Question */}
                        <section>
                            <h2 className="text-3xl font-bold">
                                Research Question
                            </h2>

                            <p className="mt-5 leading-8 text-zinc-400">
                                {detail.researchQuestion}
                            </p>
                        </section>

                        {/* Background */}
                        <section className="mt-14">
                            <h2 className="text-3xl font-bold">
                                Background
                            </h2>

                            <p className="mt-5 leading-8 text-zinc-400">
                                {detail.background}
                            </p>
                        </section>

                        {/* Hypothesis */}
                        <section className="mt-14">
                            <h2 className="text-3xl font-bold">
                                Hypothesis
                            </h2>

                            <p className="mt-5 leading-8 text-zinc-400">
                                {detail.hypothesis}
                            </p>
                        </section>

                        {/* Methodology */}
                        <section className="mt-14">
                            <h2 className="text-3xl font-bold">
                                Methodology
                            </h2>

                            <div className="mt-6 space-y-4">
                                {detail.methodology.map(
                                    (step, index) => (
                                        <div
                                            key={step}
                                            className="
                                                flex
                                                gap-4
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-white/5
                                                p-4
                                            "
                                        >
                                            <span
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-cyan-500/10
                                                    text-sm
                                                    font-semibold
                                                    text-cyan-400
                                                "
                                            >
                                                {index + 1}
                                            </span>

                                            <p className="leading-7 text-zinc-400">
                                                {step}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </section>

                        {/* Results */}
                        <section className="mt-14">
                            <h2 className="text-3xl font-bold">
                                Results
                            </h2>

                            <p className="mt-5 leading-8 text-zinc-400">
                                {detail.results}
                            </p>
                        </section>

                        {/* Discussion */}
                        <section className="mt-14">
                            <h2 className="text-3xl font-bold">
                                Discussion
                            </h2>

                            <p className="mt-5 leading-8 text-zinc-400">
                                {detail.discussion}
                            </p>
                        </section>

                        {/* Conclusion */}
                        <section className="mt-14">
                            <h2 className="text-3xl font-bold">
                                Conclusion
                            </h2>

                            <p className="mt-5 leading-8 text-zinc-400">
                                {detail.conclusion}
                            </p>
                        </section>

                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28">

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-6
                                "
                            >

                                <p className="text-sm text-zinc-500">
                                    Research Status
                                </p>

                                <p className="mt-2 font-semibold text-cyan-400">
                                    {item.status}
                                </p>

                                <div className="mt-6 border-t border-white/10 pt-6">
                                    <p className="text-sm text-zinc-500">
                                        Category
                                    </p>

                                    <p className="mt-2 text-zinc-300">
                                        {item.category}
                                    </p>
                                </div>

                                <div className="mt-6 border-t border-white/10 pt-6">
                                    <p className="mb-3 text-sm text-zinc-500">
                                        Topics
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <Badge key={tag}>
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </aside>

                </div>

            </Container>
        </main>
    );
}

export async function generateStaticParams() {
    return research.map((item) => ({
        slug: item.slug,
    }));
}