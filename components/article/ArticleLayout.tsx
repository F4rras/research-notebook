import ReadingProgress from "./ReadingProgress";

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ReadingProgress />

            <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-28">
                {children}
            </main>
        </>
    );
}