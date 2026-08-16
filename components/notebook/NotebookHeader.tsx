import Container from "@/components/ui/Container";

export default function NotebookHeader() {
    return (
        <section className="border-b border-white/10 py-20">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-cyan-400 font-medium">
                        Research Notebook
                    </p>

                    <h1 className="mt-3 text-5xl font-bold">
                        Notes & Ideas
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        A collection of concepts, experiments,
                        questions, and discoveries from my learning
                        journey.
                    </p>
                </div>
            </Container>
        </section>
    );
}