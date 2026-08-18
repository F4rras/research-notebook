export interface FocusItem {
    icon: string;
    title: string;
    description: string;
    slug: string;
}

export interface ResearchItem {
    id: number;
    title: string;
    status: string;
    category: string;
    description: string;
    slug: string;
    tags: string[];
    image?: string;
    color: string;
}

export interface NoteItem {
    id: number;
    title: string;
    category: string;
    description: string;
    date: string;
    readTime: string;
    slug: string;
}