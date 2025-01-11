import { Projects } from '../models/Projects';
import { validateProjects } from '../utils/validateProjects';

export const getProjects = async (): Promise<Projects | null> => {
    try {
        const projectResponse = await fetch('../src/projects.json')
        const projects = await projectResponse.json();
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
