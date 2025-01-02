import ProjectData from "../models/ProjectData";
import './Modal.css'

interface ModalProps {
    project: ProjectData | null;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
    if (!project)
        return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <img src={project.imageUrl} alt={project.title}/>
                <p>{project.description}</p>
                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;