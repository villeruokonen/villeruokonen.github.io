import { LabeledURL } from "./LabeledURL";

export default interface ProjectData {
    id: number;
    title: string;
    date: string; // Format Mon-Year
    description: string;
    image: string | null;
    technologies: string[];
    roles: string[];
    links: LabeledURL[];
    platforms: string[];
}
