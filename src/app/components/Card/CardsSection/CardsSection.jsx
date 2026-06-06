import Card from '../Card';
import styles from './CardsSection.module.css';

const cardData = [
    {
        imgSrc: '/card-image-1.jpg',
        altText: 'Persona trabajando en la tierra',
        title: 'Innovación biotecnológica',
    },
    {
        imgSrc: '/card-image-2.jpg',
        altText: 'Científico trabajando en laboratorio',
        title: 'Investigación y desarrollo',
    },
    {
        imgSrc: '/card-image-3.jpg',
        altText: 'Campo de cultivo con maquinaria',
        title: 'Agricultura sustentable',
    },
];

export default function CardsSection() {
    return (
        <section className={styles.cardsGrid}>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    imgSrc={card.imgSrc}
                    altText={card.altText}
                    title={card.title}
                />
            ))}
        </section>
    )
}