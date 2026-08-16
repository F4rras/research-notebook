import { ResearchItem } from "../types";

export const research: ResearchItem[] = [
    {
        id: 1,
        title: "HYMLET",
        status: "ONGOING",
        category: "IoT Healthcare System",
        description:
            "A smart health monitoring system using ESP32 and MAX30102 to track vital signs in real time.",
        tags: ["IoT", "Embedded", "Healthcare"],
        image: "/images/research/hymlet.jpg",
        color: "blue",
    },

    {
        id: 2,
        title: "Monte Carlo",
        status: "ONGOING",
        category: "Simulation & Modeling",
        description:
            "Applying Monte Carlo methods to solve complex problems in finance, physics, and actuarial science.",
        tags: ["Python", "Statistics", "Finance"],
        image: "/images/research/montecarlo.jpg",
        color: "cyan",
    },

    {
        id: 3,
        title: "Peace Detection",
        status: "RESEARCH",
        category: "AI & Computer Vision",
        description:
            "Building an AI model to detect violence and promote peace using computer vision.",
        tags: ["AI", "Computer Vision", "Deep Learning"],
        image: "/images/research/peace.jpg",
        color: "purple",
    },
];