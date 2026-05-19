import styles from './QualityComplianceAvoid.module.scss';
import Image from "next/image";
import ImageBg from "@/components/ImageBg";

export default function QualityComplianceAvoid() {
    return (
        <div className="section-bottom-space-100">
            <div className="container">
                <div className={styles.quality_compliance_avoid__inner}>
                    <ImageBg />

                    <div className={`${styles.quality_compliance_avoid__icon} show-element-on-different-device`}>
                        <Image
                            src={'/quality-compliance/avoid.svg'}
                            alt="Image"
                            width={250}
                            height={237}
                            loading="lazy"
                        />

                        <Image
                            src={'/quality-compliance/avoid-mobile.svg'}
                            alt="Image"
                            width={142}
                            height={175}
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.quality_compliance_avoid__top}>
                        <Image
                            src={'/icons/hand-palm.svg'}
                            alt="Image"
                            width={32}
                            height={32}
                            loading="lazy"
                        />

                        <h2 className={styles.quality_compliance_avoid__title}>
                            What We Avoid
                        </h2>
                    </div>

                    <div className={styles.quality_compliance_avoid__description}>
                        <p className="text-style text-style--white-75">
                            Not every performance environment is built for sustainable growth.
                        </p>
                        <p className="text-style text-style--white-75">
                            Myar focuses on long-term operational stability instead of short-term traffic spikes,
                            inconsistent acquisition practices, or low-transparency partnership structures.
                        </p>
                        <p className="text-style text-style--white-75">
                            We prioritize performance environments designed around reliability, scalability, and ongoing
                            operational oversight.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}