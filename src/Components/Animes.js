import React, { useState, useEffect } from 'react';

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
                            return <Anime title={anime.title}
                                episodes={anime.episodes}
                                type={anime.type}
                                score={anime.score}
                                synopsis={anime.synopsis}
                                image={anime.image_url}
                                url={anime.url}
                                key={i} />;
                        })}
                </div>)}
        </div>
    )
}


/*
 *   Creates each individual Anime rectangle thingie.
 */
const Anime = ({ title, episodes = null, type = null,
    image = null, score = null, url }) => {

    function openAnimeUrl() {
        window.open(url);
    }
    return (
        <div>
            <div className='anime-container' onClick={(openAnimeUrl)}>
                <div className='col-4'>
                    <img src={image} alt="" />
                </div>
                <div className='col-8'>
                    <div id='content'>
                        <h1>{title}</h1>
                        <h2>Episodes: {episodes}</h2>
                        <h2>{type}</h2>
                        <h2>Score: {score}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animes;