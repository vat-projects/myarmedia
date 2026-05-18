import styles from './ForPublishersVolume.module.scss';
import Image from "next/image";

const items = [
    {
        id: 'volume-one',
        image: "chart-line-up.svg",
        description: "Growing traffic is only part of the equation.",
    },
    {
        id: 'volume-two',
        image: "cross-hair.svg",
        description: "Myar focuses on helping publishers create scalable monetization structures built around flexibility and long-term operational value.",
    },
    {
        id: 'volume-three',
        image: "hand-coins.svg",
        description: "Sustainable monetization depends on campaign alignment, audience engagement, traffic adaptability, and partnership environments that can evolve alongside changing digital ecosystems.",
    },
];

export default function ForPublishersVolume() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <h2>
                    Beyond Traffic Volume
                </h2>

                <ul className={styles.for_publishers_volume__list}>
                    {items?.map((item) => (
                        <li key={item.id} className={styles.for_publishers_volume__item}>
                            <div className={styles.for_publishers_volume__item_image}>
                                <Image
                                    src={`/icons/${item.image}`}
                                    alt="Image"
                                    width={24}
                                    height={24}
                                    loading="lazy"
                                />
                            </div>

                            <p className="text-style text-style--black-50">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}