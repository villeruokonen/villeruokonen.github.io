import TechnologyBadge from "./TechnologyBadge";
import { getProjects } from "../services/projectService";
import { useEffect, useState } from "react";
import './SkillsetDisplay.css'

const SkillsetDisplay: React.FC = () => {
    const [skills, setSkills] = useState<string[]>([]);

    const loadSkills = async () => {
        const projects = await getProjects();

        if (projects) {
            const allTechnologies: string[] = projects.flatMap(project => project.technologies);

            const techCount: Record<string, number> = allTechnologies.reduce((acc, tech) => {
                acc[tech] = (acc[tech] || 0) + 1;
                return acc;
            }, {} as Record<string, number>);

            const sortedSkills: string[] = Object.keys(techCount).sort((a, b) => techCount[b] - techCount[a]);

            setSkills(sortedSkills);
        }
    }

    useEffect(() => {
        loadSkills();
    }, []);

    return (
        <div className="skill-container">
            <h2>Current skills</h2>
            <span className="skill-badges">
                {skills.map(s => (
                    <TechnologyBadge key={s} technologyName={s} />
                ))}
            </span>
        </div>
    );
}

export default SkillsetDisplay;