import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles['navbar-container']}>
            <div className={styles['navbar-logo']}>
                <h1>LOGO EMPRESA</h1>
            </div>
            <nav className={styles['navbar-nav']}>
                <ul className={styles['navbar-menu']}>
                    <li><Link href="#">Item 1</Link></li>
                    <li><Link href="#">Item 2</Link></li>
                    <li><Link href="#">Item 3</Link></li>
                </ul>
                <ul className={styles['navbar-lang-switcher']}>
                    <li><Link href="#">EN</Link></li>
                    <li><Link href="#">ES</Link></li>
                    <li><Link href="#">BR</Link></li>
                </ul>
            </nav>
        </header>
    );
}