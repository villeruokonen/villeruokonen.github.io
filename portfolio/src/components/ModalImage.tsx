import './ModalImage.css'

interface ModalImageProps {
    paths: string[];
}

export const ModalImage: React.FC<ModalImageProps> = (props) => {
    if (!props.paths || props.paths.length === 0) {
        return <></>;
    }

    return (
        <div className="image-container">
            <img 
                src={props.paths[0]} 
                loading="lazy"
                decoding="async"
                alt="Project image"
            />
        </div>
    );
};
