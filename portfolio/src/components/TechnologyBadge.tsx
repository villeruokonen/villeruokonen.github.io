import { getTechnologyColor, getTechnologyAccentColor } from '../utils/TechnologyColors';
import './TechnologyBadge.css'

interface TechnologyBadgeProps {
    technologyName: string;
}

const TechnologyBadge = (props: TechnologyBadgeProps): JSX.Element => {
    return (
        <span
            key={props.technologyName}
            className="technology-badge"
            style={{ backgroundColor: getTechnologyColor(props.technologyName), color: getTechnologyAccentColor(props.technologyName) }}
        >
            {props.technologyName}
        </span>
    )
};

export default TechnologyBadge;