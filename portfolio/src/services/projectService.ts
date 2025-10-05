import { Projects } from '../models/Projects';
import { validateProjects } from '../utils/validateProjects';
import projectJson from '../projects.json';
import skillJson from '../skills.json'
import Skill from '../models/Skill';

export const getProjects = async (): Promise<Projects | null> => {
    try {
        const projects = projectJson as Projects;
        const valid = await validateProjects(projects);
        if (valid) {
            return [...projects].sort((a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime());
        }
        else {
            console.error('Invalid projects data');
            return null;
        }
    }
    catch (err) {
        console.error('Failed to fetch projects: ' + err);
        return null;
    }
}

export const getSkills = async() : Promise<Skill[]> => {
    try
    {
        const skills = skillJson as Skill[];
        return skills;
    }
    catch (err) {
        console.error('Failed to fetch projects: ' + err);
        return [];
    }
}
