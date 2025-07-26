import styles from '../styles/ContentSection.module.css';
import Image from 'next/image';

export default function ContentSection() {
    return (
        <section className={styles.contentSectionContainer}>
            <div className={styles.textContent}>
                <p>
                    <span className={styles.primaryColor}>Lorem ipsum dolor sit amet consectetur</span> aliquet imperdiet
                    penatibus donec velit. A
                    faucibus eget et vulputate dapibus congue enim massa.. Sem semper
                    odio volutpat<span className={styles.primaryColor}> risus platea nulla diam id dis..</span>
                </p>
            </div>

            <div className={styles.iconWrapper}>
                <Image
                    src="/dna.png"
                    alt="icona de ADN"
                    width={60}
                    height={60}
                    className={styles.icon}
                />
            </div>

            <h2 className={styles.sectionTitle}>
                Esto <span className={styles.primaryColor}>titula</span> una sección
            </h2>
        </section>
    )
}