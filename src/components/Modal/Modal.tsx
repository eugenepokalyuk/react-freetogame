import React, { FC, useEffect, useCallback } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { ModalProps } from '../../services/types'
import { useMediaQuery } from 'react-responsive';

const Modal: FC<ModalProps> = ({ children, header, onClose }) => {
    const onCloseCallback = useCallback(onClose, [onClose]);

    const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.key === 'Escape') {
            onCloseCallback();
        }
    };

    useEffect(() => {
        const handleKeyDown: EventListener = (event: Event) => {
            const keyboardEvent = event as KeyboardEvent;
            if (keyboardEvent.key === 'Escape') {
                onCloseCallback();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onCloseCallback]);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                <div className={`${styles.modalContent} ${styles.pt5} ${styles.pr5} ${styles.pb5} ${styles.pl5} ${styles.textCenter}`} onKeyDown={onKeyDown}>
                    <div className={`${header ? styles.modalHeader : `${styles.modalNoHeader} ${styles.mt5} ${styles.mb5}`} ${styles.flex}`}>
                        {header && <span>{header}</span>}
                    </div>

                    {children}
                </div>
            </div>
            <ModalOverlay onClose={onClose} />
        </>,
        document.getElementById('root') as HTMLElement
    );
};

export default Modal;