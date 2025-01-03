import { NamedLink } from "../models/NamedLink";

interface ModalLinkDisplayProps {
    links: NamedLink[];
}

function Link(link: NamedLink): JSX.Element {
    if (!link.url)
        return (<></>);

    return (
        <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
        </a>
    );
}

const ModalLinkDisplay: React.FC<ModalLinkDisplayProps> = ({ links }) => {
    return (
        <div className="link-display">
            {links.map(l => (
                <Link key={l.url} url={l.url} title={l.title} />
            ))}
        </div>
    );
}

export default ModalLinkDisplay;