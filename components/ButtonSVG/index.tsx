import { ReactNode } from 'react';

import styles from './style.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export const ButtonSVG: React.FC<ButtonProps> = ({
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
                viewBox="0 0 31.96 56.5"
                className={styles.buttonBorderLeft}
            >
                <path className={styles.buttonLine} d="M31.95,55.5h-2.19s-8-4.5-8-4.5H1V6.5H31.95"/>
                <path className={styles.buttonArrow} d="M4,9.58s1.23,0,12.22,0L4,21.29s0-11.71,0-11.71Z"/>
            </svg>
            <span className={styles.buttonBorderCenter}>
                <svg viewBox="0 0 161.2 56.5">
                    <path className={styles.buttonLine} d="M0,6.5H161.2l.11,49H0V6.5Z"/>
                </svg>
            </span>
            <svg
                viewBox="0 0 36.12 56.5"
                className={styles.buttonBorderRight}
            >
                <path className={styles.buttonLine} d="M0,6.5H1.92L10.42,1h24.71V55.5H0"/>
                <path className={styles.buttonArrow} d="M31.46,52.21s-1.23,0-12.22,0l12.22-11.71s0,11.71,0,11.71Z"/>
            </svg>
        </button>
    );
}