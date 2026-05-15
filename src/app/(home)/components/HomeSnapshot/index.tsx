import styles from './HomeSnapshot.module.scss';
import Image from "next/image";

export const items = [
    {
        id: 'snapshot-one',
        title: "24/7",
        description: "campaign monitoring",
    },
    {
        id: 'snapshot-two',
        title: "100%",
        description: "performance-focused approach",
    },
    {
        id: 'snapshot-three',
        title: "2X",
        description: "faster campaign scaling",
    },
    {
        id: 'snapshot-four',
        title: "360°",
        description: "traffic insights",
    },
];

export default function HomeSnapshot() {
    return (
        <section className="section-bottom-space-80">
            <div className="container">
                <div className={styles.home_snapshot__inner}>
                    <h2 className={styles.home_snapshot__title}>
                        Performance Snapshot
                    </h2>

                    <ul className={styles.home_snapshot__list}>
                        {items?.map((item) => (
                            <li key={item.id}>
                                <h3 className={styles.home_snapshot__item_title}>
                                    {item.title}
                                </h3>

                                <p className="text-style text-style--white">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.home_snapshot__icon}>
                    <Image
                            src={'/home/snapshot-icon.svg'}
                            alt="Image"
                            width={276}
                            height={300}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}