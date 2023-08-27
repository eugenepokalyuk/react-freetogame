import React, { FC } from 'react';
import styles from './ModalOverlay.module.css';

import { ModalOverlayProps } from '../../services/types';
import { useMediaQuery } from 'react-responsive';

const ModalOverlay: FC<ModalOverlayProps> = ({ onClose }) => {
    const handleOverlayClick = () => {
        onClose();
    };

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return <div className={styles.overlay} onClick={handleOverlayClick}></div>;
};

export default ModalOverlay;