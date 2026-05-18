import styles from './ForPublishersEcosystems.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

export default function ForPublishersEcosystems() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.for_publishers_ecosystems__container} container`}>
                <div className={styles.for_publishers_ecosystems__image}>
                    <Image
                        src={'/for-publishers/ecosystems.png'}
                        alt="Image"
                        width={610}
                        height={229}
                        loading="lazy"
                    />
                </div>

                <div className={styles.for_publishers_ecosystems__item}>
                    <div className={styles.for_publishers_ecosystems__item_top}>
                        <h2 className={styles.for_publishers_ecosystems__item_title}>
                            Built for Evolving Traffic Ecosystems
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div className={`${styles.for_publishers_ecosystems__item_description} text-style text-style--black-75`}>
                        <p>
                            Digital traffic continues to evolve across platforms, devices, and audience behaviors.
                        </p>

                        <p>
                            Myar helps publishers navigate those changes through adaptable monetization environments and scalable campaign opportunities designed for modern performance ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}