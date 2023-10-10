import styles from './GameRightSide.module.css';
import GameHeader from '../../components/GameHeader/GameHeader';
import GameDescription from '../../components/GameDescription/GameDescription';
import GameAdditionalInformation from '../../components/GameAdditionalInformation/GameAdditionalInformation';
import GameCarousel from '../../components/GameCarousel/GameCarousel';
import GameSystemRequirements from '../../components/GameSystemRequirements/GameSystemRequirements';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';

const LinkToMainPage = () => (
    <div className={`${styles.cardContainer} ${styles.mb4}`}>
        <div className={`${styles.br} ${styles.mb4}`}></div>

        <NavLink to="/">
            <button className={`${styles.button} ${styles.secondary}`}>
                Follow to main page
            </button>
        </NavLink>
    </div>
)

const GameRightSide: FC = () => {
    return (
        <article>
            <GameHeader />
            <GameDescription />
            <GameAdditionalInformation />
            <GameCarousel />
            <GameSystemRequirements />
            <LinkToMainPage />
        </article>
    )
}

export default GameRightSide;