import styles from './ForPublishersMonetization.module.scss';
import Image from "next/image";


export default function ForPublishersMonetization() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.for_publishers_monetization__inner}>
                    <div className={styles.for_publishers_monetization__icon}>
                        <Image
                            src={'/for-advertisers/supporting-icon.svg'}
                            alt="Image"
                            width={135}
                            height={152}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.for_publishers_monetization__top}>
                        <div className={styles.for_publishers_monetization__image}>
                            <Image
                                src={'/icons/coins.svg'}
                                alt="Image"
                                width={40}
                                height={40}
                                loading="lazy"
                            />
                        </div>

                        <h2 className={styles.for_publishers_monetization__title}>
                            Built Around Long-Term Monetization
                        </h2>
                    </div>
                    <div className={`${styles.for_publishers_monetization__description} text-style text-style--black-75`}>
                        <p>
                            Performance environments evolve constantly — platforms shift, audience behavior changes, and monetization trends continue developing.
                        </p>
                        <p>
                            Myar is built to help publishers remain adaptable in those changing environments through scalable partnerships and evolving campaign opportunities designed for sustainable growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}