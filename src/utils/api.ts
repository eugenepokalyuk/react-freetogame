// https://www.freetogame.com/api/games
// https://www.freetogame.com/api/games?platform=pc
// https://www.freetogame.com/api/games?category=shooter
// https://www.freetogame.com/api/games?sort-by=alphabetical
// https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date
// https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc
// https://www.freetogame.com/api/game?id=452

const ApiUrlPath = 'https://www.freetogame.com/api';

const checkResponse = (res: Response) => {
    console.log('res', res);
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
const request = (endpoint: string, options: RequestInit) => {
    const url = `${ApiUrlPath}${endpoint}`;
    return fetch(url, options).then(checkResponse);
}
export const fetchGamesData = () => {
    const endpoint = '/games';
    return request(endpoint, { mode: 'no-cors' })
        .then((res) => {
            if (res.success) {
                //     dispatch({ type: FETCH_GAMES_SUCCESS, payload: res });
                return res.data;
            }
            return Promise.reject(res);
        });

    // fetchGamesData()
    //   .then(res => {
    //     console.log('res', res);
    //     dispatch({ type: FETCH_GAMES_SUCCESS, payload: res });
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //     dispatch({ type: FETCH_GAMES_FAILURE });
    //   });
}