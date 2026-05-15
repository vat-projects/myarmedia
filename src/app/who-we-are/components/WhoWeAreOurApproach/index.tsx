import styles from './WhoWeAreOurApproach.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

const list = [
    {
        id: 'our-approach-one',
        title: 'Partnership-First Thinking',
        description: 'We focus on building long-term collaboration opportunities instead of short-term campaign cycles.',
    },
    {
        id: 'our-approach-two',
        title: 'Scalable Growth Environment',
        description: 'Our network is designed to support campaign expansion across multiple traffic channels and market segments.',
    },
    {
        id: 'our-approach-three',
        title: 'Adaptive Campaign Structures',
        description: 'We continuously refine partnership strategies to align with changing audience behavior and performance trends.',
    },
    {
        id: 'our-approach-four',
        title: 'Operational Transparency',
        description: 'Clear communication and consistent collaboration remain central to the way we work.\n',
    },
]

export default function WhoWeAreOurApproach() {
    return (
        <section className="section-bottom-space-100">
            <div className={`${styles.who_our_approach__container} container`}>
                <div>
                    <div className={styles.who_our_approach__top}>
                        <h2 className={styles.who_our_approach__title}>
                            What Makes Our Approach Different
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <ul className={styles.who_our_approach__list}>
                        {list?.map(item => (
                            <li
                                key={item.id}
                                className={styles.who_our_approach__item}
                            >
                                <p className={styles.who_our_approach__item_title}>
                                    {item.title}
                                </p>

                                <p className="text-style text-style--black-75">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.who_our_approach__image}>
                    <Image
                        src={'/who-we-are/our-approach.png'}
                        alt="Image"
                        width={295}
                        height={520}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}