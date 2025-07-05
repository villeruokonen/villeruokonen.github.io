import { Projects } from '../models/Projects';
import { validateProjects } from '../utils/validateProjects';
import projectJson from '../projects.json';

export const getProjects = async (): Promise<Projects | null> => {
    try {
        const projects = projectJson as Projects;
        const valid = await validateProjects(projects);
        if (valid) {
            return (projects as Projects).sort((a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime())
        }
        else {
            console.error("Invalid projects data");
            return null;
        }
    }
    catch (err) {
        console.error("Failed to fetch projects: " + err);
        return null;
    }
}
