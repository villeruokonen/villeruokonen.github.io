import './ProjectCard.css'

interface ProjectCardProps {
    title: string,
    preview: string,
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, preview, onClick}) => {
    return (
        <div className="container" onClick={onClick}>
            <h3> {title || "Untitled entry"} </h3>
            <p> {preview || "Read more...."} </p>
        </div>
    );
}

export default ProjectCard;