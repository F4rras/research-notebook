import { MetadataRoute } from "next";
import { notes } from "@/lib/velite";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL ??
        "http://localhost:3000";

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
        },

        ...notes.map((note) => ({
            url: `${siteUrl}/notebook/${note.slug}`,
            lastModified: new Date(note.date),
        })),
    ];
}