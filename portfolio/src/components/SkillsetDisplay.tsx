import Skill from "../models/Skill";
import { getSkills } from "../services/projectService";
import { useEffect, useState } from "react";
import TechnologyBadge from "./TechnologyBadge";
import './SkillsetDisplay.css'

const SkillsetDisplay: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    const loadSkills = async () => {
        const skills = await getSkills();

        setSkills(skills);
    }

    useEffect(() => {
        loadSkills();
    }, []);

    const categorized = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <div >
            <div className="skill-categories">
                {Object.entries(categorized).map(([category, skillsInCategory]) => (
                    <div key={category} className="skill-category">
                        <h4>{category}</h4>
                        <div className='badges-technologies'>
                            {skillsInCategory.map((tech) => (
                                <TechnologyBadge technologyName={tech.name} key={tech.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsetDisplay;