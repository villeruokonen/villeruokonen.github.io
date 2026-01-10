import React from 'react';
import ProjectData from '../models/ProjectData';
import { PlatformEmblemGroup } from './PlatformEmblemGroup';
import './ShippedProductCard.css'

interface ProductCardProps {
    project: ProjectData;
    index: number;
    onClick: () => void;
}

const Thumbnail: React.FC<{ src: string | null }> = ({ src }) => (
    src ? (
        <div className="thumbnail-cutoff">
            <img 
                className="thumbnail" 
                src={src} 
                alt="Project thumbnail"
                loading="lazy"
                decoding="async"
            />
        </div>
    ) : null
);

const ShippedProductCard: React.FC<ProductCardProps> = ({ project, index, onClick }) => {
    return (
        <div key={index} className="product-card" onClick={onClick} style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className='product-title'>
                {project.title || 'Untitled entry'}
            </h3>
            <div className="product-platforms">
                <PlatformEmblemGroup platforms={project.platforms} />
            </div>
            
            {project.images?.[0] && <Thumbnail src={project.images[0]} />}
        </div>
    );
}

export default React.memo(ShippedProductCard);