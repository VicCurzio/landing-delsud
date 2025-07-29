'use client';

import styles from '../styles/FAQ.module.css';
import { ArrowUpIcon, ArrowDownIcon } from './AccordionIcons';

export default function AccordionItem({ question, answer, isOpen, toggleAccordion }) {
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