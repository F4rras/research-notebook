import { defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { h } from "hastscript";

export default defineConfig({
    root: "content",
    mdx: {
        remarkPlugins: [
            remarkMath,
        ],

        rehypePlugins: [
            rehypeKatex,

            rehypeSlug,

            [
                rehypeAutolinkHeadings,
                {
                    behavior: "append",
                    properties: {
                        className: ["anchor"],
                    },
                    content: h(
                        "svg",
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 18,
                            height: 18,
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                        },
                        [
                            h("path", {
                                d: "M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 5",
                            }),
                            h("path", {
                                d: "M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L13 19",
                            }),
                        ]
                    ),
                },
            ],

            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    keepBackground: false,
                },
            ],
        ],
    },
    output: {
        data: ".velite",
    },

    collections: {
        notes: {
            name: "Note",

            pattern: "notes/**/*.mdx",

            schema: s
                .object({
                    title: s.string(),
                    description: s.string(),
                    slug: s.path(),
                    date: s.string(),
                    category: s.string(),
                    tags: s.array(s.string()),
                    content: s.mdx(),
                    metadata: s.metadata(),
                    readTime: s.string(),
                    toc: s.toc(),
                })
                .transform((data) => ({
                    ...data,
                    slug: data.slug.replace(/^notes\//, ""),
                }))
        },
    },
});