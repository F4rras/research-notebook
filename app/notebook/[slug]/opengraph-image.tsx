import { ImageResponse } from "next/og";
import { notes } from "@/lib/velite";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const note = notes.find((n) => n.slug === slug);

    if (!note) {
        return new ImageResponse(<div>Not Found</div>);
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 80,
                    background: "#0f172a",
                    color: "white",
                }}
            >
                <div
                    style={{
                        fontSize: 26,
                        color: "#22d3ee",
                        marginBottom: 24,
                    }}
                >
                    Research Notebook
                </div>

                <div
                    style={{
                        fontSize: 64,
                        fontWeight: 700,
                        lineHeight: 1.1,
                    }}
                >
                    {note.title}
                </div>

                <div
                    style={{
                        marginTop: 30,
                        fontSize: 28,
                        color: "#94a3b8",
                    }}
                >
                    {note.description}
                </div>

                <div
                    style={{
                        marginTop: "auto",
                        display: "flex",
                        gap: 10,
                    }}
                >
                    {note.tags.map((tag) => (
                        <div
                            key={tag}
                            style={{
                                background: "#164e63",
                                color: "#67e8f9",
                                padding: "10px 18px",
                                borderRadius: 9999,
                                fontSize: 22,
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        ),
        size
    );
}