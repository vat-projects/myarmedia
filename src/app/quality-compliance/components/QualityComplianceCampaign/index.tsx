import styles from './QualityComplianceCampaign.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

export default function QualityComplianceCampaign() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.quality_compliance_campaign__container} container`}>
                <div className={styles.quality_compliance_campaign__image}>
                    <Image
                        src={'/quality-compliance/campaign.png'}
                        alt="Image"
                        width={612}
                        height={299}
                        loading="lazy"
                    />
                </div>

                <div className={styles.quality_compliance_campaign__item}>
                    <div className={styles.quality_compliance_campaign__item_top}>
                        <h2 className={styles.quality_compliance_campaign__item_title}>
                            Behind Every Stable Campaign
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div
                        className={`${styles.quality_compliance_campaign__item_description} text-style text-style--black-75`}>
                        <p>
                            Strong campaign performance is usually the result of consistent operational management
                            happening in the background.
                        </p>

                        <p>
                            Traffic monitoring, campaign adjustments, partnership coordination, audience evaluation, and
                            performance tracking all play a role in maintaining scalable performance environments over
                            time.
                        </p>

                        <p>
                            At Myar, ongoing operational refinement remains part of the process — not a one-time setup.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}