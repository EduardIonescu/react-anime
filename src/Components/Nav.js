import React, { useEffect, useState } from 'react';
import './Components_styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass, faDiceD20, faHome, faList }
    from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export function Nav() {

    const [animeItems, setAnimeItems] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchAnimeItems = async (randomPage = getRandomInt(330)) => {
            const data = await fetch(
                `https://api.jikan.moe//v3/top/anime/${randomPage}`
            );

            const animeItems = await data.json();
            setAnimeItems(animeItems);
        }
        fetchAnimeItems();
    }, []);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function getRandomAnime() {
        let random;
        if (animeItems && !animeItems.error) {
            try {
                random = (animeItems.top[Math.floor(Math.random() *
                    animeItems.top.length)].url);
                setCount(count + 1);
            }
            catch (e) {
            }
        }
        if (!random) {
            random = `https://myanimelist.net/anime/${getRandomInt(1000)}`;
        }
        window.open(random);
    }

    return (
        <div className='nav-container'>
            <nav className='nav-bar'>
                <Link to='/'><button type='button'
                ><FontAwesomeIcon icon={faDraftingCompass} />
                    Animesun</button></Link>
                <div className='nav-bar-middle'>
                    <h4>
                        <Link to='/' >
                            <FontAwesomeIcon icon={faHome} /> Home</Link>
                    </h4>
                    <h4>
                        <Link to='/list' >
                            <FontAwesomeIcon icon={faList} /> List</Link>
                    </h4>
                    <h4 onClick={(getRandomAnime)} >
                        <FontAwesomeIcon icon={faDiceD20} /> Random
                    </h4>
                </div>
            </nav>
        </div>
    )

}
export default Nav;