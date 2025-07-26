'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './Navbar.module.css';

export default function Navbar() {
    const [activeLang, setActiveLang] = useState('');

    const handleLangClick = (lang) => {
        setActiveLang(lang);
    };

    return (
        <header className={styles['navbar-container']}>
            <div className={styles['navbar-logo']}>
                <div className={styles['logo-rectangle']}></div>
                <h1>LOGO EMPRESA</h1>
            </div>
            <nav className={styles['navbar-nav']}>
                <ul className={styles['navbar-menu']}>
                    <li><Link href="#">Item 1</Link></li>
                    <li><Link href="#">Item 2</Link></li>
                    <li><Link href="#">Item 3</Link></li>
                </ul>
                <ul className={styles['navbar-lang-switcher']}>
                    <li>
                        <Link
                            href="#"
                            onClick={() => handleLangClick('EN')}
                            className={`${activeLang === 'EN' ? styles['current-lang-active'] : ''}`}
                        >
                            EN
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            onClick={() => handleLangClick('ES')}
                            className={`${activeLang === 'ES' ? styles['current-lang-active'] : ''}`}
                        >
                            ES
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            onClick={() => handleLangClick('BR')}
                            className={`${activeLang === 'BR' ? styles['current-lang-active'] : ''}`}
                        >
                            BR
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}