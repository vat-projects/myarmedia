import styles from './HomeHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function HomeHero() {
    return (
        <div className={`${styles.home_hero} section-bottom-space-80`}>
            <div className="container">
                <div className={styles.home_hero__video_wrapper}>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        width="100%"
                    >
                        <source src="home/hero.mp4" type="video/mp4"/>
                    </video>
                </div>

                <p className={`${styles.home_hero__description} text-style text-style--black-50`}>
                    Performance affiliate network helping advertisers <span>acquire high-converting traffic and enabling publishers to scale revenue</span> through data-driven campaigns, trusted partnerships, and measurable growth strategies.
                </p>

                <div className={styles.home_hero__bottom}>
                    <div className={`${styles.home_hero__image} show-element-on-different-device`}>
                        <Image
                            src={'/home/hero.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />

                        <Image
                            src={'/home/hero-mobile.png'}
                            alt="Image"
                            width={374}
                            height={410}
                            loading="eager"
                        />
                    </div>
                    <div className={styles.home_hero__item}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M33 0L33 33L0 33C18.1087 32.7214 32.7214 18.1087 33 0Z" fill="white"/>
                        </svg>
                        <div className={styles.home_hero__item_content}>
                            <p className={`${styles.home_hero__item_description} text-style text-style--black `}>
                                We build scalable performance solutions designed to help businesses increase visibility,
                                improve conversion quality, and maximize long-term revenue opportunities across multiple
                                traffic channels and industries.
                            </p>

                            <Button className={styles.home_hero__link}>
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}