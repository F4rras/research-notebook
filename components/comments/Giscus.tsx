"use client";

import Giscus from "@giscus/react";

export default function Comments() {
    return (
        <div className="min-w-0 max-w-full overflow-hidden">
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
        </div>
    );
}