export interface FrontMatter {
    title: string;
    date: string;
    excerpt: string;
    cover_images: string;
}

export interface SubjectInfo {
    slug: string;
    frontMatter: FrontMatter;
}

export interface MaterialProps {
    subjects: SubjectInfo[];
}
