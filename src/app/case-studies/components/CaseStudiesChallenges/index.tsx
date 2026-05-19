import styles from './CaseStudiesChallenges.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

export default function CaseStudiesChallenges() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.case_studies_challenges__container} container`}>
                <div className={styles.case_studies_challenges__image}>
                    <Image
                        src={'/case-studies/challenges.png'}
                        alt="Image"
                        width={612}
                        height={337}
                        loading="lazy"
                    />
                </div>

                <div className={styles.case_studies_challenges__item}>
                    <div className={styles.case_studies_challenges__item_top}>
                        <h2 className={styles.case_studies_challenges__item_title}>
                            Different Industries. Different Performance Challenges.
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div
                        className={`${styles.case_studies_challenges__item_description} text-style text-style--black-75`}>
                        <p>
                            No two campaign environments operate the same way.
                        </p>

                        <p>
                            Traffic behavior changes across industries, audience expectations evolve between markets, and acquisition performance can vary significantly depending on platform conditions and operational structure.
                        </p>

                        <p>
                            That’s why Myar focuses on building adaptable campaign environments designed around flexibility, scalability, and long-term operational performance instead of one-size-fits-all strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}