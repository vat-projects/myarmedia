import styles from './GetInTouchPerformance.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import ImageBg from "@/components/ImageBg";

export default function GetInTouchPerformance() {
    return (
        <div className="section-bottom-space-100">
            <div className="container">
                <div className={styles.get_in_touch_performance__bottom}>
                    <ImageBg size={820} />

                    <div className={styles.get_in_touch_performance__icon}>
                        <Image
                            src={'/get-in-touch/performance.svg'}
                            alt="Image"
                            width={183}
                            height={183}
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.get_in_touch_performance__top}>
                        <div className={styles.get_in_touch_performance__image}>
                            <Image
                                src={`/icons/clock.svg`}
                                alt="Image"
                                width={40}
                                height={40}
                                loading="lazy"
                            />
                        </div>

                        <h2 className={styles.get_in_touch_performance__title}>
                            Built for Long-Term Performance
                        </h2>
                    </div>

                    <p className={`${styles.get_in_touch_performance__description} text-style text-style--white-75`}>
                        Myar is focused on helping advertisers and publishers navigate evolving traffic environments
                        through adaptable campaign strategies, scalable partnership opportunities, and
                        performance-oriented execution.
                    </p>

                    <div className={`${styles.get_in_touch_performance__btn_wrapper} text-right`}>
                        <Button style={'white'} icon className={styles.get_in_touch_performance__btn}
                                href={'/performance-solutions'}>
                            Explore Performance Solutions
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}