import styles from './ForAdvertisersSupporting.module.scss';
import Image from "next/image";
import Button from "@/components/Button";


export default function ForAdvertisersSupporting() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.for_advertisers_supporting__inner}>
                    <div className={styles.for_advertisers_supporting__icon}>
                        <Image
                            src={'/for-advertisers/supporting-icon.svg'}
                            alt="Image"
                            width={135}
                            height={152}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.for_advertisers_supporting__top}>
                        <div className={styles.for_advertisers_supporting__image}>
                            <Image
                                src={'/for-advertisers/supporting.svg'}
                                alt="Image"
                                width={40}
                                height={40}
                                loading="lazy"
                            />
                        </div>

                        <h2 className={styles.for_advertisers_supporting__title}>
                            Supporting Evolving Digital Markets
                        </h2>
                    </div>
                    <div className={`${styles.for_advertisers_supporting__description} text-style text-style--black-75`}>
                        <p>
                            Digital acquisition continues to change as platforms, audiences, and traffic ecosystems evolve.
                        </p>
                        <p>
                            Myar helps advertisers operate more effectively in those environments through adaptable performance strategies and scalable partnership opportunities designed for long-term growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}