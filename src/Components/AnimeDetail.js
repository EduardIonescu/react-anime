import React, { useEffect, useState } from 'react';
import './Components_styles/style.scss';

function AnimeDetail(match) {

    const [item, setItem] = useState({})
    useEffect(() => {
        const fetchItem = async () => {
            const fetchItem = await fetch(`
            https://api.jikan.moe/v3/anime/${match.match.params.id}`);
            const item = await fetchItem.json();
            console.dir(item);
            setItem(item);
        };
        fetchItem();
    }, []);

    return (
        <div>
            
            <p>{item.score}</p>
        </div>
)} 

export default AnimeDetail;