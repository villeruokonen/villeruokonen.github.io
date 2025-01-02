import './ProjectList.css'
import React from "react"
import ProjectCard from "./ProjectCard"
import ProjectData from "../models/ProjectData"
import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'
import ProjectModal from './ProjectModal'

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const openModal = (project: ProjectData) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    useEffect(() => {
        const loadProjects = async () => {
            const data = await getProjects();
            console.log(data);
            setProjects(data);
            setLoading(false);
        };

        loadProjects();
    }, []);

    

    if (loading) {
        return <h1>Loading...</h1>
    }

    //if (selectedProject)
    //{
    //    return <Modal project={selectedProject} onClose={closeModal} children />
    //}

    return (
        <div>
            <ProjectModal project={selectedProject} onClose={closeModal} children />

            <div className="project-list">
                {projects.map((p) => (
                    <ProjectCard
                        project={p}
                        onClick={() => openModal(p)}>
                    </ProjectCard>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;