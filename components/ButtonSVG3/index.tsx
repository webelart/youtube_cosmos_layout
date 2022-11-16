import { ReactNode } from 'react';

import styles from './style.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export const ButtonSVG3: React.FC<ButtonProps> = ({
    onClick,
    children,
}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            <span className={styles.buttonText}>
                {children}
            </span>
            <svg
                className={styles.buttonSVG}
                viewBox="0 0 143.08 56.5"
            >
                <path className={styles.buttonLine} d="M29.19,55.5l-8-4.5H.42V6.5H108.88s8.5-5.5,8.5-5.5h24.71V55.5H29.19Z"/>
                <path className={styles.buttonArrow} d="M4.15,10.01s1.23,0,12.22,0L4.15,21.71s0-11.71,0-11.71Z"/>
                <path className={styles.buttonArrow} d="M138.42,52.21s-1.23,0-12.22,0l12.22-11.71s0,11.71,0,11.71Z"/>
            </svg>
        </button>
    );
}