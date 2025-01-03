import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Ville Ruokonen</h1>
            <nav>
                <ul className="socials-list">
                    <li className="socials-item">
                        <a href="https://www.youtube.com/@VilleRuokonen" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={30} />
                        </a>
                    </li>
                    <li className="socials-item">
                        <a href="https://www.github.com/villeruokonen" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="socials-item">
                        <a href="https://open.spotify.com/artist/0uF9xi8QRc91KFya6jUteO?si=5WFbBKD-RdiKvsleMUN2RA" target="_blank" rel="noopener noreferrer">
                            <FaSpotify size={30} />
                        </a>
                    </li>
                    <li className="socials-item">
                        <a href="https://www.linkedin.com/in/villeruo" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='socials-item'>
                    <a href="mailto:ruokonenv@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={30} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;