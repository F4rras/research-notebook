export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    category: string;
    status: string;
    tags: string[];
    link?: string;
    image?: string;

    overview: string;
    technologies: string[];
    highlights: string[];
}

export const projects: Project[] = [

    {
        id: 1,
        slug: "hymlet",
        title: "HYMLET",
        description:
            "A wearable IoT healthcare system combining physiological indicators and machine learning to estimate blood glucose levels.",
        category: "IoT & AI",
        status: "ONGOING",
        tags: [
            "ESP32",
            "IoT",
            "Machine Learning",
            "Healthcare",
        ],

        overview:
            "HYMLET is an ongoing research and engineering project exploring whether multiple physiological indicators collected through a wearable IoT device can be combined with machine learning to estimate blood glucose levels.",

        technologies: [
            "ESP32",
            "MAX30102",
            "MLX90614",
            "MicroSD",
            "Python",
            "Machine Learning",
        ],

        highlights: [
            "Wearable physiological monitoring",
            "Heart rate and SpO₂ measurement",
            "Body temperature measurement",
            "Multi-sensor data collection",
            "Machine learning pipeline",
        ],
    },
];
