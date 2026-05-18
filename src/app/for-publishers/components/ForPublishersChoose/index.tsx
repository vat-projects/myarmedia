import styles from './ForPublishersChoose.module.scss';
import IconAsterisk from "@/components/icons/IconAsterisk";

const list = [
    {
        id: 'choose-one',
        title: 'Flexible Partnership Environment',
        description: 'Designed to support different traffic models and audience ecosystems.',
    },
    {
        id: 'choose-two',
        title: 'Scalable Campaign Opportunities',
        description: 'Built around sustainable monetization and evolving growth potential.',
    },
    {
        id: 'choose-three',
        title: 'Adaptive Collaboration Structures',
        description: 'Focused on flexibility across changing digital environments.',
    },
    {
        id: 'choose-four',
        title: 'Operational Consistency',
        description: 'Partnership support designed around long-term collaboration and scalability.',
    },
]

export default function ForPublishersChoose() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.for_publishers_choose__top}>
                    <h2 className={styles.for_publishers_choose__title}>
                        Why Publishers Choose Myar
                    </h2>

                    <IconAsterisk/>
                </div>

                <ul className={styles.for_publishers_choose__list}>
                    {list?.map(item => (
                        <li
                            key={item.id}
                            className={styles.for_publishers_choose__item}
                        >
                            <p className="text-style-two text-style--black-75">
                                {item.title}
                            </p>

                            <p className="text-style text-style--black-75">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}