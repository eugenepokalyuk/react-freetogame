interface gamesState {
    ingredients: IGame[];
    loading: boolean;
    error: null | unknown;
}

interface gameState {
    ingredients: IGame;
    loading: boolean;
    error: null | unknown;
}

interface selectedGameState {
    selectedGame: IGame | null;
};

export interface IGame {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}

export interface IGameDetails {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
    minimum_system_requirements: IMSR;
    screenshots: IScreenshot[];
}

export interface IScreenshot {
    id: number, image: string
}

export interface IMSR {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
}

export interface ModalProps {
    children: React.ReactNode;
    header?: string;
    onClose: () => void;
}

export interface ModalOverlayProps {
    onClose: () => void;
}

export interface IOption {
    value: string, label: string
}

export interface RootState {
    games: gamesState | any;
    game: gameState | any;
    selectedGame: selectedGameState | any;
}