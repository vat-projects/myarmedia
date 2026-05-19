import styles from './QualityComplianceInfo.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import IconAsterisk from "@/components/icons/IconAsterisk";

const items = [
    {
        id: 'built-for-one',
        title: 'Built Around Traffic Quality',
        description: [
            'Traffic quality affects everything — campaign stability, audience engagement, conversion flow, and long-term performance potential.',
            'That’s why we continuously review traffic activity, campaign behavior, and engagement patterns across active partnership environments.',
            'We focus on maintaining performance environments designed for reliability, scalability, and operational consistency.',
        ],
        list: null,
    },
    {
        id: 'built-for-two',
        title: 'A More Structured Partnership Environment',
        description: [
            'Strong performance partnerships require more than campaign launches and traffic delivery.',
            'Myar focuses on maintaining organized operational workflows, transparent communication, and clear partnership coordination across advertisers, publishers, and traffic environments.',
        ],
        list: [
            'Clear operational communication',
            'Stable campaign environments',
            'Consistent partnership workflows',
            'Ongoing performance oversight',
        ],
    },
];

const list = [
    {
        id: 'built-for-list-one',
        title: 'Campaign activity review',
    },
    {
        id: 'built-for-list-two',
        title: 'Traffic consistency checks',
    },
    {
        id: 'built-for-list-three',
        title: 'Audience engagement monitoring',
    },
    {
        id: 'built-for-list-four',
        title: 'Performance environment analysis',
    },
    {
        id: 'built-for-list-five',
        title: 'Operational tracking processes',
    },
]

export default function QualityComplianceInfo() {
    return (
        <div className="section-bottom-space-100">
             <div className={`${styles.quality_compliance_info__container} container`}>
                <div className={styles.quality_compliance_info__image}>
                    <Image
                        src={'/quality-compliance/info-one.png'}
                        alt="Image"
                        width={715}
                        height={895}
                        loading="lazy"
                    />
                </div>
                <div className={styles.quality_compliance_info__right}>
                    {items?.map(item => (
                        <div key={item.id}
                             className={`${styles.quality_compliance_info__item} ${styles.quality_compliance_info__item_space_32}`}>
                            <div className={styles.quality_compliance_info__item_top}>
                                <h2 className={styles.quality_compliance_info__item_title}>
                                    {item.title}
                                </h2>

                                <IconAsterisk/>
                            </div>
                            <div
                                className={`${styles.quality_compliance_info__item_description} text-style text-style--black-75`}>
                                {item.description.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </div>

                            {item.list && (
                                <div>
                                    <p className={styles.quality_compliance_info__priority_title}>
                                        What We Prioritize
                                    </p>
                                    <ul
                                        className={styles.quality_compliance_info__priority}>
                                        {item.list.map((text, index) => (
                                            <li key={index}
                                                className={styles.quality_compliance_info__priority_item}>
                                                <p className="text-style text-style--black-75">
                                                    {text}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div
                    className={`${styles.quality_compliance_info__item} ${styles.quality_compliance_info__item_space_24}`}>
                    <div className={styles.quality_compliance_info__item_top}>
                        <h2 className={styles.quality_compliance_info__item_title}>
                            Continuous Campaign Oversight
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div className={styles.quality_compliance_info__item_description}>
                        <p className="text-style text-style--black-75">
                            Digital traffic environments change constantly.
                        </p>

                        <p className="text-style text-style--black-75">
                            Audience behavior shifts, traffic activity fluctuates, and campaign conditions evolve across
                            different channels and markets.
                        </p>

                        <p className="text-style text-style--black-75">
                            Our team continuously monitors operational activity to help maintain stable performance
                            conditions across active campaigns and partnership structures.
                        </p>
                    </div>

                    {list?.length > 0 && (
                       <>
                            <p className={styles.quality_compliance_info__includes_title}>
                                Operational Monitoring Includes
                            </p>

                            <ul className={styles.quality_compliance_info__item_list}>
                                {list.map(item => (
                                    <li
                                        key={item.id}
                                        className={`${styles.quality_compliance_info__item_list_item} text-style text-style--black-75`}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                       </>
                    )}
                </div>

                <div className={styles.quality_compliance_info__image}>
                    <Image
                        src={'/quality-compliance/info-two.png'}
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