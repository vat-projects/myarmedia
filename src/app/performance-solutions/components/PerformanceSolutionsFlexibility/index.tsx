import styles from './PerformanceSolutionsFlexibility.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

export default function PerformanceSolutionsFlexibility() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.performance_solutions_flexibility__container} container`}>
                <div className={styles.performance_solutions_flexibility__image}>
                    <Image
                        src={'/performance-solutions/flexibility.png'}
                        alt="Image"
                        width={610}
                        height={245}
                        loading="lazy"
                    />
                </div>

                <div className={styles.performance_solutions_flexibility__item}>
                    <div className={styles.performance_solutions_flexibility__item_top}>
                        <h2 className={styles.performance_solutions_flexibility__item_title}>
                            Built for Operational Flexibility
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div className={`${styles.performance_solutions_flexibility__item_description} text-style text-style--black-75`}>
                        <p>
                            Digital performance environments continue evolving across traffic channels, audience behavior, and acquisition models.
                        </p>

                        <p>
                            Myar develops adaptable operational solutions designed to help advertisers and publishers maintain scalability, optimization efficiency, and performance consistency across changing digital ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}