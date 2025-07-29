// src/components/Footer.js
import Link from 'next/link';
// Importa Image si necesitas una imagen para el logo, pero por la descripción parece que es un div + h1
// import Image from 'next/image';
import styles from '../styles/Footer.module.css';

// Componentes para los íconos SVG (sin cambios)
const InstagramIcon = () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8972 5.25115C14.5195 5.25115 15.024 4.74666 15.024 4.12435C15.024 3.50204 14.5195 2.99756 13.8972 2.99756C13.2749 2.99756 12.7704 3.50204 12.7704 4.12435C12.7704 4.74666 13.2749 5.25115 13.8972 5.25115Z" fill="white" />
        <path d="M9.0145 4.49951C6.52546 4.49951 4.50732 6.51765 4.50732 9.00669C4.50732 11.4957 6.52546 13.5139 9.0145 13.5139C11.5035 13.5139 13.5217 11.4957 13.5217 9.00669C13.5217 6.51765 11.5035 4.49951 9.0145 4.49951ZM9.0145 11.8752C7.43018 11.8752 6.14598 10.591 6.14598 9.00669C6.14598 7.42236 7.43018 6.13817 9.0145 6.13817C10.5988 6.13817 11.883 7.42236 11.883 9.00669C11.883 10.591 10.5988 11.8752 9.0145 11.8752Z" fill="white" />
        <path d="M12.8458 -0.00732422H5.18286C2.32062 -0.00732422 0 2.31329 0 5.17554V12.8385C0 15.7008 2.32062 18.0214 5.18286 18.0214H12.8458C15.7081 18.0214 18.0287 15.7008 18.0287 12.8385V5.17554C18.0287 2.31329 15.7081 -0.00732422 12.8458 -0.00732422ZM16.2813 12.871C16.2813 14.75 14.7573 16.2739 12.8783 16.2739H5.15042C3.27139 16.2739 1.74745 14.75 1.74745 12.871V5.14309C1.74745 3.26407 3.27049 1.74012 5.15042 1.74012H12.8783C14.7573 1.74012 16.2813 3.26407 16.2813 5.14309V12.871Z" fill="white" />
    </svg>
);

const LinkedinIcon = () => (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.33748C0 1.79147 0.175519 1.34795 0.525717 1.00506C0.876759 0.662167 1.32571 0.490723 1.87337 0.490723C2.42102 0.490723 2.88851 0.665894 3.23533 1.01624C3.58215 1.36658 3.75598 1.80731 3.75598 2.33841C3.75598 2.86952 3.57877 3.32515 3.2252 3.68202C2.87162 4.03981 2.42018 4.21871 1.87337 4.21871C1.32655 4.21871 0.885203 4.03795 0.530785 3.67642C0.176368 3.3149 0 2.86859 0 2.33841V2.33748ZM0.240506 18.5194V6.2863H3.4657V18.5194H0.240506Z" fill="white" />
        <path d="M17.2777 18.5189H13.8363V11.5655C13.8363 9.55185 13.1463 8.54548 11.767 8.54548C11.1095 8.54548 10.5621 8.81416 10.1267 9.35152C9.69048 9.88888 9.4728 10.5743 9.4728 11.4089V18.5198H6.00977V6.05427H9.4728V8.03756H9.51525C10.3806 6.51283 11.6523 5.74951 13.3324 5.74951C15.9626 5.74951 17.2777 7.46222 17.2777 10.8886V18.5179V18.5189Z" fill="white" />
    </svg>
);

const TwitterXIcon = () => (
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2_1686)">
            <path d="M10.6607 7.0189L17.1679 0.256348H15.5942L9.95397 6.115L5.4 0.256348H0.0452611L6.99458 9.19162L0 16.4563H1.57369L7.69787 10.0955L12.6453 16.4563H18L10.6607 7.0189ZM2.35706 1.37116H4.81857L15.6847 15.3415H13.2232L2.35706 1.37116Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_2_1686">
                <rect width="18" height="16.2" fill="white" transform="translate(0 0.256348)" />
            </clipPath>
        </defs>
    </svg>
);


export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    {/* Estructura del logo similar a la del Navbar */}
                    <div className={styles['logo-rectangle']}></div>
                    <h1 className={styles.bussines}>LOGO EMPRESA</h1>
                </div>

                <div className={styles.menuSection}>
                    <h3>Menú</h3>
                    <ul>
                        <li><Link href="/">Item 1</Link></li>
                        <li><Link href="/">Item 2</Link></li>
                        <li><Link href="/">Item 3</Link></li>
                    </ul>
                </div>

                <div className={styles.contactSection}>
                    <h3>Contacto</h3>
                    <p className={styles.email}>
                        <span className={styles.emailIcon}>@</span>correo@empresa.com
                    </p>
                    <div className={styles.socialIcons}>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.socialIcon}><InstagramIcon /></div>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.socialIcon}><LinkedinIcon /></div>
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.socialIcon}><TwitterXIcon /></div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}