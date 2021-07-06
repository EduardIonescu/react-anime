import React, {useState} from 'react';
import Anime from './AnimeDetails';
import './Components_styles/style.scss';

export const Animes = ({ animes }) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='big-container'>
            <div className='search-bar-container'>
                <input 
                id='search-bar'
                type="text"
                placeholder='Search...'
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }} />
            </div>
            {// eslint-disable-next-line
            animes.filter((anime)=> {
                if (searchTerm === '') {
                    return anime;
                }else if (anime.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return anime;
                }
            }).map(function (anime, i) {
                return <Anime title={anime.title}
                    episodes={anime.episodes}
                    type={anime.type}
                    score={anime.score}
                    synopsis={anime.synopsis}
                    image={anime.image_url}
                    key={i} />;
            })}
        </div>
    )
}

export default Animes;