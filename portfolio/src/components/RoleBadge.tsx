import './RoleBadge.css'

interface RoleBadgeProps {
    title: string;
}

const RoleBadge = (props: RoleBadgeProps): JSX.Element => {
    if (!props.title || props.title.length == 0)
        return (<></>);

    return (
        <span className="role-badge">
            {props.title}
        </span>
    )
};

export default RoleBadge;