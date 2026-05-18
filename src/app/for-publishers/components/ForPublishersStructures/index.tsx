import styles from './ForPublishersStructures.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import IconAsterisk from "@/components/icons/IconAsterisk";

const list = [
    {
        id: 'structures-one',
        title: 'CPA Campaigns',
    },
    {
        id: 'structures-two',
        title: 'CPL Structures',
    },
    {
        id: 'structures-three',
        title: 'RevShare Opportunities',
    },
    {
        id: 'structures-four',
        title: 'Hybrid Models',
    },
]

export default function ForPublishersStructures() {
    return (
        <div className="section-bottom-space-100">
            <div className={`${styles.for_publishers_structures__container} container`}>
                <div className={styles.for_publishers_structures__image}>
                    <Image
                        src={'/for-publishers/structures.png'}
                        alt="Image"
                        width={915}
                        height={693}
                        loading="lazy"
                    />
                </div>

                <div className={styles.for_publishers_structures__item}>
                    <div className={styles.for_publishers_structures__item_top}>
                        <h2 className={styles.for_publishers_structures__item_title}>
                            Flexible Monetization Structures
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div className={`${styles.for_publishers_structures__item_description} text-style text-style--black-75`}>
                        <p>
                            No two publishers scale the same way.
                        </p>

                        <p>
                            Myar supports multiple partnership models designed to align with different traffic strategies, audience behaviors, and operational goals.
                        </p>

                        <p>
                            Our approach is focused on helping publishers explore scalable monetization opportunities without relying on rigid traffic structures.
                        </p>
                    </div>

                    <ul className={styles.for_publishers_structures__item_list}>
                        {list?.map(item => (
                            <li
                                key={item.id}
                                className={`${styles.for_publishers_structures__item_list_item} text-style text-style--black-75`}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.for_publishers_structures__item_link_wrapper}>
                        <Button
                            style={"secondary"}
                            href={'/performance-solutions'}
                            icon
                            className={styles.for_publishers_structures__item_link}>
                            Explore Performance Solutions
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}