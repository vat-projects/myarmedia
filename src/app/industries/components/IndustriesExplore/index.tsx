import styles from './IndustriesExplore.module.scss';
import Image from 'next/image';
import Button from '@/components/Button';
import ImageBg from '@/components/ImageBg';

export default function IndustriesExplore() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.industries_explore__bottom}>
                    <ImageBg size={820} />

                    <div className={`${styles.industries_explore__icon} show-element-on-different-device`}>
                        <Image
                            src="/for-advertisers/explore.svg"
                            alt=""
                            width={152}
                            height={157}
                            loading="lazy"
                        />

                        <Image
                            src="/for-advertisers/explore-mobile.svg"
                            alt=""
                            width={127}
                            height={153}
                            loading="lazy"
                        />
                    </div>

                    <h2 className={styles.industries_explore__title}>
                        Let&apos;s Explore New Growth Opportunities
                    </h2>

                    <p className={`${styles.industries_explore__description} text-style text-style--white-75`}>
                        Looking to improve campaign performance, expand audience reach, or explore scalable partnership opportunities within your industry?
                    </p>

                    <div className={`${styles.industries_explore__btn_wrapper} text-right`}>
                        <Button
                            style="white"
                            icon
                            className={styles.industries_explore__btn}
                            href="/get-in-touch"
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
