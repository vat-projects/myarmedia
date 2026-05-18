import styles from './ForPublishersOpportunities.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function ForPublishersOpportunities() {
    return (
        <div className="section-bottom-space-100">
            <div className="container">
                <div className={styles.for_publishers_opportunities__bottom}>
                    <div className={`${styles.for_publishers_opportunities__icon} show-element-on-different-device`}>
                        <Image
                            src={'/for-advertisers/explore.svg'}
                            alt="Image"
                            width={152}
                            height={157}
                            loading="lazy"
                        />

                        <Image
                            src={'/for-advertisers/explore-mobile.svg'}
                            alt="Image"
                            width={127}
                            height={153}
                            loading="lazy"
                        />
                    </div>

                    <h2 className={styles.for_publishers_opportunities__title}>
                        Let’s Explore New Monetization Opportunities
                    </h2>

                    <p className={`${styles.for_publishers_opportunities__description} text-style text-style--white-75`}>
                        Myar helps publishers build scalable growth opportunities through adaptable campaign structures, evolving partnership environments, and performance-focused collaboration.
                    </p>

                    <div className={`${styles.for_publishers_opportunities__btn_wrapper} text-right`}>
                        <Button style={'white'} icon className={styles.for_publishers_opportunities__btn}
                                href={'/get-in-touch'}>
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}