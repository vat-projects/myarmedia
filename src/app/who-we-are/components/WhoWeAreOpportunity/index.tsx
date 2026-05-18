import styles from './WhoWeAreOpportunity.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

export default function WhoWeAreOpportunity() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.who_opportunity__container} container`}>
                <div className={`${styles.who_opportunity__image} show-element-on-different-device`}>
                    <Image
                        src={'/who-we-are/opportunity.png'}
                        alt="Image"
                        width={610}
                        height={261}
                        loading="lazy"
                    />

                    <Image
                        src={'/who-we-are/opportunity-mobile.png'}
                        alt="Image"
                        width={358}
                        height={268}
                        loading="lazy"
                    />
                </div>

                <div className={styles.who_opportunity__item}>
                    <div className={styles.who_opportunity__item_top}>
                        <h2 className={styles.who_opportunity__item_title}>
                            Built Around Opportunity
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <p className={`${styles.who_opportunity__item_description} text-style text-style--black-75`}>
                        The affiliate industry continues to create new opportunities for advertisers and publishers
                        willing to adapt and scale intelligently.
                    </p>

                    <p className={`${styles.who_opportunity__item_description} text-style text-style--black-75`}>
                        Myar is designed to help businesses explore those opportunities through structured partnerships, scalable traffic strategies, and performance-focused collaboration built for evolving digital markets.
                    </p>
                </div>
            </div>
        </section>
    )
}