import styles from './QualityComplianceSystems.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import ImageBg from "@/components/ImageBg";

export default function QualityComplianceSystems() {
    return (
        <div className="section-bottom-space-100">
            <div className="container">
                <div className={styles.quality_compliance_systems__bottom}>
                    <ImageBg size={820} />

                    <div className={`${styles.quality_compliance_systems__icon} show-element-on-different-device`}>
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

                    <h2 className={styles.quality_compliance_systems__title}>
                        Let’s Build More Reliable Performance Environments
                    </h2>

                    <p className={`${styles.quality_compliance_systems__description} text-style text-style--white-75`}>
                        Looking for scalable partnerships built around transparency, operational consistency, and
                        traffic quality?
                    </p>

                    <div className={`${styles.quality_compliance_systems__btn_wrapper} text-right`}>
                        <Button style={'white'} icon className={styles.quality_compliance_systems__btn}
                                href={'/get-in-touch'}>
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}