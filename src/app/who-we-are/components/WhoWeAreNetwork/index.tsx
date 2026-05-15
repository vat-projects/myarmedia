import styles from './WhoWeAreNetwork.module.scss';
import IconAsterisk from "@/components/icons/IconAsterisk";

const list = [
    {
        id: 'network-one',
        title: 'Consistency Over Short-Term Hype',
        description: 'We focus on stable partnership development and long-term operational value.',
    },
    {
        id: 'network-two',
        title: 'Scalability Through Structure',
        description: 'Our systems are designed to support campaign expansion without compromising performance stability.',
    },
    {
        id: 'network-three',
        title: 'Flexible Collaboration',
        description: 'Different business models require different partnership approaches — flexibility remains essential to our process.',
    },
    {
        id: 'network-four',
        title: 'Continuous Development',
        description: 'We continue refining strategies, workflows, and campaign structures to align with evolving performance standards.',
    },
]

export default function WhoWeAreNetwork() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.home_partnership_process__inner}>
                    <div className={styles.home_partnership_process__top}>
                        <h2 className={styles.home_partnership_process__title}>
                            The Principles Behind Our Network
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <ul className={styles.home_partnership_process__list}>
                        {list?.map(item => (
                            <li
                                key={item.id}
                                className={styles.home_partnership_process__item}
                            >
                                <p className={styles.home_partnership_process__item_title}>
                                    {item.title}
                                </p>

                                <p className="text-style text-style--black-75">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}