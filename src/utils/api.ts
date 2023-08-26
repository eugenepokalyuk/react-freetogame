import axios from 'axios';

const ApiUrlPath = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api';

export const fetchGamesData = () => {
    const endpoint = '/games';
    let response = axios.get(`${ApiUrlPath}${endpoint}`);
    return response;
}
export const fetchGameData = (id: number) => {
    const endpoint = `/game?${id}`;
    let response = axios.get(`${ApiUrlPath}${endpoint}`);
    return response;
}