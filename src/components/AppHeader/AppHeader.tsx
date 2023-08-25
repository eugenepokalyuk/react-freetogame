import { FC } from 'react';
import styles from './AppHeader.module.css';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGift, faClone, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/freetogame-logo.png'
import { NavLink } from 'react-router-dom';

const AppHeader: FC = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const link = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.nav_link} ${styles.nav_link_active}` : `${styles.nav_link}`;

    const DesktopView: FC = () => {
        return (
            <nav className={`${styles.container} ${styles.flex} ${styles.shadows}`}>
                <NavLink to='/' className={`${styles.flex} ${styles.link} ${styles.p02}`}>
                    <img src={logo} alt="Логотип компании FreeToGame" />
                </NavLink>

                <div className={`${styles.flex} ${styles.navbarCollapse}`}>
                    <ul className={`${styles.flex}`}>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/link-1' className={`${styles.link}`}>Free Games</NavLink>
                        </li>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/link-2' className={`${styles.link}`}>Browser Games</NavLink>
                        </li>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/giveaways' className={`${styles.link} ${styles.mr1}`}>
                                Special Offers
                            </NavLink>
                            <span className={`${styles.badge} ${styles.badgePill}`}>1</span>
                        </li>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/link-4' className={`${styles.link}`}>
                                Top 2023
                            </NavLink>
                        </li>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/link-5' className={`${styles.link} ${styles.p02}`}>
                                <FontAwesomeIcon icon={faEllipsisH} />
                            </NavLink>
                        </li>
                    </ul>

                    <ul className={`${styles.flex}`}>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/link-6' className={`${styles.link}`}>
                                <FontAwesomeIcon icon={faSearch} />
                            </NavLink>
                        </li>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/link-7' className={`${styles.link}`}>
                                <FontAwesomeIcon icon={faGift} />
                            </NavLink>
                        </li>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/library' className={`${styles.link}`}>
                                <FontAwesomeIcon icon={faClone} />
                            </NavLink>
                        </li>
                        <li className={`${styles.p02}`}>
                            <NavLink to='/login' className={`${styles.link}`}>
                                Log in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/register' className={`${link} ${styles.nav_button}`}>
                                Join Free
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </nav >
        )
    }

    return (
        <header className={`${styles.header}`}>
            {
                <DesktopView />
            }
        </header>
    );
};
export default AppHeader;