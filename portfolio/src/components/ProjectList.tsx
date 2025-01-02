import './ProjectList.css'
import React from "react"
import ProjectCard from "./ProjectCard"
import ProjectData from "../models/ProjectData"
import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'
import Modal from './Modal'

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

    const previewLength: number = 16;
    const ellipsis: string = "...";

    if (loading) {
        return <h1>Loading...</h1>
    }

    //if (selectedProject)
    //{
    //    return <Modal project={selectedProject} onClose={closeModal} children />
    //}

    return (
        <div>
            <Modal project={selectedProject} onClose={closeModal} children />

            <div className="project-list">
                {projects.map((p) => (
                    <ProjectCard
                        title={p.title}
                        preview={p.description.slice(0, previewLength - ellipsis.length) + ellipsis}
                        onClick={() => openModal(p)}>
                    </ProjectCard>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;