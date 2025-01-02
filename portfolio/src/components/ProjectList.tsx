import './ProjectList.css'
import React from "react"
import ProjectCard from "./ProjectCard"
import ProjectData from "../models/ProjectData"
import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
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

    return (
        <div className="project-list">
            {projects.map((p) => (
                <ProjectCard
                    title={p.title}
                    preview={p.description.slice(0, previewLength - ellipsis.length) + ellipsis}>
                </ProjectCard>
            ))}
        </div>
    );
}

export default ProjectList;