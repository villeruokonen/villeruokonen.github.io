import TechnologyBadge from "./TechnologyBadge";
import { getProjects } from "../services/projectService";
import { useEffect, useState } from "react";
import './SkillsetDisplay.css'

const SkillsetDisplay: React.FC = () => {
    const [skills, setSkills] = useState<string[]>([]);

    const loadSkills = async () => {
        const projects = await getProjects();

        if (projects) {
            const skills = projects
                .flatMap(project => project.technologies)
                .filter((tech, index, self) => self.indexOf(tech) === index)
                .sort((a, b) => a.localeCompare(b))

            setSkills(skills);
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
                    <TechnologyBadge technologyName={s} />
                ))}
            </span>
        </div>
    );
}

export default SkillsetDisplay;