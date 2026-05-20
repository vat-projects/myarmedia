import styles from './JoinMyarWorking.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

export default function JoinMyarWorking() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.join_myar_working__container} container`}>
                <div className={styles.join_myar_working__item}>
                    <div className={styles.join_myar_working__item_top}>
                        <h2 className={styles.join_myar_working__item_title}>
                            Working With Myar
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div
                        className={`${styles.join_myar_working__item_description} text-style text-style--black-75`}>
                        <p>
                            We focus on building a professional environment designed around collaboration, operational flexibility, and scalable growth opportunities.
                        </p>

                        <p>
                            Our team works across evolving digital markets, supporting advertisers, publishers, campaign operations, and performance-focused business development initiatives.
                        </p>
                    </div>
                </div>

                <div>
                    <Image
                        src={'/join-myar/working.png'}
                        alt="Image"
                        width={400}
                        height={266}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}