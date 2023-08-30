import axios, { AxiosRequestConfig } from 'axios';

const ApiUrlPathBackend = 'http://localhost:3002/api';
const ApiUrlPath = 'https://free-to-play-games-database.p.rapidapi.com/api';

export const fetchGameData = async (id: number, maxRetries = 3) => {
    let retries = 0;

    const endpoint = '/games';
    const endpoint1 = '/game';
    const queryParam = `?id=${id}`;
    if (id) {
        // запрос с бэкенда
        while (retries < maxRetries) {
            try {
                const response = await axios.get(`${ApiUrlPathBackend}${endpoint}${endpoint1}${queryParam}`);
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

                const response = await axios.get(`${ApiUrlPath}${endpoint1}${queryParam}`, option);
                return response.data;
            } catch (error) {
                console.error('Error fetching games data:', error);
                retries++;
            }
        }
        throw new Error(`Failed to fetch games data after ${maxRetries} retries.`);
    }
}

export const fetchGamesData = async (maxRetries = 3) => {
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

            const response = await axios.get(`${ApiUrlPath}${endpoint}`, option);
            return response.data;
        } catch (error) {
            console.error('Error fetching games data:', error);
            retries++;
        }
    }
    throw new Error(`Failed to fetch games data after ${maxRetries} retries.`);
}