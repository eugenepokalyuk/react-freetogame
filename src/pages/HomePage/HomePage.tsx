import { FC } from 'react';
import styles from './HomePage.module.css';
import { useMediaQuery } from "react-responsive";

import GetStarted from '../../components/GetStarted/GetStarted';
import PersonalizedRecommendations from '../../components/PersonalizedRecommendations/PersonalizedRecommendations';
import MoreGames from '../../components/MoreGames/MoreGames';
import CommunityRecommendations from '../../components/CommunityRecommendations/CommunityRecommendations';
import MoreFun from '../../components/MoreFun/MoreFun';

const HomePage: FC = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <>
                <GetStarted />
                <PersonalizedRecommendations />
                <MoreGames />
                <CommunityRecommendations />
                <MoreFun />
            </>
        )
    }

    return (
        <main className={`${styles.main}`}>
            {
                <DesktopView />
            }
        </main>
    );
};

export default HomePage;