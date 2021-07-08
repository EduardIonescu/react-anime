import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Components_styles/style.scss';

/*
 * Creates the first page with the anime rectangles.
 */

export const Animes = () => {
    useEffect(() => {
        fetchAnimeItems();
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [animeItems, setAnimeItems] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchAnimeItems = async () => {
        const data = await fetch(
            'https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1'
        );

        const animeItems = await data.json();
        console.dir(animeItems);
        setAnimeItems(animeItems);
        setLoading(false);
    }

    return (
        <div>
            <div className='search-bar-container'>
                <input
                    id='search-bar'
                    type="text"
                    placeholder='Search...'
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }} />
            </div>
            {loading || !animeItems ?
                (<div>loading...</div>) :
                (<div className='big-container'>
                    
                    {/*
                        animeItems gets sliced to fit on page better, max result: 50
                    */
                    // eslint-disable-next-line
                        animeItems.results.slice(0, 48).filter((anime) => {
                            if (searchTerm === '') {
                                return anime;
                            } else if (anime.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                return anime;
                            }
                        }).map(function (anime, i) {
                            return <Anime anime={anime}
                                key={i} />;
                        })}
                </div>)}
        </div>
    )
}


/*
 *   Creates each individual Anime rectangle thingie.
 */
const Anime = ({ anime }) => {

    return (
        <div>
            <Link to={`/anime/${anime.mal_id}`} className='anime-container'>
                <div className='col-4'>
                    <img src={anime.image_url} alt="" />
                </div>
                <div className='col-8'>
                    <div id='content'>
                        <h1>{anime.title}</h1>
                        <h2>Episodes: {anime.episodes}</h2>
                        <h2>{anime.type}</h2>
                        <h2>Score: {anime.score}</h2>
                    </div>
                </div>
            </Link>
        </div> 
    )
}

export default Animes;