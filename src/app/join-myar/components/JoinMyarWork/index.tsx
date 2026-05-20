import styles from './JoinMyarWork.module.scss';

const items = [
    {
        id: 'work-one',
        title: 'Affiliate Partnerships',
    },
    {
        id: 'work-two',
        title: 'Campaign Operations',
    },
    {
        id: 'work-three',
        title: 'Traffic Management',
    },
    {
        id: 'work-four',
        title: 'Performance Analytics',
    },
    {
        id: 'work-five',
        title: 'Business Development',
    },
    {
        id: 'work-six',
        title: 'Account Management',
    },
    {
        id: 'work-seven',
        title: 'Creative Strategy',
    },
    {
        id: 'work-eight',
        title: 'Operational Support',
    },
    {
        id: 'work-nine',
        title: 'Market Research',
    },
    {
        id: 'work-ten',
        title: 'Growth Strategy',
    },
];

export default function JoinMyarWork() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.join_myar_work__inner}>
                    <div>
                        <h2 className={styles.join_myar_work__title}>
                            Areas We Work In
                        </h2>

                        <p className={`${styles.join_myar_work__description} text-style text-style--black-75`}>
                            Our team operates across different areas of affiliate marketing, campaign operations, and digital performance management.
                        </p>
                    </div>

                    <div className={styles.join_myar_work__list_wrapper}>
                        <ul className={styles.join_myar_work__list}>
                            {items?.map((item) => (
                                <li key={item.id} className={styles.join_myar_work__item}>
                                    <p className={`${styles.join_myar_work__item_value} text-style text-style--black-75`}>
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