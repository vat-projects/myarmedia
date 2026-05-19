import styles from './PerformanceSolutionsHero.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function PerformanceSolutionsHero() {
    return (
        <div className={`${styles.performance_solutions_hero} section-bottom-space-100`}>
            <div className="container">
                <h1>
                    Myar’s Performance Solutions
                </h1>

                <div className={styles.performance_solutions_hero__bottom}>
                    <div className={`${styles.performance_solutions_hero__image} show-element-on-different-device`}>
                        <Image
                            src={'/performance-solutions/hero.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />

                        <Image
                            src={'/performance-solutions/hero-mobile.png'}
                            alt="Image"
                            width={358}
                            height={485}
                            loading="eager"
                        />
                    </div>
                    <div className={styles.performance_solutions_hero__item}>
                        <div className={styles.performance_solutions_hero__item_content}>
                            <p className="text-style">
                                Performance-focused services designed to help advertisers and publishers improve acquisition, optimize campaigns, and scale growth across evolving digital markets.
                            </p>

                            <div className={styles.performance_solutions_hero__link_wrapper}>
                                <Button className={styles.performance_solutions_hero__link} href={"/get-in-touch"}>
                                    Request a Performance Solution
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