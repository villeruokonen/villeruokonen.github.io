import './ProjectList.css'
import React, { useCallback } from 'react'
import ProjectCard from './ProjectCard'
import ProjectData from '../models/ProjectData'
import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'
import ProjectModal from './ProjectModal'

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>();

    const openModal = useCallback((project: ProjectData) => setSelectedProject(project), []);
    const closeModal = useCallback(() => setSelectedProject(null), []);

    useEffect(() => {
        const loadProjects = async () => {
            const data = await getProjects();

            if (data) {
                setProjects(data);
                setError(null);
            }
            else {
                setError('Failed to load projects!');
            }

            setLoading(false);
        };

        loadProjects();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <ProjectModal project={selectedProject} onClose={closeModal} />
            <div className="project-list">
                {projects.map((p, index) => (
                    <ProjectCard
                        key={p.id}
                        project={p}
                        index={index}
                        onClick={() => openModal(p)} />

                ))}
            </div>
        </div>
    );
}

export default ProjectList;