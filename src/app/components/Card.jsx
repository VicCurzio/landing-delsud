import Image from 'next/image';
import styles from '../styles/Card.module.css';

export default function Card({ imgSrc, altText, title }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImageWrapper}>
                <Image
                    src={imgSrc}
                    alt={altText}
                    width={300}
                    height={400}
                    className={styles.cardImage}
                    objectFit="cover"
                />
            </div>
            <h2 className={styles.cardTitle}>{title}</h2>
        </div>
    )
}