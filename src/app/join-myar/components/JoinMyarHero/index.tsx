'use client';

import styles from './JoinMyarHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function JoinMyarHero() {
    const scrollToJoining = () => {
        document.getElementById('join-myar-joining')?.scrollIntoView({
                behavior: 'smooth',
        });
    };

    return (
        <div className={`${styles.join_myar_hero} section-bottom-space-100`}>
            <div className="container">
                <h1 className={styles.join_myar_hero__title}>
                    Join the Team Behind the Performance
                </h1>

                <div className={styles.join_myar_hero__bottom}>
                    <div className={styles.join_myar_hero__item_top}>
                        <div className={styles.join_myar_hero__item_content}>
                            <p className="text-style">
                                Myar is built around people who understand digital performance, evolving traffic environments, scalable growth strategies, and partnership-focused collaboration.
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                    </div>

                    <div className={`${styles.join_myar_hero__image} show-element-on-different-device`}>
                        <Image
                            src={'/join-myar/hero.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />

                        <Image
                            src={'/join-myar/hero-mobile.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 735px) 100vw, 735px"
                            loading="eager"
                        />
                    </div>
                    <div className={styles.join_myar_hero__item}>
                        <div className={styles.join_myar_hero__item_content}>
                            <p className="text-style">
                                We’re always looking for professionals ready to grow inside a fast-moving performance ecosystem focused on operational flexibility, innovation, and long-term development!
                            </p>

                            <div className={styles.join_myar_hero__link_wrapper}>
                                <Button
                                    type={'btn'}
                                    className={styles.join_myar_hero__link}
                                    onClick={scrollToJoining}>
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M33 0L33 33L0 33C18.1087 32.7214 32.7214 18.1087 33 0Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M33 0L33 33L0 33C18.1087 32.7214 32.7214 18.1087 33 0Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}