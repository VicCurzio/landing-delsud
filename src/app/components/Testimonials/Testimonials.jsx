'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
    const [isMobile, setIsMobile] = useState(false);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            avatarSrc: '/daniel.png',
            name: 'Daniel',
            company: 'Productor agropecuario',
            testimonialText: 'Trabajar con Delsud cambió nuestra forma de producir. Su acompañamiento técnico se nota en el estado de los cultivos desde la primera aplicación.'
        },
            {
            id: 2,
            avatarSrc: '/franco.png',
            name: 'Franco',
            company: 'Ingeniero agrónomo',
            testimonialText: 'El equipo de Delsud nos acompaña en todo el proceso con asesoramiento técnico de primer nivel. Es un gusto trabajar con gente que conoce bien el campo.'
        },
        {
            id: 3,
            avatarSrc: '/eugenia.png',
            name: 'Eugenia',
            company: 'Encargada de cooperativa agrícola',
            testimonialText: 'La calidad de los productos y el soporte técnico constante hacen de Delsud un socio confiable para nuestra cooperativa. Lo recomendamos sin dudar.'
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const showPrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className={styles.testimonialsSectionContainer}>
            <h2 className={styles.testimonialsTitle}>
                Sector de <span className={styles.primaryColor}>testimonios</span>
            </h2>

            {isMobile ? (
                <div className={styles.mobileCarouselWrapper}>
                    <TestimonialCard
                        avatarSrc={testimonials[currentTestimonialIndex].avatarSrc}
                        name={testimonials[currentTestimonialIndex].name}
                        company={testimonials[currentTestimonialIndex].company}
                        testimonialText={testimonials[currentTestimonialIndex].testimonialText}
                    />
                    <div className={styles.mobileArrowsWrapper}>
                        <button
                            className={styles.carouselArrow}
                            onClick={showPrevTestimonial}
                            aria-label="Testimonio anterior"
                        >
                            &larr;
                        </button>
                        <button
                            className={styles.carouselArrow}
                            onClick={showNextTestimonial}
                            aria-label="Siguiente testimonio"
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                avatarSrc={testimonial.avatarSrc}
                                name={testimonial.name}
                                company={testimonial.company}
                                testimonialText={testimonial.testimonialText}
                            />
                        ))}
                    </div>
                    <div className={styles.desktopArrowsContainer}>
                        <button
                            className={styles.carouselArrow}
                            onClick={showPrevTestimonial}
                            aria-label="Testimonio anterior"
                        >
                            &larr;
                        </button>
                        <button
                            className={styles.carouselArrow}
                            onClick={showNextTestimonial}
                            aria-label="Siguiente testimonio"
                        >
                            &rarr;
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}