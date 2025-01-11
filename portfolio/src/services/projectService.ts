import { Projects } from '../models/Projects';
import { validateProjects } from '../utils/validateProjects';
import projectJson from '../projects.json';

export const getProjects = async (): Promise<Projects | null> => {
    try {
        const projects = projectJson as Projects;
        if (validateProjects(projects)) {
            return projects as Projects;
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
