import ProjectData from '../models/ProjectData';
import RoleBadge from './RoleBadge';
import TechnologyBadge from './TechnologyBadge';
import './ProjectCard.css'

interface ProjectCardProps {
    project: ProjectData;
    onClick: () => void;
}

const TechnologyBadgeGroup: React.FC<{ technologies: string[] }> = ({ technologies }) => {
    if (!technologies || technologies.length == 0)
        return (<></>);

    return (
        <div className='badges-technologies'>
            {technologies.map((tech) => (
                <TechnologyBadge technologyName={tech} />
            ))}
        </div>
    );
}

const RoleBadgeGroup: React.FC<{ roles: string[] }> = ({ roles }) => {
    if (!roles || roles.length == 0)
        return (<></>);

    return (
        <div className='badges-roles'>
            {roles.map((tech) => (
                <RoleBadge title={tech} />
            ))}
        </div>
    );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    const previewLength: number = 100;
    const ellipsis: string = "...";
    let desc = project.description;
    
    if (desc.length > previewLength)
    {
        desc = project.description.slice(0, previewLength - ellipsis.length).trimEnd() + ellipsis;
    }

    return (
        <div className="container" onClick={onClick}>
            <h3> {project.title || "Untitled entry"} </h3>
            <p> {desc || "Read more...."} </p>

            <span className='badges'>
                <TechnologyBadgeGroup technologies={project.technologies} />
                <RoleBadgeGroup roles={project.roles}/>
            </span>
        </div>
    );
}

export default ProjectCard;