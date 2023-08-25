import { FC } from 'react';
import styles from './NotFound.module.css';
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className='text text_type_main-large mb-5 mt-10'>Oops! 404 Error</h1>
                        <p className='text text_type_main-medium mb-4'>The page you requested does not exist</p>
                        <p className='text text_type_main-medium'>check the address or try <Link to='/' className={`${styles.link} ml-2`}>homepage</Link></p>
                    </div>
                </div>
            </div>
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

export default NotFound;