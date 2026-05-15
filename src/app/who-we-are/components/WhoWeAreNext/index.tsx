import styles from './WhoWeAreNext.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export default function WhoWeAreNext() {
    return (
        <div className={`${styles.who_next} section-bottom-space-100`}>
            <div className="container">
                <div className={styles.who_next__bottom}>
                    <div className={`${styles.who_next__icon} show-element-on-different-device`}>
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

                    <h2 className={styles.who_next__title}>
                        Let’s Build What’s Next
                    </h2>

                    <p className={`${styles.who_next__description} text-style text-style--white-75`}>
                        Whether you’re expanding acquisition efforts, exploring new monetization opportunities, or looking for scalable partnership solutions, Myar is ready to help you move forward in the performance space.
                    </p>

                    <div className={`${styles.who_next__btn_wrapper} text-right`}>
                        <Button style={'white'} icon className={styles.who_next__btn} href={'/performance-solutions'}>
                            Explore Performance Solutions
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}