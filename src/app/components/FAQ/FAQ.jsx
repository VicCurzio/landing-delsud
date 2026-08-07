'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';
import AccordionItem from './Accordion/AccordionItem';

export default function FAQ() {
    const [openIndices, setOpenIndices] = useState([]);

    const faqs = [
        {
            id: 1,
            question: '¿Qué tipo de soluciones ofrece Delsud?',
            answer: 'Ofrecemos soluciones biotecnológicas y asesoramiento técnico para optimizar la producción agrícola, incluyendo desarrollo de cultivos mejorados, bioinsumos y sistemas de monitoreo inteligente.'
        },
        {
            id: 2,
            question: '¿Cómo puedo contactar con el equipo de Delsud?',
            answer: 'Podés contactarnos a través del formulario en nuestra web, por correo electrónico o siguiéndonos en nuestras redes sociales. Te responderemos a la brevedad.'
        },
        {
            id: 3,
            question: '¿Ofrecen servicios de asesoramiento personalizado?',
            answer: 'Sí, contamos con un equipo de especialistas que realiza visitas técnicas y elabora planes personalizados según las necesidades específicas de cada productor.'
        },
        {
            id: 4,
            question: '¿En qué regiones tienen presencia?',
            answer: 'Trabajamos con productores agropecuarios en distintas zonas del país y seguimos ampliando nuestra cobertura. Consultanos por tu zona para conocer el alcance actual.'
        },
        {
            id: 5,
            question: '¿Cuál es el plazo para ver resultados con sus productos?',
            answer: 'Los resultados varían según el cultivo y las condiciones, pero nuestros clientes suelen observar mejoras significativas en la primera temporada de aplicación.'
        },
        {
            id: 6,
            question: '¿Tienen programas de capacitación para productores?',
            answer: 'Sí, realizamos capacitaciones periódicas y talleres prácticos para que los productores puedan aprovechar al máximo nuestras soluciones tecnológicas.'
        }
    ];

    const handleToggle = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <section className={styles.faqSectionContainer}>
            <h2 className={styles.faqTitle}>
                Preguntas <span className={styles.primaryColor}>Frecuentes</span>
            </h2>

            <div className={styles.accordionContainer}>
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndices.includes(index)}
                        toggleAccordion={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
}