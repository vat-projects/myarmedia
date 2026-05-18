import styles from './ForAdvertisersExplore.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function ForAdvertisersExplore() {
    return (
        <div className="section-bottom-space-100">
            <div className="container">
                <div className={styles.for_advertiser_explore__bottom}>
                    <div className={`${styles.for_advertiser_explore__icon} show-element-on-different-device`}>
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

                    <h2 className={styles.for_advertiser_explore__title}>
                        Let’s Explore New Growth Opportunities
                    </h2>

                    <p className={`${styles.for_advertiser_explore__description} text-style text-style--white-75`}>
                        Myar supports advertisers looking to expand acquisition potential through scalable traffic environments and adaptable performance-focused collaboration.
                    </p>

                    <div className={`${styles.for_advertiser_explore__btn_wrapper} text-right`}>
                        <Button style={'white'} icon className={styles.for_advertiser_explore__btn}
                                href={'/get-in-Touch'}>
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}