
import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './style.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode,
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {children}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35.83 59"
                className={styles.buttonBorderLeft}
            >
                <path className={styles.buttonSvg2} d="M36,56.75h-2.19s-8-4.5-8-4.5H5.04V7.75h30.95"/>
                <path className={styles.buttonSvg1} d="M17.92,11.53l-9.5,9V11.53h9.5Z"/>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 39.92 59"
                className={styles.buttonBorderRight}
            >
                <path className={styles.buttonSvg2} d="M.42,7.76h1.63L10.55,2.26h24.71V56.76H.13"/>
                <path className={styles.buttonSvg1} d="M22.42,53.76l9.5-9v9h-9.5Z"/>
            </svg>
        </button>
    );
}