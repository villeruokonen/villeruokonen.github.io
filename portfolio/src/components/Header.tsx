import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa';
import './Header.css';
import { FaItchIo } from 'react-icons/fa6';

const Header: React.FC = () => {
    const buildEmail = (): string => {
        const user = "ruokonen";
        const domain = "v@gmail";
        const dotcom = ".com";

        return user + domain + dotcom;
    }

    return (
        <header>
            <img className="logo" src="vr_logo.png"></img>
            <h1>Ville Ruokonen</h1>
            <nav>
                <ul className="socials-list">
                    <li className="socials-item">
                        <a href="https://www.youtube.com/@VilleRuokonen" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={30} />
                            <p>youtube</p>
                        </a>
                    </li>
                    <li className="socials-item">
                        <a href="https://www.github.com/villeruokonen" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                            <p>github</p>
                        </a>
                    </li>
                    <li className="socials-item">
                        <a href="https://villeruo.itch.io/" target="_blank" rel="noopener noreferrer">
                            <FaItchIo size={30} />
                            <p>itch.io</p>
                        </a>
                    </li>
                    <li className="socials-item">
                        <a href="https://open.spotify.com/artist/0uF9xi8QRc91KFya6jUteO?si=5WFbBKD-RdiKvsleMUN2RA" target="_blank" rel="noopener noreferrer">
                            <FaSpotify size={30} />
                            <p>spotify</p>
                        </a>
                    </li>
                    <li className="socials-item">
                        <a href="https://www.linkedin.com/in/villeruo" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                            <p>linkedin</p>
                        </a>
                    </li>
                    <li className='socials-item'>
                        <a href={`mailto:${buildEmail()}`} target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={30} />
                            <p>mail</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;