import { FC } from 'react';
import styles from './HomePage.module.css';
import { useMediaQuery } from "react-responsive";

import GetStarted from '../../components/GetStarted/GetStarted';
import PersonalizedRecommendations from '../../components/PersonalizedRecommendations/PersonalizedRecommendations';
import MoreGames from '../../components/MoreGames/MoreGames';
import CommunityRecommendations from '../../components/CommunityRecommendations/CommunityRecommendations';
import MoreFun from '../../components/MoreFun/MoreFun';
import FindGame from '../../components/FindGame/FindGame';

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
                <FindGame />
            </>
        )
    }

    const MobileView: FC = () => {
        return (
            <>
                <GetStarted />
                <PersonalizedRecommendations />
                <MoreGames />
                <CommunityRecommendations />
                <MoreFun />
                <FindGame />
            </>
        )
    }

    return (
        <main className={`${styles.main}`}>
            {isDesktop
                ? <DesktopView />
                : <MobileView />}
        </main>
    );
};

export default HomePage;