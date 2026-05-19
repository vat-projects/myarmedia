import styles from './CaseStudiesStory.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import ImageBg from "@/components/ImageBg";

export default function CaseStudiesStory() {
    return (
        <div className="section-bottom-space-100">
            <div className="container">
                <div className={styles.case_studies_story__bottom}>
                    <ImageBg size={820} />

                    <div className={`${styles.case_studies_story__icon} show-element-on-different-device`}>
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

                    <h2 className={styles.case_studies_story__title}>
                        Let’s Build the Next Success Story
                    </h2>

                    <p className={`${styles.case_studies_story__description} text-style text-style--white-75`}>
                        Looking to improve campaign efficiency, strengthen acquisition performance, or expand monetization opportunities?
                    </p>

                    <div className={`${styles.case_studies_story__btn_wrapper} text-right`}>
                        <Button style={'white'} icon className={styles.case_studies_story__btn}
                                href={'/get-in-touch'}>
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}