import React from 'react';
import { FaX } from 'react-icons/fa6';
import ProjectData from '../models/ProjectData';
import './ProjectModal.css'
import ModalLinkDisplay from './ModalLinkDisplay';
import { ModalImage } from './ModalImage';
import RoleBadge from './RoleBadge';
import TechnologyBadge from './TechnologyBadge';

interface ProjectModal {
    project: ProjectData | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModal> = ({ project, onClose }) => {
    if (!project)
        return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <ModalImage paths={project.images}></ModalImage>
                <span className="badges-container">
                    <span className='badges'>
                        <span className='badges-technologies'>
                            {project.technologies.map(t => (
                                <TechnologyBadge technologyName={t} key={t} />
                            ))}
                        </span>
                        <span className='badges-roles'>
                            {project.roles.map(r => (
                                <RoleBadge title={r} key={r} />
                            ))}
                        </span>
                    </span>
                </span>
                <p>{project.description}</p>
                <ModalLinkDisplay links={project.links} />
                <button className="modal-close" onClick={onClose}>
                    <FaX />
                </button>
            </div>
        </div>
    );
};

export default React.memo(ProjectModal);