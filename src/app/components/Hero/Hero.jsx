import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <Image
                src="/image.png"
                alt="Maquinaria agrícola en el campo"
                fill
                className={styles.heroImage}
                style={{ objectFit: 'cover' }}
                sizes="100vw"
                priority={true}
            />
            <div className={styles.heroContent}>
                <h1>
                    Delsud: innovación que transforma el campo.
                    Desarrollamos soluciones biotecnológicas para una agricultura <span className={styles.primaryColor}>más eficiente y sostenible.</span>
                </h1>
            </div>
        </section>
    )
}