import ProjectData from "../models/ProjectData";
import './ProjectModal.css'

interface ProjectModal {
    project: ProjectData | null;
    onClose: () => void;
    children: React.ReactNode;
}

const ProjectModal: React.FC<ProjectModal> = ({ project, onClose }) => {
    if (!project)
        return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                
                <p>{project.description}</p>
                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;