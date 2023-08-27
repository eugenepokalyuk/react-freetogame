import axios from 'axios';

const ApiUrlPath = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api';

// export const fetchGamesData = () => {
//     const endpoint = '/games';
//     let response = axios.get(`${ApiUrlPath}${endpoint}`);
//     return response;
// }
export const fetchGameData = (id: number) => {
    const endpoint = `/game?${id}`;
    let response = axios.get(`${ApiUrlPath}${endpoint}`);
    return response;
}

export const fetchGamesData = async (maxRetries = 3) => {
    const endpoint = '/games';
    let retries = 0;

    while (retries < maxRetries) {
        try {
            const response = await axios.get(`${ApiUrlPath}${endpoint}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching games data:', error);
            retries++;
        }
    }

    throw new Error(`Failed to fetch games data after ${maxRetries} retries.`);
}
