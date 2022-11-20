import Link from 'next/link';
import cl from 'classnames';

import { Fragment } from 'react';

import styles from './style.module.scss';

interface ArtMenuProps {}

const links = [
    {
        id: 1,
        href: '/',
        title: 'Blighted Badlands',
        active: true,
    },
    {
        id: 2,
        href: '/',
        title: 'Glacial Frontier',
        active: false,
    },
    {
        id: 3,
        href: '/',
        title: 'Sundered Grove',
        active: false,
    },
    {
        id: 4,
        href: '/',
        title: 'Sky Citadel',
        active: false,
    }
];

export const ArtMenu: React.FC<ArtMenuProps> = () => {
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