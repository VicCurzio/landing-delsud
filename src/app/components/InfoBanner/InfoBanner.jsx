import styles from './InfoBanner.module.css';

export default function InfoBanner() {
    return (
        <section className={styles.infoBannerContainer}>
            <div className={styles.content}>
                <p>
                    Sumate al futuro de la agricultura con <span className={styles.primaryColor}>soluciones biotecnológicas</span> diseñadas para <span className={styles.primaryColor}>potenciar tus cultivos.</span>
                </p>
                <button className={styles.button}>Contactanos</button>
            </div>
        </section>
    );
}