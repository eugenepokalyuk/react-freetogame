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

    const DesktopView: FC = () => {
        return (
            <>
                <nav>
                    <div className={`${styles.container} ${styles.flex} ${styles.mb5}`}>
                        <div className={`${styles.width1n4}`}>
                            <ul className={`${styles.list} ${styles.listOfmb4}`}>
                                <li>
                                    <NavLink to="/">About Us</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/">API</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.width1n4}`}>
                            <ul className={`${styles.list} ${styles.listOfmb4}`}>
                                <li>
                                    <NavLink to="/">Help/FAQ</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/">Support & Bugs</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/">Sitemap</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.width1n4}`}>
                            <ul className={`${styles.list} ${styles.listOfmb4}`}>
                                <li>
                                    <NavLink to="/">Privacy Policy</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/">Cookies Policy</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/">Terms of Use</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.width1n4}`}>
                            <img src={LogoFooter} alt="" />
                        </div>
                    </div>

                    <div className={`${styles.container} ${styles.borderTop} ${styles.flex} ${styles.flexBetween} ${styles.pb4}`}>
                        <p className={`${styles.smallFontSize}`}>© 2023 Digiwalls Media, all rights reserved. All trademarks are property of their respective owners.</p>
                        <div>
                            <FontAwesomeIcon className={`${styles.mr3} ${styles.awesomeIcon}`} icon={faFacebookF} />
                            <FontAwesomeIcon className={`${styles.mr3} ${styles.awesomeIcon}`} icon={faTwitter} />
                            <FontAwesomeIcon className={`${styles.mr3} ${styles.awesomeIcon}`} icon={faRss} />
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