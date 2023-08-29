import axios, { AxiosRequestConfig } from 'axios';

const ApiUrlPathTest = 'http://localhost:3002/api/games/all';
const ApiUrlPathHeroku = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api';
const ApiUrlPath = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

export const fetchGameData = (id: number) => {
    const endpoint = `/game?${id}`;
    let response = axios.get(`${ApiUrlPath}${endpoint}`);
    return response;
}

export const fetchGamesData = async (maxRetries = 3) => {

    const endpoint = '/games';
    let retries = 0;

    // запрос с бэкенда
    while (retries < maxRetries) {
        try {
            const response = await axios.get(`${ApiUrlPathTest}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching games data:', error);
            retries++;
        }
    }

    retries = 0;

    // запрос с API FreeToGame
    while (retries < maxRetries) {
        try {
            interface iOption extends AxiosRequestConfig {
                headers: {
                    'X-RapidAPI-Key'?: string
                    'X-RapidAPI-Host': string
                }
            }

            const option: iOption = {
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_NAME,
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                },
            };

            const response = await axios.get(`${ApiUrlPath}`, option);
            return response.data;
        } catch (error) {
            console.error('Error fetching games data:', error);
            retries++;
        }
    }



    throw new Error(`Failed to fetch games data after ${maxRetries} retries.`);
}