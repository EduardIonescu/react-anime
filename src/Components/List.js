import React from 'react';
import './Components_styles/style.scss';
import {GENRES, RATED} from './tools/lists';

export const myList = () => {
    let fList = ['apple', 'pear', 'bannaa', 'orange'];
    return (
        <div>
            <select name="Genre" id="Genre">
                <option select hidden>Genre</option>
                {GENRES.map((element) => {
                    return <option value={element[1]}> {element[0]}</option>
                })}
            </select>
            <select name="Year" id="Year">
                <option select hidden>Year</option>
                {fList.map((element) => {
                    return <option value={element}>{element}</option>
                })}
            </select>
            <select name="Score" id="Score">
                <option select hidden>Score</option>
                {fList.map((element) => {
                    return <option value={element}>{element}</option>
                })}
            </select>
            <select name="Rated" id="Rated">
                <option select hidden>Rated</option>
                {RATED.map((element) => {
                    return <option value={element[0]}>{element[1]}</option>
                })}
            </select>
        </div>
)} 

export default myList;