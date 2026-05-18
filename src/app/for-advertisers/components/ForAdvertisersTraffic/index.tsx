import styles from './ForAdvertisersTraffic.module.scss';

const items = [
    {
        id: 'traffic-one',
        title: 'Social Traffic',
    },
    {
        id: 'traffic-two',
        title: 'Native Advertising',
    },
    {
        id: 'traffic-three',
        title: 'Search Traffic',
    },
    {
        id: 'traffic-four',
        title: 'Push Campaigns',
    },
    {
        id: 'traffic-five',
        title: 'Display Placements',
    },
    {
        id: 'traffic-six',
        title: 'Mobile Traffic',
    },
    {
        id: 'traffic-seven',
        title: 'Content Distribution',
    },
    {
        id: 'traffic-eight',
        title: 'Retargeting Environments',
    },
];

export default function ForAdvertisersTraffic() {
    return (
        <section className="section-bottom-space-80">
            <div className="container">
                <div className={styles.for_advertiser_traffic__inner}>
                    <div>
                        <h2 className={styles.for_advertiser_traffic__title}>
                            Traffic Environments We Support
                        </h2>

                        <div className={`${styles.for_advertiser_traffic__description} text-style text-style--black-75`}>
                            <p>
                                We work across multiple digital traffic environments designed to help advertisers reach relevant audiences through scalable campaign opportunities.
                            </p>

                            <p>
                                Each traffic strategy is adapted to fit different campaign goals, audience behaviors, and performance expectations.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className={styles.for_advertiser_traffic__list_wrapper}>
                            <ul className={styles.for_advertiser_traffic__list}>
                                {items?.map((item) => (
                                    <li key={item.id} className={styles.for_advertiser_traffic__item}>
                                        <p className="text-style text-style--black-75">
                                            {item.title}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}