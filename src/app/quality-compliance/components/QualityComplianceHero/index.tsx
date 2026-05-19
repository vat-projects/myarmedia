import styles from './QualityComplianceHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function QualityComplianceHero() {
    return (
        <div className={`${styles.quality_compliance_hero} section-bottom-space-100`}>
            <div className="container">
                <h1 className={styles.quality_compliance_hero__title}>
                    Performance Works Better With Standards
                </h1>

                <div className={styles.quality_compliance_hero__bottom}>
                    <div className={styles.quality_compliance_hero__item_top}>
                        <div className={styles.quality_compliance_hero__item_content}>
                            <p className="text-style">
                                Not every traffic source performs the same way.
                                <br />
                                Not every partnership operates transparently.
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M0 33L0 0L33 0C14.8913 0.278596 0.278596 14.8913 0 33Z" fill="white"/>
                        </svg>
                    </div>

                    <div className={`${styles.quality_compliance_hero__image} show-element-on-different-device`}>
                        <Image
                            src={'/quality-compliance/hero.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />

                        <Image
                            src={'/quality-compliance/hero-mobile.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 735px) 100vw, 735px"
                            loading="eager"
                        />
                    </div>
                    <div className={styles.quality_compliance_hero__item}>
                        <div className={styles.quality_compliance_hero__item_content}>
                            <p className="text-style">
                                Myar was built around the idea that long-term performance depends on consistency, communication, and reliable operational practices — not short-term spikes or unstable campaign activity.
                            </p>

                            <div className={styles.quality_compliance_hero__link_wrapper}>
                                <Button className={styles.quality_compliance_hero__link} href={"/get-in-touch"}>
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