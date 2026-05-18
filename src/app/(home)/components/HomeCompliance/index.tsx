import styles from './HomeCompliance.module.scss';
import Image from "next/image";
import Button from "@/components/Button";


export default function HomeCompliance() {
    return (
        <section className="section-bottom-space-80">
            <div className="container">
                <div className={styles.home_compliance__inner}>
                    <div className={styles.home_compliance__icon}>
                        <Image
                            src={'/home/compliance-icon.svg'}
                            alt="Image"
                            width={212}
                            height={231}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.home_compliance__top}>
                        <div className={styles.home_compliance__image}>
                            <Image
                                src={'/home/compliance.svg'}
                                alt="Image"
                                width={40}
                                height={40}
                                loading="lazy"
                            />
                        </div>

                        <h2 className={styles.home_compliance__title}>
                            Traffic Quality & Compliance
                        </h2>
                    </div>
                    <div className={`${styles.home_compliance__description} text-style text-style--black-75`}>
                        <p>
                            Quality traffic and transparent campaign practices remain at the core of our network.
                        </p>
                        <p>
                            We continuously monitor traffic activity, optimize campaign performance, and maintain
                            standards designed to support reliable advertiser and publisher partnerships.
                        </p>
                        <p>
                            Our quality-focused approach helps reduce invalid traffic risks, improve campaign
                            efficiency, and support stronger long-term performance outcomes across all active
                            partnerships.
                        </p>
                    </div>

                    <div className={styles.home_compliance__link_wrapper}>
                        <Button
                            style={"secondary"}
                            href={"/quality-compliance"}
                            icon
                            className={styles.home_compliance__link}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}