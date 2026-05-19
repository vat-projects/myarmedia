import styles from './IndustriesHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function IndustriesHero() {
    return (
        <div className={`${styles.industries_hero} section-bottom-space-100`}>
            <div className="container">
                <h1 className={styles.industries_hero__title}>
                    Industries We Support
                </h1>

                <div className={styles.industries_hero__bottom}>
                    <div className={styles.industries_hero__item_top}>
                        <div className={styles.industries_hero__item_content}>
                            <p className="text-style">
                                Myar works with advertisers and publishers across a wide range of digital industries and performance-driven markets.
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                    </div>

                    <div className={styles.industries_hero__image}>
                        <Image
                            src="/industries/hero-mobile.png"
                            alt="Professional working in a modern office"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />
                    </div>
                    <div className={styles.industries_hero__item}>
                        <div className={styles.industries_hero__item_content}>
                            <p className="text-style">
                                Different industries require different traffic approaches, audience strategies, and campaign structures. That&apos;s why we adapt every partnership environment to fit the specific goals, audience behavior, and growth priorities of each vertical.
                            </p>

                            <div className={styles.industries_hero__link_wrapper}>
                                <Button className={styles.industries_hero__link} href="/get-in-touch">
                                    Request Solution
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
    );
}
