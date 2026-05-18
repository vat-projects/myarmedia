import styles from './ForAdvertisersHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function ForAdvertisersHero() {
    return (
        <div className={`${styles.for_advertisers} section-bottom-space-100`}>
            <div className="container">
                <h1>
                    Built for Smarter Acquisition
                </h1>

                <div className={styles.for_advertisers__bottom}>
                    <div className={styles.for_advertisers__item_top}>
                        <div className={styles.for_advertisers__item_content}>
                            <p className="text-style">
                                Myar helps advertisers navigate evolving digital markets through scalable traffic partnerships, adaptable campaign structures, and performance-focused growth strategies.
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                    </div>

                    <div className={`${styles.for_advertisers__image}`}>
                        <Image
                            src={'/for-advertisers/hero.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />
                    </div>
                    <div className={styles.for_advertisers__item}>
                        <div className={styles.for_advertisers__item_content}>
                            <p className="text-style">
                                Our approach is designed to support sustainable acquisition opportunities while helping brands operate more efficiently across changing traffic environments and audience behaviors.
                            </p>

                            <div className={styles.for_advertisers__link_wrapper}>
                                <Button className={styles.for_advertisers__link} href={"/get-in-touch"}>
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