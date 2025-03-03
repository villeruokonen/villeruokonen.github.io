import TechnologyBadge from "./TechnologyBadge";

export const TechnologyBadgeGroup: React.FC<{ technologies: string[] }> = ({ technologies }) => {
    if (!technologies || technologies.length == 0)
        return (<></>);

    return (
        <div className='badges-technologies'>
            {technologies.map((tech) => (
                <TechnologyBadge technologyName={tech} key={tech} />
            ))}
        </div>
    );
}