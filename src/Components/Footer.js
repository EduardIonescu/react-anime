import React from 'react';
import './Components_styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass, faHome, faList }
    from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div>
            <footer className='footer-container'>
                <div className='footer'>
                    <div className='col-6 footer-child'>
                        <h2>Quick Links</h2>
                        <div>
                            <h4>
                                <Link to='/' >
                                    <FontAwesomeIcon icon={faHome} /> Popular Anime</Link>
                            </h4>
                            <h4>
                                <Link to='/list' >
                                    <FontAwesomeIcon icon={faList} /> Anime List</Link>
                            </h4>
                        </div>
                    </div>

                    <div className='col-6 footer-child'>
                        <p>Follow us and stay up to date with all the currently airing shows .</p>
                        <h5>
                            <FontAwesomeIcon icon={faDraftingCompass} />
                            Animesun
                        </h5>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;