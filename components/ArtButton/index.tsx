import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './style.module.scss';

interface ArtButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export const ArtButton: React.FC<ArtButtonProps> = ({
    onClick,
    children,
}) => {
    return (
        <button
            className={styles.artButton}
            onClick={onClick}
        >
            <span className={styles.artButtonText}>{children}</span>
        </button>
    );
}
