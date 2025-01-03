import buildMetadata from '../buildMetadata.json'
import './Footer.css'

const Footer: React.FC = () => {
    return (
        <footer>
            <p className='copyright'> © Ville Ruokonen </p>
            <p className='update-date'>Last updated on {new Date(buildMetadata.buildDate).toLocaleString()}</p>
        </footer>
    );
}

export default Footer;