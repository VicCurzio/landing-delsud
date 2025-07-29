'use client';

import { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const ArrowUpIcon = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" rx="15" fill="#0AAA9D" fillOpacity="0.3" />
        <path d="M10 16L15 11L20 16" stroke="#0AAA9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" rx="15" fill="#0AAA9D" fillOpacity="0.3" />
        <path d="M10 14L15 19L20 14" stroke="#0AAA9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function AccordionItem({ question, answer, isOpen, toggleAccordion }) {
    return (
        <div className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
            <button className={styles.accordionHeader} onClick={toggleAccordion}>
                <h3 className={styles.accordionQuestion}>{question}</h3>
                <span className={styles.accordionIcon}>
                    {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </span>
            </button>
            {isOpen && (
                <div className={styles.accordionContent}>
                    <p className={styles.accordionText}>{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: '¿Pregunta frecuente 1?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Ut quam lacus est feugiat. At at velit nullam sollicitudin tempor eu scelerisque.. Nullam purus in vitae sed diam urna nulla augue ac..'
        },
        {
            id: 2,
            question: '¿Pregunta frecuente 2?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Commodo cras sit diam viverra phasellus massa lorem suspendisse venenatis.. Amet laoreet accumsan egestas egestas erat.. Nisi a curabitur in ut habitant molestie euismod elit.. Venenatis lacus dui ipsum gravida fermentum platea scelerisque.'
        },
        {
            id: 3,
            question: '¿Pregunta frecuente 3?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Mauris mauris ipsum sit egestas in.. Velit vitae eget pharetra adipiscing ut sit egestas condimentum.. Praesent enim ullamcorper ultrices est. Duis pellentesque mi ultrices sit vel.. Consequat ut velit id mi in..'
        },
        {
            id: 4,
            question: '¿Pregunta frecuente 4?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Ut quam lacus est feugiat. At at velit nullam sollicitudin tempor eu scelerisque.. Nullam purus in vitae sed diam urna nulla augue ac..'
        },
        {
            id: 5,
            question: '¿Pregunta frecuente 5?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Commodo cras sit diam viverra phasellus massa lorem suspendisse venenatis.. Amet laoreet accumsan egestas egestas erat.. Nisi a curabitur in ut habitant molestie euismod elit.. Venenatis lacus dui ipsum gravida fermentum platea scelerisque.'
        },
        {
            id: 6,
            question: '¿Pregunta frecuente 6?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
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
                        isOpen={openIndex === index}
                        toggleAccordion={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
}