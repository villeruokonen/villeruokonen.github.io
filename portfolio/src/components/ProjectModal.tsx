import { FaX } from 'react-icons/fa6';
import ProjectData from '../models/ProjectData';
import './ProjectModal.css'
import ModalLinkDisplay from './ModalLinkDisplay';
import { ModalImage } from './ModalImage';

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
                <p>{project.description}</p>
                <ModalLinkDisplay links={project.links} />
                <button className="modal-close" onClick={onClose}>
                    <FaX />
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;