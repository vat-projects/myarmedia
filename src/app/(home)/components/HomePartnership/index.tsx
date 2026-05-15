import styles from './HomePartnership.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function HomePartnership() {
    return (
        <div className="section-bottom-space-80">
            <div className="container">
                <div className={styles.home_partnership__bottom}>
                    <div className={`${styles.home_partnership__icon} show-element-on-different-device`}>
                        <Image
                            src={'/who-we-are/next.svg'}
                            alt="Image"
                            width={141}
                            height={109}
                            loading="lazy"
                        />

                        <Image
                            src={'/who-we-are/next-mobile.svg'}
                            alt="Image"
                            width={163}
                            height={160}
                            loading="lazy"
                        />
                    </div>

                    <h2 className={styles.home_partnership__title}>
                        Make It Convert: Start With the Right Partnership
                    </h2>

                    <p className={`${styles.home_partnership__title} text-style-two text-style--white-75`}>
                        Looking for scalable traffic, stronger campaign performance, or reliable monetization opportunities?
                    </p>

                    <p className={`${styles.home_partnership__description} text-style text-style--white-75`}>
                        Submit your request, and our team will get in touch to discuss the best approach for your goals.
                    </p>

                    <div className={`${styles.home_partnership__btn_wrapper} text-right`}>
                        <Button
                            type={'btn'}
                            style={'white'}
                            icon
                            className={styles.home_partnership__btn}>
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}