import Link from 'next/link';
import cl from 'classnames';

import styles from './style.module.scss';

import { CardMore } from '../CardMore';

interface ArtMenuProps {}

const links = [
    {
        id: 1,
        href: '/',
        title: 'Blighted Badlands',
        image: '/images/blighted_badlands.jpg',
        active: true,
    },
    {
        id: 2,
        href: '/',
        title: 'Glacial Frontier',
        image: '/images/glacial_frontier.jpg',
        active: false,
    },
    {
        id: 3,
        href: '/',
        title: 'Sundered Grove',
        image: '/images/sundered_grove.jpg',
        active: false,
    },
    {
        id: 4,
        href: '/',
        title: 'Sky Citadel',
        image: '/images/sky_citadel.jpg',
        active: false,
    }
];

export const ArtMenu: React.FC<ArtMenuProps> = () => {
    return (
        <div className={styles.artMenu}>
            {links.map((link) => (
                <Link
                    href={link.href}
                    key={link.id}
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                    className={cl(styles.navigationLink, link.active && styles.navigationLinkActive)}
                >
                    {link.title}
                    <CardMore
                        src={link.image}
                        description={link.title}
                        onClick={() => {}}
                    />
                </Link>
            ))}
        </div>
    );
}