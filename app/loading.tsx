import Container from "@/components/ui/Container";

export default function Loading() {
    return (
        <main className="min-h-[70vh] py-20">
            <Container>

                <div className="animate-pulse">

                    <div className="h-4 w-24 rounded bg-white/10" />

                    <div className="mt-5 h-12 w-3/4 rounded-xl bg-white/10" />

                    <div className="mt-4 h-5 w-1/2 rounded bg-white/5" />

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        <div className="h-72 rounded-3xl bg-white/5" />
                        <div className="h-72 rounded-3xl bg-white/5" />
                        <div className="h-72 rounded-3xl bg-white/5" />

                    </div>

                </div>

            </Container>
        </main>
    );
}