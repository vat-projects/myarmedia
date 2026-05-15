import styles from './HomeBuiltFor.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import clsx from "clsx";

const items = [
    {
        id: 'built-for-one',
        title: 'Built for Advertisers',
        description: [
            'We help advertisers launch scalable campaigns focused on quality traffic, stronger conversions, and long-term performance growth.',
            'From traffic acquisition to campaign optimization, our solutions are built to maximize efficiency and improve measurable ROI across multiple traffic channels and audience segments.',
            'Our advertiser partnerships are supported through performance analytics, traffic optimization, and scalable campaign strategies tailored to specific business goals and industries.',
        ],
        linkTitle: 'Advertise With Us',
        linkUrl: 'for-advertisers',
    },
    {
        id: 'built-for-two',
        title: 'Built for Publishers',
        description: [
            'Monetize your traffic with high-converting campaigns, flexible payout structures, and access to trusted advertiser partnerships.',
            'We support publishers with scalable affiliate opportunities, real-time performance insights, and long-term revenue-focused collaboration designed to maximize traffic value and campaign stability.',
            'Whether you work with social traffic, display advertising, SEO, push traffic, or other channels, our network is designed to help publishers scale efficiently with performance-focused campaigns.',
        ],
        linkTitle: 'Become a Publisher',
        linkUrl: 'for-publishers',
    },
];

const list = [
    {
        id: 'built-for-list-one',
        title: 'Traffic Acquisition',
    },
    {
        id: 'built-for-list-two',
        title: 'Lead Generation Strategies',
    },
    {
        id: 'built-for-list-three',
        title: 'Conversion Optimization',
    },
    {
        id: 'built-for-list-four',
        title: 'Performance Analytics',
    },
    {
        id: 'built-for-list-five',
        title: 'Campaign Scaling',
    },
    {
        id: 'built-for-list-six',
        title: 'Revenue Growth Systems',
    },
]

export default function HomeBuiltFor() {
    return (
        <div className="section-bottom-space-80">
            <div className={`${styles.home_built_for__container} container`}>
                <div className={styles.home_built_for__image}>
                    <Image
                        src={'/home/built-one.png'}
                        alt="Image"
                        width={715}
                        height={964}
                        loading="lazy"
                    />
                </div>
                <div className={styles.home_built_for__right}>
                    {items?.map((item, index) => (
                        <div key={item.id}
                             className={`${styles.home_built_for__item} ${styles.home_built_for__item_space_32}`}>
                            <div className={styles.home_built_for__item_top}>
                                <h2 className={styles.home_built_for__item_title}>
                                    {item.title}
                                </h2>

                                <Image
                                    src={'/home/built-icon.svg'}
                                    alt="Image"
                                    width={32}
                                    height={32}
                                    loading="lazy"
                                />
                            </div>
                            <div
                                className={`${styles.home_built_for__item_description} text-style text-style--black-75`}>
                                {item.description.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </div>
                            <div className={clsx(
                                styles.home_built_for__item_link_wrapper,
                                index === 0 && 'text-right'
                            )}>
                                <Button
                                    style={"secondary"}
                                    href={`/${item.linkUrl}`}
                                    icon
                                    className={styles.home_built_for__item_link}>
                                    {item.linkTitle}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.home_built_for__item} ${styles.home_built_for__item_space_24}`}>
                    <div className={styles.home_built_for__item_top}>
                        <h2 className={styles.home_built_for__item_title}>
                            Performance Solutions
                        </h2>

                        <Image
                            src={'/home/built-icon.svg'}
                            alt="Image"
                            width={32}
                            height={32}
                            loading="lazy"
                        />
                    </div>

                    <p className={`${styles.home_built_for__item_description} text-style text-style--black-75`}>
                        Our performance solutions are designed to improve traffic efficiency, optimize conversions, and
                        support scalable campaign growth across multiple industries and traffic channels.
                    </p>

                    <ul className={styles.home_built_for__item_list}>
                        {list?.map(item => (
                            <li
                                key={item.id}
                                className={`${styles.home_built_for__item_list_item} text-style text-style--black-75`}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    <p className={`${styles.home_built_for__item_description} text-style text-style--black-75`}>
                        We continuously analyze campaign performance to identify opportunities to improve conversion
                        rates, strengthen audience engagement, and increase revenue potential.
                    </p>

                    <div className={styles.home_built_for__item_link_wrapper}>
                        <Button
                            style={"secondary"}
                            href={'/performance-solutions'}
                            icon
                            className={styles.home_built_for__item_link}>
                            Explore Solutions
                        </Button>
                    </div>
                </div>

                <div className={styles.home_built_for__image}>
                    <Image
                        src={'/home/built-two.png'}
                        alt="Image"
                        width={499}
                        height={460}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}