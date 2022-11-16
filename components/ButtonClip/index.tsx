
import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './style.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export const ButtonClip: React.FC<ButtonProps> = ({
    onClick,
    children,
}) => {
    return (
        <button
            className={styles.buttonClip}
            onClick={onClick}
        >
            <span className={styles.buttonClipText}>{children}</span>
            <span className={styles.buttonClipArt} />
        </button>
    );
}