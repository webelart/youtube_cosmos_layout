import { ReactNode } from 'react';

import styles from './style.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export const ButtonSVG2: React.FC<ButtonProps> = ({
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
            <span className={styles.buttonBorderLeft}>
                <svg viewBox="0 0 132.17 56.5">
                    <path className={styles.buttonLine} d="M132.17,55.43l-102.41,.07-8-4.5H1V6.5H132.6"/>
                    <path className={styles.buttonLine} d="M132.6,6.5h108.46s8.5-5.5,8.5-5.5h24.71V55.5l-142.08-.07"/>
                    <path className={styles.buttonArrow} d="M4,9.58s1.23,0,12.22,0L4,21.29s0-11.71,0-11.71Z"/>
                </svg>
            </span>
            <span className={styles.buttonBorderRight}>
                <svg viewBox="0 0 143.08 56.5">
                    <path className={styles.buttonLine} d="M0,55.43l-102.41,.07-8-4.5h-20.76V6.5H.42"/>
                    <path className={styles.buttonLine} d="M.42,6.5H108.88s8.5-5.5,8.5-5.5h24.71V55.5l-142.08-.07"/>
                    <path className={styles.buttonArrow} d="M138.42,52.21s-1.23,0-12.22,0l12.22-11.71s0,11.71,0,11.71Z"/>
                </svg>
            </span>
        </button>
    );
}