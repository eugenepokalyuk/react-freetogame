import { FC } from 'react';
import styles from './HomePage.module.css';
import GetStarted from '../../components/GetStarted/GetStarted';
import PersonalizedRecommendations from '../../components/PersonalizedRecommendations/PersonalizedRecommendations';
import MoreGames from '../../components/MoreGames/MoreGames';
import CommunityRecommendations from '../../components/CommunityRecommendations/CommunityRecommendations';
import MoreFun from '../../components/MoreFun/MoreFun';
import FindGame from '../../components/FindGame/FindGame';

const HomePage: FC = () => {
    return (
        <main className={`${styles.main}`}>
            <GetStarted />
            <PersonalizedRecommendations />
            <MoreGames />
            <CommunityRecommendations />
            <MoreFun />
            <FindGame />
        </main>
    );
};

export default HomePage;