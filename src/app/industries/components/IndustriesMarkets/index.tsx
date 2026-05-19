import styles from './IndustriesMarkets.module.scss';
import Image from 'next/image';
import IconAsterisk from '@/components/icons/IconAsterisk';

export default function IndustriesMarkets() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.industries_markets__container} container`}>
                <div className={styles.industries_markets__image}>
                    <Image
                        src="/performance-solutions/flexibility.png"
                        alt="Team collaborating in a modern office"
                        width={610}
                        height={245}
                        loading="lazy"
                    />
                </div>

                <div className={styles.industries_markets__item}>
                    <div className={styles.industries_markets__item_top}>
                        <h2 className={styles.industries_markets__item_title}>
                            Built Around Different Markets
                        </h2>

                        <IconAsterisk />
                    </div>

                    <p className="text-style text-style--black-75">
                        Every vertical operates differently — traffic behavior changes, audiences respond differently, and campaign priorities vary across industries.
                    </p>

                    <p className="text-style text-style--black-75">
                        Myar builds adaptable partnership environments designed to help advertisers and publishers operate more efficiently across changing digital markets.
                    </p>
                </div>
            </div>
        </section>
    );
}
