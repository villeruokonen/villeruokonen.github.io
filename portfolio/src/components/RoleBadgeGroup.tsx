import RoleBadge from "./RoleBadge";

export const RoleBadgeGroup: React.FC<{ roles: string[] }> = ({ roles }) => {
    if (!roles || roles.length == 0)
        return (<></>);

    return (
        <div className='badges-roles'>
            {roles.map((tech) => (
                <RoleBadge title={tech} key={tech} />
            ))}
        </div>
    );
}