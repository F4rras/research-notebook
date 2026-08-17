export interface Project {
    id: string;
    title: string;
    category: string;
    status: "Active" | "Completed" | "Experimental";
    description: string;
    technologies: string[];
    href?: string;
}

export const projects: Project[] = [
    {
        id: "hymlet",
        title: "Hymlet",
        category: "IoT / Biomedical",
        status: "Experimental",
        description:
            "A wearable healthcare project that combines physiological indicators with Machine Learning to explore non-invasive blood glucose estimation.",
        technologies: [
            "ESP32",
            "MAX30102",
            "MLX90614",
            "MicroSD",
            "Arduino",
            "Python",
            "Machine Learning",
        ],
    },
];