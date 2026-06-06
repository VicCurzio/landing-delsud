import Image from 'next/image';

import styles from './ContentSection.module.css';
import CardsSection from '../Card/CardsSection/CardsSection';

export default function ContentSection() {
    return (
        <section className={styles.contentSectionContainer}>
            <p className={styles.textContent}>
                <span className={`${styles.primaryColor} ${styles.boldText}`}>En Delsud combinamos ciencia y tecnología
                </span> para potenciar el rendimiento de los cultivos.
                <span className={styles.boldText}> Nuestro equipo de investigadores</span> trabaja en el desarrollo de
                soluciones innovadoras<span className={`${styles.primaryColor} ${styles.boldText}`}> para una agricultura más sustentable.</span>
            </p>

            <Image
                src="/dna.png"
                alt="icona de ADN"
                width={30}
                height={40}
                className={styles.icon}
            />

            <h2 className={styles.sectionTitle}>
                Soluciones que <span className={`${styles.primaryColor} ${styles.WeightText}`}>impulsan</span> el agro
            </h2>

            <CardsSection />
        </section>
    )
}