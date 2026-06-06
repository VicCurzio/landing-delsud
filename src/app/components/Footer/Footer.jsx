import Link from 'next/link';
import styles from './Footer.module.css';
import SocialIcons from './SocialIcons';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <div className={styles['logo-rectangle']}></div>
                    <h1 className={styles.bussines}>Delsud</h1>
                </div>

                <div className={styles.menuSection}>
                    <h3>Menú</h3>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/">Servicios</Link></li>
                        <li><Link href="/">Contacto</Link></li>
                    </ul>
                </div>

                <div className={styles.contactSection}>
                    <h3>Contacto</h3>
                    <p className={styles.email}>
                        <span className={styles.emailIcon}>@</span>info@delsud.com
                    </p>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
}