import styles from './CaseStudiesPerformance.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

export default function CaseStudiesPerformance() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.case_studies_performance__container} container`}>
                <div className={styles.case_studies_performance__item}>
                    <div className={styles.case_studies_performance__item_top}>
                        <h2 className={styles.case_studies_performance__item_title}>
                            Built Around Long-Term Performance
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div
                        className={`${styles.case_studies_performance__item_description} text-style text-style--black-75`}>
                        <p>
                            Strong campaign performance rarely comes from isolated optimizations alone.
                        </p>

                        <p>
                            It comes from operational consistency, scalable traffic environments, continuous refinement, and partnership structures capable of adapting to evolving digital conditions over time.
                        </p>

                        <p>
                            Myar focuses on helping advertisers and publishers build those environments through performance-focused collaboration and scalable operational support across changing digital markets.
                        </p>
                    </div>
                </div>

                <div className={styles.case_studies_performance__image}>
                    <Image
                        src={'/case-studies/performance.png'}
                        alt="Image"
                        width={400}
                        height={261}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}