import { FC } from 'react';
import styles from './AppFooter.module.css';
import { useMediaQuery } from "react-responsive";
import { NavLink } from 'react-router-dom';
import LogoFooter from '../../images/logo-footer.png'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppFooter: FC = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const link = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.nav_link} ${styles.nav_link_active}` : `${styles.nav_link}`;

    const DesktopView: FC = () => {
        return (
            <>
                <nav>
                    <div className={`${styles.container} ${styles.flex} ${styles.mb5}`}>
                        <div className={`${styles.width1n4}`}>

                            <ul className={`${styles.list}`}>
                                <li className={styles.mb4}>
                                    <NavLink to="/about" className={`${styles.link}`}>About Us</NavLink>
                                </li>

                                <li className={styles.mb4}>
                                    <NavLink to="/api" className={`${styles.link}`}>API</NavLink>
                                </li>

                                <li className={styles.mb4}>
                                    <NavLink to="/contact" className={`${styles.link}`}>Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.width1n4}`}>
                            <ul className={`${styles.list}`}>
                                <li className={styles.mb4}>
                                    <NavLink to="/help" className={`${styles.link}`}>Help/FAQ</NavLink>
                                </li>

                                <li className={styles.mb4}>
                                    <NavLink to="/support" className={`${styles.link}`}>Support & Bugs</NavLink>
                                </li>

                                <li className={styles.mb4}>
                                    <NavLink to="/sitemap" className={`${styles.link}`}>Sitemap</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.width1n4}`}>
                            <ul className={`${styles.list}`}>
                                <li className={styles.mb4}>
                                    <NavLink to="/privacy-policy" className={`${styles.link}`}>Privacy Policy</NavLink>
                                </li>

                                <li className={styles.mb4}>
                                    <NavLink to="/cookies-policy" className={`${styles.link}`}>Cookies Policy</NavLink>
                                </li>

                                <li className={styles.mb4}>
                                    <NavLink to="/terms" className={`${styles.link}`}>Terms of Use</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.width1n4} ${styles.flexCenterMiddle}`}>
                            <NavLink to="/terms" className={`${styles.link}`}>
                                <img src={LogoFooter} className={styles.w90} alt="" />
                            </NavLink>
                        </div>
                    </div>

                    <div className={`${styles.container} ${styles.borderTop} ${styles.flex} ${styles.flexBetween} ${styles.pb4}`}>
                        <p className={`${styles.smallFontSize}`}>© 2023 Digiwalls Media, all rights reserved. All trademarks are property of their respective owners.</p>
                        <div>
                            <NavLink to="/facebook" className={`${styles.link}`}>
                                <FontAwesomeIcon className={`${styles.mr3} ${styles.awesomeIcon}`} icon={faFacebookF} />
                            </NavLink>

                            <NavLink to="/twitter" className={`${styles.link}`}>
                                <FontAwesomeIcon className={`${styles.mr3} ${styles.awesomeIcon}`} icon={faTwitter} />
                            </NavLink>

                            <NavLink to="/rss" className={`${styles.link}`}>
                                <FontAwesomeIcon className={`${styles.mr3} ${styles.awesomeIcon}`} icon={faRss} />
                            </NavLink>
                        </div>
                    </div>
                </nav >
            </>
        )
    }

    return (
        <footer className={`${styles.footer}`}>
            {
                <DesktopView />
            }
        </footer>
    );
};
export default AppFooter;