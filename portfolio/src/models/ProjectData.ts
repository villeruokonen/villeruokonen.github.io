import { NamedLink } from "./NamedLink";

export default interface ProjectData {
    id: number;
    title: string;
    date: string; // Format Mon-Year
    description: string;
    technologies: string[];
    roles: string[];
    links: NamedLink[];
}
