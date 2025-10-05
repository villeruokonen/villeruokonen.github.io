import { LabeledURL } from './LabeledURL';

export default interface ProjectData {
    id: number;
    title: string;
    date: string;
    description: string;
    images: string[];
    technologies: string[];
    roles: string[];
    links: LabeledURL[];
    platforms: string[];
}
