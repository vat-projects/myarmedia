import styles from './WhoWeAreHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function WhoWeAreHero() {
    return (
        <div className={`${styles.who_hero} section-bottom-space-100`}>
            <div className="container">
                <h1>
                    Built for the Performance Era
                </h1>

                <div className={styles.who_hero__bottom}>
                    <div className={styles.who_hero__item_top}>
                        <div className={styles.who_hero__item_content}>
                            <p className={`${styles.who_hero__item_description} text-style`}>
                                Myar is a modern affiliate network built around scalable partnerships, adaptable growth strategies, and performance-focused collaboration.
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                    </div>

                    <div className={`${styles.who_hero__image}`}>
                        <Image
                            src={'/who-we-are/hero.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />
                    </div>
                    <div className={styles.who_hero__item}>
                        <div className={styles.who_hero__item_content}>
                            <p className={`${styles.who_hero__item_description} text-style`}>
                                We help advertisers and publishers navigate evolving digital markets through smarter
                                traffic solutions and long-term performance opportunities.
                            </p>

                            <div className={styles.who_hero__link_wrapper}>
                                <Button className={styles.who_hero__link} href={"/get-in-touch"}>
                                    Get in Touch
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