import { FaGithub, FaItchIo, FaSteam } from "react-icons/fa6";
import './PlatformEmblemGroup.css'

const PlatformToEmblem: React.FC<{ platform: string }> = ({ platform }) => {
    const emblems: Record<string, JSX.Element> = {
        steam: <FaSteam />,
        itchio: <FaItchIo />,
        github: <FaGithub />
    };

    return <div className="emblem">{emblems[platform]}</div>
};

export const PlatformEmblemGroup: React.FC<{ platforms: string[]; }> = ({ platforms }) => {
    if (!platforms || platforms.length == 0)
        return (<></>);

    return (
            platforms.map(p => <div className="emblems" key={p}>{PlatformToEmblem({ platform: p })}</div>)
    )
};
