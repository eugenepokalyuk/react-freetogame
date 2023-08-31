import axios, { AxiosRequestConfig } from 'axios';

const ApiUrlPathBackend = 'http://localhost:3002/api';
const ApiUrlPath = 'https://free-to-play-games-database.p.rapidapi.com/api';

export const fetchGameData = async (id: number) => {
    let attempts = 0;
    let response;

    const endpoint = '/games';
    const endpoint1 = '/game';
    const queryParam = `?id=${id}`;

    while (attempts < 3) {
        try {
            response = await axios.get(`${ApiUrlPathBackend}${endpoint}${endpoint1}${queryParam}`);

            if (response.status === 200) {
                return response.data;
            } else {
                attempts++;
            }
        } catch (error) {
            attempts++;
        }
    }

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

        response = await axios.get(`${ApiUrlPath}${endpoint1}${queryParam}`, option);

        if (response.status === 200) {
            return response;
        } else {
            throw new Error('Both sources failed');
        }
    } catch (error) {
        throw new Error('Both sources failed');
    }
}

export const fetchGamesData = async (maxRetries = 3) => {

    console.log('env', process.env.REACT_APP_NAME)

    const endpoint = '/games';
    const endpoint1 = '/all';
    let retries = 0;

    // запрос с бэкенда
    while (retries < maxRetries) {
        try {
            const response = await axios.get(`${ApiUrlPathBackend}${endpoint}${endpoint1}`);
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
                method: string,
                url: string,
                headers: {
                    'X-RapidAPI-Key'?: string
                    'X-RapidAPI-Host': string
                }
            }

            const option: iOption = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_NAME,
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                },
            };

            const response = await axios.request(option);
            return response.data;
        } catch (error) {
            console.error('Error fetching games data:', error);
            retries++;
        }
    }
    throw new Error(`Failed to fetch games data after ${maxRetries} retries.`);
}