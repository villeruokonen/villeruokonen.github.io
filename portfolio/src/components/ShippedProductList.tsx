import React, { useCallback } from 'react'
import ProjectData from '../models/ProjectData'
import { useEffect, useState } from 'react'
import { getShippedProducts } from '../services/projectService'
import ProjectModal from './ProjectModal'
import ShippedProductCard from './ShippedProductCard'
import './ShippedProductList.css'

const ShippedProductList: React.FC = () => {
    const [products, setProducts] = useState<ProjectData[]>([]);
    const [selectedProjuct, setSelectedProduct] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>();

    const openModal = useCallback((project: ProjectData) => setSelectedProduct(project), []);
    const closeModal = useCallback(() => setSelectedProduct(null), []);

    useEffect(() => {
        const loadProjects = async () => {
            const data = await getShippedProducts();

            if (data) {
                setProducts(data);
                setError(null);
            }
            else {
                setError('Failed to load projects!');
            }

            setLoading(false);
        };

        loadProjects();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    if (products.length == 0) {
        return <></>
    }

    return (
        <>
            <h2>Shipped Products</h2>
            <ProjectModal project={selectedProjuct} onClose={closeModal} />
            <div className="shipped-products-container">
                {products.map((p, index) => (
                    <ShippedProductCard
                        key={p.id}
                        project={p}
                        index={index}
                        onClick={() => openModal(p)} />

                ))}
            </div>
        </>
    );
}

export default ShippedProductList;