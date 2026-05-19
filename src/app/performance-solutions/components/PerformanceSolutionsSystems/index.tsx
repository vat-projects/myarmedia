import styles from './PerformanceSolutionsSystems.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function PerformanceSolutionsSystems() {
    return (
        <div className="section-bottom-space-100">
            <div className="container">
                <div className={styles.performance_solutions_systems__bottom}>
                    <div className={`${styles.performance_solutions_systems__icon} show-element-on-different-device`}>
                        <Image
                            src={'/for-advertisers/explore.svg'}
                            alt="Image"
                            width={152}
                            height={157}
                            loading="lazy"
                        />

                        <Image
                            src={'/for-advertisers/explore-mobile.svg'}
                            alt="Image"
                            width={127}
                            height={153}
                            loading="lazy"
                        />
                    </div>

                    <h2 className={styles.performance_solutions_systems__title}>
                        Let’s Build Smarter Performance Systems
                    </h2>

                    <p className={`${styles.performance_solutions_systems__description} text-style text-style--white-75`}>
                        Looking to improve acquisition efficiency, optimize campaign operations, or expand monetization opportunities?
                    </p>

                    <div className={`${styles.performance_solutions_systems__btn_wrapper} text-right`}>
                        <Button style={'white'} icon className={styles.performance_solutions_systems__btn}
                                href={'/get-in-touch'}>
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}