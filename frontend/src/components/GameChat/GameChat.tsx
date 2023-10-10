import { FC, useState } from "react";
import profileImage from '../../images/profile_image_large.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './GameChat.module.css';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const GameChat: FC = () => {
    const [message, setMessage] = useState('');
    const [, setMessageDelivered] = useState(false);

    const handleSendMessage = () => {
        alert('Your message will appear after verification')
        setMessageDelivered(true);
        setMessage('');
    };

    return (
        <div className={`${styles.flex} ${styles.chatH} ${styles.w100} ${styles.mb4}`}>
            <div className={styles.chatFlex}>
                <img src={profileImage} alt="user profile" />
            </div>

            <textarea
                className={styles.deepDark}
                placeholder='Write a review for Drakensang Online! Share your thoughts with our community.'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className={`${styles.button} ${styles.secondary}`} onClick={handleSendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} size="1x" />
            </button>
        </div>
    )
}

export default GameChat;