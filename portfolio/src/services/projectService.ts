import ProjectData from '../models/ProjectData'
import projectData from '../projects.json'

export const getProjects = async (): Promise<ProjectData[]> => {
    const projects: ProjectData[] = projectData;
	return projects;
}
