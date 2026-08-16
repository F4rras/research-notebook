"use client";

import Giscus from "@giscus/react";

export default function Comments() {
    return (
        <Giscus
            repo="F4rras/Discuss"
            repoId="R_kgDOTOyVOQ"
            category="General"
            categoryId="DIC_kwDOTOyVOc4DAlg7"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="dark"
            lang="en"
        />
    );
}