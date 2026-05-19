'use client';

import { useState } from 'react';
import clsx from 'clsx';
import styles from './CaseStudiesInfo.module.scss';
import IconAsterisk from '@/components/icons/IconAsterisk';
import Image from "next/image";
import Button from "@/components/Button";
import ImageBg from "@/components/ImageBg";

const items = [
    {
        id: 'traffic-acquisition',
        title: 'Scaling Audience Acquisition for a Finance Campaign',
        overviewDescription: [
            'A finance-focused advertiser was looking to improve lead consistency while expanding acquisition opportunities across multiple traffic environments.',
            'The existing campaign structure generated unstable performance across different traffic channels, making long-term scaling more difficult. Audience engagement varied significantly between traffic sources, while acquisition efficiency became less predictable during campaign expansion periods.',
            'The advertiser needed a more stable operational structure capable of supporting scalable audience acquisition without sacrificing traffic quality or campaign visibility.'
        ],
        focus: {
            description: 'Myar worked on refining traffic deployment strategies and restructuring audience acquisition processes to support more stable campaign activity.',
            areas: [
                'Traffic source optimization',
                'Audience targeting refinement',
                'Lead flow restructuring',
                'Campaign monitoring adjustments',
                'Conversion path evaluation',
                'Traffic consistency analysis'
            ],
        },
        solutions: [
            {
                id: 'network-one',
                title: 'Traffic Acquisition',
                description:
                    'Used to improve traffic consistency and support scalable audience expansion across multiple acquisition environments.',
            },
            {
                id: 'network-two',
                title: 'Lead Generation Strategies',
                description:
                    'Applied to strengthen lead flow structure, audience engagement, and acquisition quality.',
            },
            {
                id: 'network-three',
                title: 'Conversion Optimization',
                description:
                    'Focused on improving conversion efficiency and refining user interaction flow across campaign environments.',
            },
            {
                id: 'network-four',
                title: 'Performance Analytics',
                description:
                    'Used to monitor campaign visibility, audience behavior, and operational performance consistency.',
            },
        ],
        outcome: {
            description: [
                'The updated campaign environment delivered stronger operational consistency across active traffic channels while improving audience alignment and acquisition scalability.',
                'The advertiser achieved improved lead stability, more reliable campaign visibility, and a more adaptable acquisition structure that supports long-term growth in changing traffic environments.',
            ],
            linkTitle: 'Discuss a Similar Acquisition Challenge',
        },
    },
    {
        id: 'content-platform-monetization',
        title: 'Improving Monetization Performance for a Content Platform',
        overviewDescription: [
            'A digital content platform was looking to strengthen monetization opportunities while maintaining stable audience engagement across multiple traffic sources.',
            'The platform experienced inconsistent monetization performance due to fluctuating audience interaction patterns and uneven traffic value across different acquisition environments.',
            'The objective focused on improving monetization flow, optimizing operational visibility, and creating a more scalable revenue-focused structure capable of supporting long-term traffic growth.',
        ],
        focus: {
            description:
                'Myar helped optimize monetization workflows and improve audience engagement visibility across active campaign environments.',
            areas: [
                'Monetization flow optimization',
                'Audience engagement evaluation',
                'Traffic performance monitoring',
                'Revenue structure adjustments',
                'Engagement pattern analysis',
                'Operational performance tracking',
            ],
        },
        solutions: [
            {
                id: 'content-revenue-one',
                title: 'Revenue Growth Systems',
                description:
                    'Applied to improve monetization structure, revenue scalability, and long-term operational efficiency across active traffic environments.',
            },
            {
                id: 'content-analytics-two',
                title: 'Performance Analytics',
                description:
                    'Used to strengthen campaign visibility, monitor engagement trends, and improve operational performance tracking.',
            },
            {
                id: 'content-conversion-three',
                title: 'Conversion Optimization',
                description:
                    'Focused on improving audience interaction flow and increasing monetization efficiency across campaign environments.',
            },
            {
                id: 'content-scaling-four',
                title: 'Campaign Scaling',
                description:
                    'Used to support scalable monetization development across growing audience segments and evolving traffic activity.',
            },
        ],
        outcome: {
            description: [
                'The platform achieved improved monetization efficiency, stronger operational visibility, and more stable long-term revenue performance across active campaigns.',
                'Campaign activity became more scalable across different audience segments, while traffic performance consistency improved through ongoing operational optimization and performance monitoring processes.',
            ],
            linkTitle: 'Build a Smarter Monetization Strategy',
        },
    },
    {
        id: 'ecommerce-campaign-reach',
        title: 'Expanding Campaign Reach for an E-Commerce Brand',
        overviewDescription: [
            'An e-commerce campaign required a broader audience reach and more adaptable acquisition strategies to support ongoing growth objectives across competitive digital markets.',
            'The existing campaign structure performed well within limited audience segments but lacked the operational flexibility needed for scalable expansion across additional traffic environments.',
            'The business required a more structured acquisition environment capable of supporting audience growth while maintaining campaign efficiency across multiple channels.',
        ],
        focus: {
            description:
                'Myar helped restructure traffic deployment processes and optimize campaign flow to support scalable audience expansion opportunities.',
            areas: [
                'Cross-channel traffic deployment',
                'Audience scaling strategies',
                'Conversion flow optimization',
                'Campaign performance analysis',
                'Traffic environment refinement',
                'Operational growth adjustments',
            ],
        },
        solutions: [
            {
                id: 'ecommerce-traffic-one',
                title: 'Traffic Acquisition',
                description:
                    'Applied to expand audience reach and improve traffic distribution across multiple acquisition channels.',
            },
            {
                id: 'ecommerce-scaling-two',
                title: 'Campaign Scaling',
                description:
                    'Used to support scalable campaign expansion while maintaining operational consistency across growing traffic environments.',
            },
            {
                id: 'ecommerce-conversion-three',
                title: 'Conversion Optimization',
                description:
                    'Focused on refining conversion flow and improving audience interaction efficiency during campaign scaling.',
            },
            {
                id: 'ecommerce-analytics-four',
                title: 'Performance Analytics',
                description:
                    'Used to improve campaign visibility, monitor traffic behavior, and support operational performance adjustments.',
            },
        ],
        outcome: {
            description: [
                'The campaign environment achieved stronger audience reach, improved operational flexibility, and more scalable acquisition opportunities across multiple traffic channels.',
                'The advertiser gained better visibility into campaign activity while improving traffic consistency and audience engagement performance during scaling periods.',
            ],
            linkTitle: 'Explore Scalable Growth Opportunities',
        },
    },
    {
        id: 'mobile-app-user-growth',
        title: 'Supporting User Growth for a Mobile App Campaign',
        overviewDescription: [
            'A mobile-focused digital product required scalable user acquisition strategies capable of adapting to changing traffic behavior and evolving audience engagement trends.',
            'The campaign environment needed stronger operational coordination between acquisition activity, engagement flow, and user retention performance across mobile traffic environments.',
            'The primary objective focused on creating a more stable acquisition structure while improving scalability across active mobile campaign channels.',
        ],
        focus: {
            description:
                'Myar worked on improving acquisition flow visibility and refining operational performance structures across active campaign environments.',
            areas: [
                'Mobile traffic optimization',
                'User acquisition structuring',
                'Engagement flow improvements',
                'Operational performance tracking',
                'Audience behavior analysis',
                'Campaign scalability refinement',
            ],
        },
        solutions: [
            {
                id: 'mobile-traffic-one',
                title: 'Traffic Acquisition',
                description:
                    'Applied to improve mobile audience reach and support scalable user acquisition across active traffic environments.',
            },
            {
                id: 'mobile-analytics-two',
                title: 'Performance Analytics',
                description:
                    'Used to monitor audience behavior, acquisition activity, and operational performance across mobile campaign channels.',
            },
            {
                id: 'mobile-scaling-three',
                title: 'Campaign Scaling',
                description:
                    'Focused on supporting scalable campaign expansion while maintaining acquisition consistency and operational visibility.',
            },
            {
                id: 'mobile-conversion-four',
                title: 'Conversion Optimization',
                description:
                    'Used to improve engagement flow, audience interaction quality, and overall acquisition efficiency across mobile-focused environments.',
            },
        ],
        outcome: {
            description: [
                'The campaign achieved more stable user acquisition performance and improved operational scalability across active mobile traffic environments.',
                'Traffic consistency improved while campaign structures became more adaptable to changing audience behavior and acquisition conditions across mobile-focused digital channels.',
            ],
            linkTitle: "Let's Build a Stronger User Acquisition Environment",
        },
    },
];

export default function CaseStudiesInfo() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.case_studies_info__items}>
                    {items?.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                        <div
                            key={item.id}
                            className={styles.case_studies_info__item}
                        >
                            <div
                                className={clsx(
                                    styles.case_studies_info__item_inner,
                                    isOpen && styles.case_studies_info__inner_open
                                )}
                            >
                                <button
                                    type="button"
                                    className={styles.case_studies_info__top}
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenId((current) =>
                                            current === item.id ? null : item.id
                                        )
                                    }
                                >
                                    <p className={styles.case_studies_info__title}>
                                        {item.title}
                                    </p>

                                    <div className={styles.case_studies_info__icon}>
                                        <Image
                                            src={'/icons/arrow-down.svg'}
                                            alt="Image"
                                            width={15}
                                            height={18}
                                            loading="lazy"
                                        />
                                    </div>
                                </button>

                                <div className={styles.case_studies_info__item_content}>
                                    {item?.overviewDescription && (
                                        <div className={styles.case_studies_info__overview}>
                                            <div className={styles.case_studies_info__overview_icon}>
                                                <Image
                                                    src={'/case-studies/info-overview.svg'}
                                                    alt="Image"
                                                    width={193}
                                                    height={177}
                                                    loading="lazy"
                                                />
                                            </div>

                                            <div className={styles.case_studies_info__overview_top}>
                                                <div className={styles.case_studies_info__overview_image}>
                                                    <Image
                                                        src={'/icons/icon-eye.svg'}
                                                        alt="Image"
                                                        width={30}
                                                        height={20}
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <p className={styles.case_studies_info__overview_title}>
                                                    Overview
                                                </p>
                                            </div>


                                            <div className={styles.case_studies_info___overview_description}>
                                                {item.overviewDescription.map((row, index) => (
                                                    <p
                                                        key={index}
                                                        className="text-style text-style--black-75"
                                                    >
                                                        {row}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {item?.focus && (
                                        <div className={styles.case_studies_info__focus}>
                                            <div className={styles.case_studies_info__focus_top}>
                                                <div className={styles.case_studies_info__focus_top_left}>
                                                    <div className={styles.case_studies_info__overview_image}>
                                                    <Image
                                                            src={'/icons/icon-crosshair-simple.svg'}
                                                            alt="Image"
                                                            width={26}
                                                            height={26}
                                                            loading="lazy"
                                                        />
                                                    </div>

                                                    <p className={styles.case_studies_info__overview_title}>
                                                        Operational Focus
                                                    </p>
                                                </div>

                                                <IconAsterisk/>
                                            </div>

                                            <p className="text-style text-style--black-75">
                                                {item.focus?.description}
                                            </p>

                                            {item.focus?.areas && (
                                                <div>
                                                    <p className={styles.case_studies_info__focus_area_title}>
                                                        Areas of Focus
                                                    </p>

                                                    <ul className={styles.case_studies_info__focus_list}>
                                                        {item.focus.areas.map((row, index) => (
                                                            <li
                                                                key={index}
                                                                className={styles.case_studies_info__focus_item}
                                                            >
                                                                <p className="text-style text-style--black-75">
                                                                    {row}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {item?.solutions && (
                                        <div className={styles.case_studies_info__solutions}>
                                            <div className={styles.case_studies_info__solutions_top}>
                                                <p className={styles.case_studies_info__overview_title}>
                                                    Solutions That Supported This Campaign
                                                </p>

                                                <IconAsterisk/>
                                            </div>

                                            <ul className={styles.case_studies_info__solutions_list}>
                                                {item.solutions?.map((row) => (
                                                    <li
                                                        key={row.id}
                                                        className={styles.case_studies_info__solutions_item}
                                                    >
                                                        <p
                                                            className={
                                                                styles.case_studies_info__solutions_item_title
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
                                        </div>
                                    )}

                                    {item?.outcome && (
                                        <div className={styles.case_studies_info__outcome}>
                                            <div className={styles.case_studies_info__outcome_icon}>
                                                <Image
                                                    src={'/case-studies/info.svg'}
                                                    alt="Image"
                                                    width={183}
                                                    height={183}
                                                    loading="lazy"
                                                />
                                            </div>

                                            <ImageBg size={820}/>

                                            <div className={styles.case_studies_info__outcome_top}>
                                                <div className={styles.case_studies_info__overview_image}>
                                                    <Image
                                                        src={'/icons/icon-chart-bar.svg'}
                                                        alt="Image"
                                                        width={26}
                                                        height={23}
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <p className={styles.case_studies_info__outcome_title}>
                                                    Outcome
                                                </p>
                                            </div>

                                            <div className={styles.case_studies_info__outcome_description}>
                                                {item.outcome.description?.map((row, index) => (
                                                    <p
                                                        key={index}
                                                        className="text-style text-style--white-75"
                                                    >
                                                        {row}
                                                    </p>
                                                ))}
                                            </div>

                                            <div
                                                className={styles.case_studies_info__outcome_btn_wrapper}>
                                                <Button style={'white'} icon
                                                        className={styles.case_studies_info__outcome_btn}
                                                        href={'/get-in-touch'}>
                                                    {item.outcome.linkTitle}
                                                </Button>
                                            </div>
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
