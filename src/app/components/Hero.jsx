import styles from '../styles/Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <Image
                src="/image.png"
                alt="Maquinaria agrícola en el campo"
                layout="fill"
                className={styles.heroImage}
            />
            <div className={styles.heroContent}>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, <span className={styles.primaryColor}>ac aliquet odio mattis.</span>
                </h1>
            </div>
        </section>
    )
}