import React, { useState } from 'react';
import './Components_styles/style.scss';
import { GENRES, RATED, SCORE, STATUS } from './tools/lists';
import { Anime } from './Animes';

export const AnimeList = () => {
    const [animeItems, setAnimeItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [choose, setChoose] = useState(true);

    function searchFunction() {
        let selectedGenre = document.getElementById('Genre').value;
        let selectedStatus = document.getElementById('Status').value;
        let selectedScore = document.getElementById('Score').value;
        let selectedRated = document.getElementById('Rated').value;
        setLoading(true);
        setChoose(false);

        fetchAnimeItems(selectedGenre, selectedStatus, selectedScore,
            selectedRated);
    }

    const fetchAnimeItems = async (selectedGenre, selectedStatus, selectedScore
        , selectedRated) => {
        const data = await fetch(
            `https://api.jikan.moe/v3/search/anime?q=&genre=${selectedGenre}&score=${selectedScore}&status=${selectedStatus}&rated=${selectedRated}&type=tv&order_by=score&sort=asc`
        );
        console.log('asd');
        const animeItems = await data.json();

        try {
            const finalAnimeItems = await animeItems.results.filter(result => {
                return result.score <= parseInt(selectedScore) + 1;
            });
            console.dir(finalAnimeItems);
            setAnimeItems(finalAnimeItems);
        }
        catch (e) {
        }
        setLoading(false);
    }
    return (
        <div>
            <div>
                <div className='search-select'>
                    <select id="Genre">
                        <option select hidden value=''>Genre</option>
                        {GENRES.map((element) => {
                            return <option key={element[1]} value={element[1]}>
                                {element[0]}</option>
                        })}
                    </select>
                    <select name="Status" id="Status">
                        <option select hidden value=''>Status</option>
                        {STATUS.map((element) => {
                            return <option key={element[0]} value={element[0]}>
                                {element[1]}</option>
                        })}
                    </select>
                    <select name="Score" id="Score">
                        <option select hidden
                            value={Math.floor(Math.random() * 8 + 1)}>
                            Score</option>
                        {SCORE.map((element) => {
                            return <option key={element[0]} value={element[0]}>
                                {element[1]}</option>
                        })}
                    </select>
                    <select name="Rated" id="Rated">
                        <option select hidden value=''>Rated</option>
                        {RATED.map((element) => {
                            return <option key={element[1]} value={element[0]}>
                                {element[1]}</option>
                        })}
                    </select>
                </div>
            </div>
            <div id='list-button-div'>
                <button id='list-button' onClick={searchFunction}>Search</button>

            </div>
            {(loading || !animeItems) && choose ?
                (<div className='list-text'>Choose Categories</div>) :
                loading || !animeItems ?
                    (<div className='list-text'>Loading...</div>) :
                    animeItems.length < 1 || !animeItems ?
                        (<div>No results were found.</div>) :
                        (<div className='big-container'>
                            {
                                animeItems.map(function (anime, i) {
                                    return <Anime anime={anime}
                                        key={i} />;
                                })
                            }
                        </div>)
            }
        </div>
    )
}

export default AnimeList;