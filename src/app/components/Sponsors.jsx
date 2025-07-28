import styles from '../styles/Sponsors.module.css';
import DelsudLogo from './DelsudLogo';
import SponsorLogoItem from './SponsorLogoItem';

export default function Sponsors() {
    const sponsorLogos = [
        { id: 1, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 2, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 3, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 4, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 5, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 6, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 7, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' }
    ];

    return (
        <section className={styles.sponsorsSectionContainer}>
            <h2 className={styles.sponsorsTitle}>
                <span className={styles.primaryColor}>Sponsors</span> del proyecto
            </h2>
            <div className={styles.logosWrapper}>
                {sponsorLogos.map((logo) => (
                    <SponsorLogoItem
                        key={logo.id}
                        svgComponent={logo.svgComponent}
                        alt={logo.alt}
                    />
                ))}
            </div>
        </section>
    );
}