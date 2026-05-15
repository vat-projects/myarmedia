import styles from './WhoWeAreBusinesses.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

const items = [
    {
        id: 'businesses-one',
        image: "businesses-one.svg",
        title: "Reliable Partnership Environment",
        description: "Built around communication, consistency, and operational support.",
    },
    {
        id: 'businesses-two',
        image: "businesses-two.svg",
        title: "Performance-Oriented Infrastructure",
        description: "Focused on campaign scalability, traffic alignment, and adaptable execution.",
    },
    {
        id: 'businesses-three',
        image: "businesses-three.svg",
        title: "Long-Term Collaboration Focus",
        description: "We prioritize sustainable relationships over short-term transactional models.",
    },
    {
        id: 'businesses-four',
        image: "businesses-four.svg",
        title: "Flexible Growth Potential",
        description: "Designed to support evolving campaign goals and changing traffic landscapes.",
    },
];

export default function WhoWeAreBusinesses() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.who_businesses__top}>
                    <h2 className={styles.who_businesses__title}>Why Businesses Work With Myar</h2>

                    <IconAsterisk/>
                </div>

                <ul className={styles.who_businesses__list}>
                    {items?.map((item) => (
                        <li key={item.id} className={styles.who_businesses__item}>
                            <div className={styles.who_businesses__item_top}>
                                <div className={styles.who_businesses__item_image}>
                                    <Image
                                        src={`/who-we-are/${item.image}`}
                                        alt="Image"
                                        width={24}
                                        height={24}
                                        loading="lazy"
                                    />
                                </div>

                                <h3 className={styles.who_businesses__item_title}>
                                    {item.title}
                                </h3>
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