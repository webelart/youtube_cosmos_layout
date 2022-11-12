
import Link from 'next/link';

import styles from './style.module.scss';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
    return (
        <h1 className={styles.logo}>
            <Link href="/">Dusktopia</Link>
        </h1>
    );
}