import './ModalImage.css'

interface ModalImageProps {
    url: string | null;
}

export const ModalImage: React.FC<ModalImageProps> = (props) => {
    if (!props.url || props.url.length === 0) {
        return <></>;
    }

    return (
        <div className="image-container">
            <img src={props.url} />
        </div>
    );
};
