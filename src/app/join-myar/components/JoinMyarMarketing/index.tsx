import styles from './JoinMyarMarketing.module.scss';
import Image from "next/image";


export default function JoinMyarMarketing() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.join_myar_marketing__inner}>
                    <div className={styles.join_myar_marketing__icon}>
                        <Image
                            src={'/for-advertisers/supporting-icon.svg'}
                            alt="Image"
                            width={135}
                            height={152}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.join_myar_marketing__top}>
                        <div className={styles.join_myar_marketing__image}>
                            <Image
                                src={'/icons/presentation-chart.svg'}
                                alt="Image"
                                width={40}
                                height={40}
                                loading="lazy"
                            />
                        </div>

                        <h2 className={styles.join_myar_marketing__title}>
                            Build Your Future in Performance Marketing
                        </h2>
                    </div>
                    <div className={`${styles.join_myar_marketing__description} text-style text-style--black-75`}>
                        <p>
                            The digital performance space evolves constantly — new traffic environments emerge, acquisition models change, and campaign strategies continue developing across global markets.
                        </p>
                        <p>
                            At Myar, we work with people who are ready to adapt, collaborate, and contribute to scalable performance-driven operations across multiple business areas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}