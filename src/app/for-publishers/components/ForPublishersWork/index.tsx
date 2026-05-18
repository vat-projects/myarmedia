import styles from './ForPublishersWork.module.scss';

const items = [
    {
        id: 'work-one',
        title: 'Social Communities',
    },
    {
        id: 'work-two',
        title: 'Content Platforms',
    },
    {
        id: 'work-three',
        title: 'Search-Based Traffic',
    },
    {
        id: 'work-four',
        title: 'Mobile Audiences',
    },
    {
        id: 'work-five',
        title: 'Push Environments',
    },
    {
        id: 'work-six',
        title: 'Display Placements',
    },
    {
        id: 'work-seven',
        title: 'Native Content',
    },
    {
        id: 'work-eight',
        title: 'Retargeting Traffic',
    },
    {
        id: 'work-nine',
        title: 'Community-Driven Platforms',
    },
];

export default function ForPublishersWork() {
    return (
        <section className="section-bottom-space-80">
            <div className="container">
                <div className={styles.for_publisher_work__inner}>
                    <div>
                        <h2 className={styles.for_publisher_work__title}>
                            Traffic Environments We Work With
                        </h2>

                        <div
                            className={`${styles.for_publisher_work__description} text-style text-style--black-75`}>
                                <p>
                                    Different audiences interact differently across every traffic channel.
                                </p>

                                <p>
                                    Our network supports publishers operating across multiple digital environments and
                                    evolving audience ecosystems.
                                </p>
                        </div>
                        <p className="text-style text-style--black-75">
                            Every traffic environment requires a different monetization approach, which is why our partnership structures are designed to remain flexible and adaptable.
                        </p>
                    </div>

                    <div className={styles.for_publisher_work__list_wrapper}>
                        <ul className={styles.for_publisher_work__list}>
                            {items?.map((item) => (
                                <li key={item.id} className={styles.for_publisher_work__item}>
                                    <p className={`${styles.for_publisher_work__item_value} text-style text-style--black-75`}>
                                        {item.title}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}