import ProjectData from '../models/ProjectData';
import { PlatformEmblemGroup } from './PlatformEmblemGroup';
import { RoleBadgeGroup } from './RoleBadgeGroup';
import { TechnologyBadgeGroup } from './TechnologyBadgeGroup';
import './ProjectCard.css'

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
                <TechnologyBadgeGroup technologies={project.technologies} />
                <RoleBadgeGroup roles={project.roles} />
            </span>
        </div>
    );
}

export default ProjectCard;