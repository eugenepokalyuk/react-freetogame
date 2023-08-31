import { FC } from 'react';
import styles from './InterfacePage.module.css';
import FindGame from '../../components/FindGame/FindGame';

const InterfacePage: FC = () => {
    return (
        <div className={`${styles.container} ${styles.mt}`}>
            <FindGame />
        </div>
    );
};

export default InterfacePage;