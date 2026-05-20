import styles from './GetInTouchConnect.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";
import SocialList from "@/components/socialList";

export default function GetInTouchConnect() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.get_in_touch_connect__container} container`}>
                <div className={styles.get_in_touch_connect__item}>
                    <div className={styles.get_in_touch_connect__item_top}>
                        <h2 className={styles.get_in_touch_connect__item_title}>
                            Connect With Myar
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div
                        className={`${styles.get_in_touch_connect__item_description} text-style text-style--black-75`}>
                        <p>
                            Stay connected and follow the latest updates, insights, and performance-focused
                            opportunities across our social channels.
                        </p>
                    </div>

                    <div className={styles.get_in_touch_connect__socials}>
                        <SocialList style={'blue'} size={40}/>
                    </div>
                </div>

                <div>
                    <Image
                        src={'/get-in-touch/connect.png'}
                        alt="Image"
                        width={400}
                        height={244}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}