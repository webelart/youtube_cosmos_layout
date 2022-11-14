import Link from 'next/link';
import cl from 'classnames';

import { Fragment } from 'react';

import styles from './style.module.scss';

interface NavigationProps {}

const links = [
    {
        id: 1,
        title: 'Home',
        href: '/',
        active: true,
    },
    {
        id: 2,
        title: 'Factions',
        href: '/',
        active: false,
    },
    {
        id: 3,
        title: 'Roadmap',
        href: '/',
        active: false,
    }
];

export const Navigation: React.FC<NavigationProps> = () => {
    return (
        <nav className={styles.navigation}>
            {links.map((link, id) => (
                <Fragment key={link.id}>
                    <Link
                        href={link.href}
                        className={cl(styles.navigationLink, link.active && styles.navigationLinkActive)}
                    >
                        {link.title}
                    </Link>
                    {id < links.length - 1 && (
                        <span className={styles.navigationStar} />
                    )}
                </Fragment>
            ))}
        </nav>
    );
}