import { FC } from 'react';
import styles from './GameCarousel.module.css';
import { useAppSelector } from '../../services/hooks/hooks';
import SimpleCarousel from '../../components/Carousel';
import { IGameDetails } from '../../services/types';

const GameCarousel: FC = () => {
    const game = useAppSelector((store: { game: { game: IGameDetails } }) => store.game.game);

    return (
        <div className={`${styles.cardContainer} ${styles.mb4}`}>
            <h2 className={`${styles.h2}`}>{game.title} Screenshots</h2>

            <div className={`${styles.br} ${styles.mt4} ${styles.mb4}`}></div>

            <SimpleCarousel game={game} />
        </div>
    )
}

export default GameCarousel;