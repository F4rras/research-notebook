import ReadingProgress from "./ReadingProgress";

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ReadingProgress />

            <main className="mx-auto max-w-7xl px-8 py-16">
                {children}
            </main>
        </>
    );
}