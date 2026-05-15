import styles from './HomePartnership.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function HomePartnership() {
    return (
        <div className={`${styles.home_partnership} section-bottom-space-80`}>
            <div className="container">
                <div className={styles.home_partnership__bottom}>
                    <div className={`${styles.home_partnership__image}`}>
                        <Image
                            src={'/home/partnership.png'}
                            alt="Image"
                            fill
                            sizes="(max-width: 1240px) 100vw, 1240px"
                            loading="eager"
                        />
                    </div>
                    <div className={styles.home_partnership__item}>
                        <div className={styles.home_partnership__icon}>
                            <Image
                                src={'/home/partnership-icon.svg'}
                                alt="Image"
                                width={235}
                                height={235}
                                loading="lazy"
                            />
                        </div>

                        <div className={styles.home_partnership__content}>
                            <h2 className={styles.home_partnership__title}>
                                Make It Convert: Start With the Right Partnership
                            </h2>

                            <p className={styles.home_partnership__subtitle}>
                                Looking for scalable traffic, stronger campaign performance, or reliable monetization
                                opportunities?
                            </p>

                            <p className="text-style text-style--white-75">
                                Submit your request, and our team will get in touch to discuss the best approach for
                                your
                                goals.
                            </p>

                            <div className={`${styles.home_partnership__btn_wrapper} text-right`}>
                                <Button style={'white'} icon className={styles.home_partnership__btn}>
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}