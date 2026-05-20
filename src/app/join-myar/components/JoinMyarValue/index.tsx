import styles from './JoinMyarValue.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

const items = [
    {
        id: 'businesses-one',
        image: "presentation-chart-24.svg",
        title: "Performance-Oriented Thinking",
        description: "We value structured problem-solving and operational efficiency across every area of performance marketing.",
    },
    {
        id: 'businesses-two',
        image: "brain.svg",
        title: "Adaptability",
        description: "Digital environments evolve quickly, and flexibility remains essential to the way we work.",
    },
    {
        id: 'businesses-three',
        image: "users-three.svg",
        title: "Collaboration",
        description: "Strong partnerships and communication help drive long-term operational growth.",
    },
    {
        id: 'businesses-four',
        image: "chart-line-up.svg",
        title: "Continuous Development",
        description: "We support ongoing learning, professional development, and performance-focused improvement.",
    },
];

export default function JoinMyarValue() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.join_myar_value__top}>
                    <h2 className={styles.join_myar_value__title}>
                        What We Value
                    </h2>

                    <IconAsterisk/>
                </div>

                <ul className={styles.join_myar_value__list}>
                    {items?.map((item) => (
                        <li key={item.id} className={styles.join_myar_value__item}>
                            <div className={styles.join_myar_value__item_top}>
                                <div className={styles.join_myar_value__item_image}>
                                    <Image
                                        src={`/icons/${item.image}`}
                                        alt="Image"
                                        width={24}
                                        height={24}
                                        loading="lazy"
                                    />
                                </div>

                                <h3 className={styles.join_myar_value__item_title}>
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