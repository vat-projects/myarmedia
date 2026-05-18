import styles from './ForAdvertisersApproach.module.scss';

const items = [
    {
        id: 'approach-one',
        description: (
            <>
                Every campaign operates differently depending on <span>audience intent</span>, <span>traffic behavior</span>, and <span>market conditions</span>.
            </>
        ),
    },
    {
        id: 'approach-two',
        description: (
            <>
                We prioritize <span>flexibility</span>, <span>operational consistency</span>, and <span>long-term partnership</span> development over <span>rigid acquisition models</span>.
            </>
        ),
    },
    {
        id: 'approach-three',
        description: (
            <>
                That’s why Myar focuses on building <span>adaptable advertiser solutions</span> designed to support <span>scalable growth opportunities</span> across <span> multiple traffic channels and performance environments</span>.
            </>
        ),
    },
];

export default function ForAdvertisersApproach() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <h2>
                    A Flexible Approach to Performance
                </h2>

                <ul className={styles.for_advertisers_approach__list}>
                    {items?.map((item) => (
                        <li key={item.id} className={styles.for_advertisers_approach__item}>
                            <p className="text-style text-style--white-60">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}