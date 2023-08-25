import { FC } from 'react';
import styles from './GamePage.module.css';
import { useMediaQuery } from "react-responsive";

const GamePage: FC = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <>
                game page
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

export default GamePage;