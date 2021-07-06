import React from 'react';
import './Components_styles/style.scss';

export const Anime = ({ title, episodes = null, type = null, synopsis = null, image = null, score = null }) => {

    return (
        <div>
            <div className='anime-container'>
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
)}

export default Anime;