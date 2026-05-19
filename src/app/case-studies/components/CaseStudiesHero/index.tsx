import styles from './CaseStudiesHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function CaseStudiesHero() {
    return (
        <div className={`${styles.case_studies_hero} section-bottom-space-100`}>
            <div className="container">
                <h1>
                    Performance Built Through Real Campaign Environments
                </h1>

                <div className={styles.case_studies_hero__bottom}>
                    <div className={`${styles.case_studies_hero__image} show-element-on-different-device`}>
                        <Image
                            src={'/case-studies/hero.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />

                        <Image
                            src={'/case-studies/hero-mobile.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 735px) 100vw, 735px"
                            loading="eager"
                        />
                    </div>
                    <div className={styles.case_studies_hero__item}>
                        <div className={styles.case_studies_hero__item_content}>
                            <p className="text-style">
                                Every growth stage creates a new performance challenge — stronger scaling requires smarter traffic structure, operational flexibility, and continuous optimization across evolving campaign environments.
                            </p>

                            <div className={styles.case_studies_hero__link_wrapper}>
                                <Button className={styles.case_studies_hero__link} href={"/performance-solutions"}>
                                    Explore Performance Solutions
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