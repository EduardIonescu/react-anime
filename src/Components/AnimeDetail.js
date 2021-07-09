import React, { useEffect, useState } from 'react';
import './Components_styles/style.scss';


function AnimeDetail(match) {
    const [item, setItem] = useState(false);
    const [characters, setCharacters] = useState(false);
    useEffect(() => {
        const fetchItem = async () => {
            const fetchItem = await fetch(`
            https://api.jikan.moe/v3/anime/${match.match.params.id}`);
            const item = await fetchItem.json();
            console.dir(item);
            setItem(item);
        };
        const fetchCharacters = async () => {
            const fetchCharacters = await fetch(`
        https://api.jikan.moe/v3/anime/${match.match.params.id}/characters_staff`);
            const characters = await fetchCharacters.json();
            console.dir(characters);
            setCharacters(characters);  
        }
        fetchItem();
        fetchCharacters();
        // eslint-disable-next-line
    }, []);
    if (item) {
        const mystyle = { 
            width: '20%',
            minWidth: 100,
        }
        return (
            <div className='detail-container'>

                <div className='detail-title'>
                    <p className='title'>{item.title}</p>
                    <p className='sub-title'>{item.title_english}</p>
                </div>

                <div className='detail-sub-container'>
                    <aside className='col-3'>
                        <img src={item.image_url} alt="" />

                        <h5>
                            Alternative Titles
                        </h5>
                        <hr />
                        <p><strong>English: </strong>{item.title_english}</p>
                        <p><strong>Synonyms: </strong>{item.title}</p>
                        <p><strong>Japanese: </strong>{item.title_japanese}</p>

                        <h5>
                            Information
                        </h5>
                        <hr />
                        <p><strong>Type: </strong>{item.type}</p>
                        <p><strong>Episodes: </strong>{item.episodes}</p>
                        <p><strong>Status: </strong>{item.status}</p>
                        <p><strong>Premiered: </strong>{item.premiered}</p>
                        <p><strong>Producers: </strong>
                            {item.producers.map((producer, index) => {
                                return index < item.producers.length - 1 ?
                                    `${producer.name}, ` :
                                    `${producer.name}`;
                            })}</p>
                        <p><strong>Studios: </strong>
                            {item.studios.map((studio, index) => {
                                return index < item.studios.length - 1 ?
                                    `${studio.name}, ` :
                                    `${studio.name}`;
                            })}</p>
                        <p><strong>Source: </strong>{item.source}</p>
                        <p><strong>Genres: </strong>
                            {item.genres.map((genre, index) => {
                                return index < item.genres.length - 1 ?
                                    `${genre.name}, ` :
                                    `${genre.name}`;
                            })}</p>
                        <p><strong>Rating: </strong>{item.rating}</p>
                    </aside>
                    <section className='col-9'>
                        <div className='content-nav'>
                            <div style={mystyle} className='score-container'>
                                <div className='score'>score</div>
                                <div><strong>{item.score}</strong></div>
                                <div className='votes'>{item.scored_by} votes</div>
                            </div>
                            <div className='content-nav-right' style={mystyle}>
                                Ranked <strong>#{item.rank}</strong></div>
                            <div className='content-nav-right' style={mystyle}>
                                Popularity <strong>#{item.popularity}</strong></div>
                            <div className='content-nav-right' style={{ width: '40%' }}>
                                Members <strong>{item.members}</strong></div>
                        </div>
                        <div className='synopsis'>
                            <h5>
                                Synopsis
                            </h5>
                            <hr />
                            <p>{item.synopsis}</p>
                        </div>


                    </section>
                </div>

            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default AnimeDetail;