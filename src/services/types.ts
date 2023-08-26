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

export interface RootState {
    games: gamesState | any;
    selectedGame: selectedGameState | any;
}

export interface ModalProps {
    children: React.ReactNode;
    header?: string;
    onClose: () => void;
}

export interface ModalOverlayProps {
    onClose: () => void;
}

interface gamesState {
    ingredients: IGame[];
    loading: boolean;
    error: any;
}

interface selectedGameState {
    selectedGame: IGame | null;
};