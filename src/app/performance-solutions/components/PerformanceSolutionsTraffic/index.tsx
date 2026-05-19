'use client';

import { useState } from 'react';
import clsx from 'clsx';
import styles from './PerformanceSolutionsTraffic.module.scss';
import IconAsterisk from '@/components/icons/IconAsterisk';
import Image from "next/image";

const items = [
    {
        id: 'traffic-acquisition',
        title: 'Traffic Acquisition',
        description:
            'Structured traffic deployment solutions designed to expand audience reach and support scalable acquisition opportunities across multiple digital environments.',
        row: [
            {
                id: 'network-one',
                title: 'Multi-Channel Traffic Deployment',
                description:
                    'Coordinated traffic distribution across multiple acquisition channels to improve campaign reach and visibility.',
            },
            {
                id: 'network-two',
                title: 'Audience Reach Expansion',
                description:
                    'Strategies focused on increasing audience exposure and expanding traffic opportunities across targeted segments.',
            },
            {
                id: 'network-three',
                title: 'Geo-Targeted Traffic Distribution',
                description:
                    'Traffic allocation strategies adapted to specific regions, markets, and audience locations.',
            },
            {
                id: 'network-four',
                title: 'Traffic Source Optimization',
                description:
                    'Ongoing refinement of traffic sources to improve acquisition efficiency and campaign performance.',
            },
        ],
    },
    {
        id: 'lead-generation-strategies',
        title: 'Lead Generation Strategies',
        description:
            'Lead-focused acquisition systems designed to improve audience engagement and strengthen conversion opportunities.',
        row: [
            {
                id: 'lead-one',
                title: 'Qualified Lead Acquisition Systems',
                description:
                    'Structured lead generation environments focused on attracting higher-intent audiences.',
            },
            {
                id: 'lead-two',
                title: 'Funnel Structuring & Optimization',
                description:
                    'Development and refinement of lead funnels designed to improve user flow and engagement.',
            },
            {
                id: 'lead-three',
                title: 'Audience Engagement Workflows',
                description:
                    'Engagement-focused processes created to strengthen audience interaction across campaigns.',
            },
            {
                id: 'lead-four',
                title: 'Lead Conversion Flow Development',
                description:
                    'Optimization strategies designed to improve how leads progress through acquisition stages.',
            },
        ],
    },
    {
        id: 'conversion-optimization',
        title: 'Conversion Optimization',
        description:
            'Optimization environments focused on improving engagement efficiency and campaign conversion performance.',
        row: [
            {
                id: 'conversion-one',
                title: 'Conversion Path Optimization',
                description:
                    'Refinement of conversion processes designed to improve campaign efficiency and user interaction flow.',
            },
            {
                id: 'conversion-two',
                title: 'User Interaction Flow Analysis',
                description:
                    'Evaluation of audience behavior patterns to identify optimization opportunities across campaign environments.',
            },
            {
                id: 'conversion-three',
                title: 'Landing Environment Optimization',
                description:
                    'Improvements to landing structures and engagement flow designed to support stronger conversion activity.',
            },
            {
                id: 'conversion-four',
                title: 'Engagement Performance Adjustments',
                description:
                    'Ongoing campaign refinements focused on improving interaction quality and audience response.',
            },
        ],
    },
    {
        id: 'performance-analytics',
        title: 'Performance Analytics',
        description:
            'Performance intelligence systems designed to support campaign visibility and operational decision-making.',
        row: [
            {
                id: 'analytics-one',
                title: 'Real-Time Performance Intelligence',
                description:
                    'Continuous monitoring of campaign activity and performance behavior across traffic environments.',
            },
            {
                id: 'analytics-two',
                title: 'Audience Behavior Insights',
                description:
                    'Analysis of audience interaction patterns designed to support optimization and targeting improvements.',
            },
            {
                id: 'analytics-three',
                title: 'Campaign Activity Reporting',
                description:
                    'Structured reporting environments providing visibility into campaign performance and operational metrics.',
            },
            {
                id: 'analytics-four',
                title: 'Traffic Performance Monitoring',
                description:
                    'Ongoing analysis of traffic quality, engagement trends, and acquisition activity.',
            },
        ],
    },
    {
        id: 'campaign-scaling',
        title: 'Campaign Scaling',
        description:
            'Scalable operational frameworks designed to support campaign expansion across evolving traffic ecosystems.',
        row: [
            {
                id: 'scaling-one',
                title: 'Cross-Channel Performance Expansion',
                description:
                    'Strategies designed to support campaign growth across multiple traffic channels and acquisition environments.',
            },
            {
                id: 'scaling-two',
                title: 'Audience Scaling Strategies',
                description:
                    'Structured scaling approaches focused on expanding audience reach while maintaining campaign efficiency.',
            },
            {
                id: 'scaling-three',
                title: 'Operational Growth Optimization',
                description:
                    'Performance-focused operational refinements designed to support scalable campaign development.',
            },
            {
                id: 'scaling-four',
                title: 'Performance Infrastructure Scaling',
                description:
                    'Expansion strategies focused on supporting larger campaign environments and growing traffic operations.',
            },
        ],
    },
    {
        id: 'growth-challenges',
        title: 'Growth Creates New Challenges',
        description: 'Scaling campaigns changes the entire performance environment.',
        list: [
            {
                id: 'growth-list-one',
                title: 'More traffic',
                value: 'harder audience alignment',
            },
            {
                id: 'growth-list-two',
                title: 'More reach',
                value: 'more complex optimization',
            },
            {
                id: 'growth-list-three',
                title: 'More campaigns',
                value: 'less operational visibility',
            },
            {
                id: 'growth-list-four',
                title: 'More growth',
                value: 'higher performance pressure',
            },
        ],
        itemDescription: [
            'Without the right operational structure, campaign efficiency becomes harder to maintain over time.',
            'Myar helps advertisers and publishers build scalable performance environments designed to support growth, optimization, control, and long-term operational stability across evolving traffic ecosystems.',
        ],
    },
    {
        id: 'revenue-growth-systems',
        title: 'Revenue Growth Systems',
        description:
            'Structured monetization environments focused on scalable revenue development and operational efficiency.',
        row: [
            {
                id: 'revenue-one',
                title: 'Revenue Performance Structuring',
                description:
                    'Revenue-focused operational frameworks designed to support scalable monetization opportunities.',
            },
            {
                id: 'revenue-two',
                title: 'Monetization Flow Optimization',
                description:
                    'Optimization strategies focused on improving monetization efficiency across traffic environments.',
            },
            {
                id: 'revenue-three',
                title: 'Partnership Revenue Expansion',
                description:
                    'Growth-oriented partnership structures designed to support long-term revenue opportunities.',
            },
            {
                id: 'revenue-four',
                title: 'Long-Term Performance Development',
                description:
                    'Scalable operational strategies focused on supporting sustainable business and revenue growth.',
            },
        ],
    },
];

export default function PerformanceSolutionsTraffic() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.performance_solutions_traffic__items}>
                    {items.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                        <div
                            key={item.id}
                            className={styles.performance_solutions_traffic__item}
                        >
                            <div
                                className={clsx(
                                    styles.performance_solutions_traffic__item_inner,
                                    isOpen && styles.performance_solutions_traffic__inner_open
                                )}
                            >
                                <button
                                    type="button"
                                    className={styles.performance_solutions_traffic__top}
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenId((current) =>
                                            current === item.id ? null : item.id
                                        )
                                    }
                                >
                                    <div>
                                        <p className={styles.performance_solutions_traffic__title}>
                                            {item.title}
                                        </p>

                                        <p className="text-style text-style--black-75">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className={styles.performance_solutions_traffic__icon}>
                                        <Image
                                            src={'/icons/arrow-down.svg'}
                                            alt="Image"
                                            width={15}
                                            height={18}
                                            loading="lazy"
                                        />
                                    </div>
                                </button>

                                <div className={styles.performance_solutions_traffic__item_content}>
                                    <div
                                        className={
                                            styles.performance_solutions_traffic__item_content_top
                                        }
                                    >
                                        <p
                                            className={`${styles.performance_solutions_traffic__item_content_title} text-style-two text-style--black`}>
                                            Included Solutions
                                        </p>

                                        <IconAsterisk />
                                    </div>

                                    {item?.row && (
                                        <ul className={styles.performance_solutions_traffic__row}>
                                            {item.row.map((row) => (
                                                <li
                                                    key={row.id}
                                                    className={styles.performance_solutions_traffic__row_item}
                                                >
                                                    <p
                                                        className={
                                                            styles.performance_solutions_traffic__row_item_title
                                                        }
                                                    >
                                                        {row.title}
                                                    </p>

                                                    <p className="text-style text-style--black-75">
                                                        {row.description}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {item?.list && (
                                        <ul className={styles.performance_solutions_traffic__list}>
                                            {item.list.map((listItem) => (
                                                <li
                                                    key={listItem.id}
                                                    className={
                                                        styles.performance_solutions_traffic__list_item
                                                    }
                                                >
                                                    <p className="text-style text-style--black">
                                                        {listItem.title}
                                                    </p>
                                                    <div className={styles.performance_solutions_traffic__list_item_icon}>
                                                        <Image
                                                            src={'/icons/arrow-down.svg'}
                                                            alt="Image"
                                                            width={15}
                                                            height={18}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <p className="text-style text-style--black-75">
                                                        {listItem.value}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {item?.itemDescription && (
                                        <div
                                            className={styles.performance_solutions_traffic__item_descriptions}
                                        >
                                            {item.itemDescription.map((text, index) => (
                                                <p
                                                    key={`${item.id}-description-${index}`}
                                                    className="text-style text-style--black-75"
                                                >
                                                    {text}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
