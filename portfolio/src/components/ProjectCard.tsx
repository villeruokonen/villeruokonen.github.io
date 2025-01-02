import './ProjectCard.css'

interface ProjectCardProps {
    title: string,
    preview: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, preview }) => {
    return (
        <div className="container">
            <h3> {title || "Untitled entry"} </h3>
            <p> {preview || "Read more...."} </p>
        </div>
    );
}

export default ProjectCard;