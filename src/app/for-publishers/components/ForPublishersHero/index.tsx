import styles from './ForPublishersHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function ForPublishers() {
    return (
        <div className={`${styles.for_publishers_hero} section-bottom-space-100`}>
            <div className="container">
                <h1 className={styles.for_publishers_hero__title}>
                    Built for Traffic That Wants to Grow
                </h1>

                <div className={styles.for_publishers_hero__bottom}>
                    <div className={styles.for_publishers_hero__item_top}>
                        <div className={styles.for_publishers_hero__item_content}>
                            <p className="text-style">
                                Myar works with publishers looking to build stronger monetization opportunities through scalable partnerships and performance-focused campaign environments.
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                    </div>

                    <div className={`${styles.for_publishers_hero__image} show-element-on-different-device`}>
                        <Image
                            src={'/for-publishers/hero.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />

                        <Image
                            src={'/for-publishers/hero-mobile.png'}
                            alt="Image"
                            width={358}
                            height={280}
                            loading="eager"
                        />
                    </div>
                    <div className={styles.for_publishers_hero__item}>
                        <div className={styles.for_publishers_hero__item_content}>
                            <p className="text-style">
                                We support traffic owners operating across evolving digital channels by helping them connect with adaptable campaign opportunities designed for long-term growth potential.
                            </p>

                            <div className={styles.for_publishers_hero__link_wrapper}>
                                <Button className={styles.for_publishers_hero__link} href={"/get-in-touch"}>
                                    Start a Partnership
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
    )
}