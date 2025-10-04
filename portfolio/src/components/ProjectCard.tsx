import ProjectData from '../models/ProjectData';
import { PlatformEmblemGroup } from './PlatformEmblemGroup';
import './ProjectCard.css'
import RoleBadge from './RoleBadge';
import TechnologyBadge from './TechnologyBadge';

interface ProjectCardProps {
    project: ProjectData;
    index: number;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
    const previewLength: number = 100;
    const ellipsis: string = "...";
    let desc = project.description;

    if (desc.length > previewLength) {
        desc = project.description.slice(0, previewLength - ellipsis.length).trimEnd() + ellipsis;
    }

    return (
        <div key={index} className="card" onClick={onClick} style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className='title'>
                {project.title || "Untitled entry"}
                <PlatformEmblemGroup platforms={project.platforms} />
                <span className='date'> {new Date(project.date).getFullYear()} </span>
            </h3>

            <p className='description'> {desc || "Read more...."} </p>

            <span className='badges'>
                <span className='badges-technologies'>
                    {project.technologies.map(t => (
                        <TechnologyBadge technologyName={t} key={t}/>
                    ))}
                </span>
                <span className='badges-roles'>
                    {project.roles.map(r => (
                        <RoleBadge title={r} key={r} />
                    ))}
                </span>
            </span>
        </div>
    );
}

export default ProjectCard;