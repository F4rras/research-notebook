import { notes } from "@/lib/velite";
import { notFound } from "next/navigation";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleLayout from "@/components/article/ArticleLayout";
import MDXContent from "@/components/mdx/MDXContent";
import ActiveTOC from "@/components/article/ActiveTOC";
import { getRelatedNotes } from "@/lib/related";
import RelatedNotes from "@/components/article/RelatedNotes";
import ReadingProgress from "@/components/article/ReadingProgress";
import ScrollToTop from "@/components/article/ScrollToTop";
import Comments from "@/components/comments/Giscus";

export default async function NotePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const note = notes.find(
        (n) => n.slug === slug
    );

    if (!note) {
        notFound();
    }


    const related = getRelatedNotes(note.slug);

    return (
        <>
            <ReadingProgress />
            <ScrollToTop />
            <ArticleLayout>
                <ArticleHeader
                    title={note.title}
                    description={note.description}
                    category={note.category}
                    date={note.date}
                    readTime={`${note.metadata.readingTime} min read`}
                    tags={note.tags}

                />

                <div className="grid grid-cols-12 gap-12">
                    <article className="col-span-8 lg:col-span-9 prose prose-invert max-w-none prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-a:transition prose-a:duration-300 prose-a:ease-in-out prose-a:hover:text-cyan-300 prose-a:focus:text-cyan-300 prose-a:active:text-cyan-300 prose-a:visited:text-cyan-400 prose-a:visited:hover:text-cyan-300 prose-a:visited:focus:text-cyan-300 prose-a:visited:active:text-cyan-300 prose-code:text-cyan-400 prose-code:font-mono prose-code:text-sm prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-[''] prose-code:after:content-['']">
                        <MDXContent code={note.content} />
                    </article>
                    <ActiveTOC toc={note.toc} />
                </div>
                <RelatedNotes notes={related} />
                <div className="mt-20">
                    <Comments />
                </div>
            </ArticleLayout>
        </>
    );
}

export async function generateStaticParams() {
    return notes.map((note) => ({
        slug: note.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const note = notes.find(
        (n) => n.slug === slug
    );

    if (!note) {
        notFound();
    }

    const siteUrl = "https://research-notebook.vercel.app";

    images: [
        `${siteUrl}/notebook/${note.slug}/opengraph-image`,
    ]

    return {
        title: note.title,
        description: note.description,
        alternates: {
            canonical: `${siteUrl}/notebook/${note.slug}`,
        },
        openGraph: {
            title: note.title,
            description: note.description,
            type: "article",
            publishedTime: new Date(note.date).toISOString(),
            url: `https://research-notebook.vercel.app/notebook/${note.slug}`,

            openGraph: {
                title: note.title,
                description: note.description,
                type: "article",
                publishedTime: new Date(note.date).toISOString(),
                url: `https://research-notebook.vercel.app/notebook/${note.slug}`,
                images: [
                    `/notebook/${note.slug}/opengraph-image`,
                ],
            },

            twitter: {
                card: "summary_large_image",
                title: note.title,
                description: note.description,
                images: [
                    `/notebook/${note.slug}/opengraph-image`,
                ],
            },
        },
    };
}