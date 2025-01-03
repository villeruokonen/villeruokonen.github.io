import { NamedLink } from "./NamedLink";

export default interface ProjectData {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    roles: string[];
    links: NamedLink[];
}
