import buildMetadata from '../buildMetadata.json'
import { getViews, } from '../services/counterService'
import './Footer.css'

import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
    const [views, setViews] = useState<string | null>(null);

    useEffect(() => {
        getViews()
            .then(v => v ? setViews(v.toString()) : null)
    }, []);

    return (
        <footer>
            <p className='copyright'> © Ville Ruokonen </p>
            <p className='update-date'>Last updated on {new Date(buildMetadata.buildDate).toLocaleString()}</p>
            {views !== null && <p className='views'>Viewed {views} times</p>}
        </footer>
    );
}

export default Footer;