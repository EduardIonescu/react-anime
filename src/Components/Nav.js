import React from 'react';
import './Components_styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass, faDiceD20, faHome, faList } 
from '@fortawesome/free-solid-svg-icons';

export const Nav = ({harambe}) => {
    const refreshPage = () =>{
        window.location.reload();
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function getRandomAnime() {
        let random = (harambe[getRandomInt(harambe.length)].url);
        window.open(random);
    }

    return (
        <div className='nav-container'>
            <nav className='nav-bar'>
                <button type='button' onClick={refreshPage}
                ><FontAwesomeIcon icon={faDraftingCompass} /> SiteName</button>
                <div className='nav-bar-middle'>
                    <h4 onClick={refreshPage} >
                        <FontAwesomeIcon icon={faHome} /> Home</h4>
                    <h4 >
                        <FontAwesomeIcon icon={faList} /> List</h4>
                    <h4 
                    onClick={(getRandomAnime)} 
                    >
                        <FontAwesomeIcon icon={faDiceD20} /> Random</h4>
                </div>
            </nav>
        </div>
    )

}
export default Nav;