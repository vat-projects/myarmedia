'use client';

import { useState } from 'react';
import clsx from 'clsx';
import styles from './JoinMyarOpportunities.module.scss';
import IconAsterisk from '@/components/icons/IconAsterisk';
import Image from "next/image";

const items = [
    {
        id: 'opportunity-one',
        title: 'Affiliate Partnership Manager',
        description: 'Work with advertisers and publishers while supporting partnership communication, onboarding processes, campaign coordination, and long-term relationship development across active performance environments.',
        list: [
            {
                id: 'opportunity-one-list-one',
                title: 'Managing advertiser and publisher communication',
            },
            {
                id: 'opportunity-one-list-two',
                title: 'Supporting partnership onboarding',
            },
            {
                id: 'opportunity-one-list-three',
                title: 'Monitoring partnership activity',
            },
            {
                id: 'opportunity-one-list-four',
                title: 'Coordinating campaign-related operations',
            },
            {
                id: 'opportunity-one-list-five',
                title: 'Assisting with long-term partnership development',
            },
        ],
    },
    {
        id: 'opportunity-two',
        title: 'Campaign Operations Specialist',
        description:
            'Support operational campaign workflows, performance monitoring processes, and campaign coordination across multiple traffic environments and acquisition channels.',
        list: [
            {
                id: 'opportunity-two-list-one',
                title: 'Campaign monitoring and reporting',
            },
            {
                id: 'opportunity-two-list-two',
                title: 'Operational coordination support',
            },
            {
                id: 'opportunity-two-list-three',
                title: 'Performance environment oversight',
            },
            {
                id: 'opportunity-two-list-four',
                title: 'Traffic activity tracking',
            },
            {
                id: 'opportunity-two-list-five',
                title: 'Optimization process assistance',
            },
        ],
    },
    {
        id: 'opportunity-three',
        title: 'Performance Analytics Coordinator',
        description:
            'Help maintain reporting visibility and support campaign analysis across active performance environments.',
        list: [
            {
                id: 'opportunity-three-list-one',
                title: 'Campaign performance tracking',
            },
            {
                id: 'opportunity-three-list-two',
                title: 'Audience behavior analysis',
            },
            {
                id: 'opportunity-three-list-three',
                title: 'Reporting workflow support',
            },
            {
                id: 'opportunity-three-list-four',
                title: 'Performance monitoring assistance',
            },
            {
                id: 'opportunity-three-list-five',
                title: 'Operational data organization',
            },
        ],
    },
    {
        id: 'opportunity-four',
        title: 'Business Development Associate',
        description:
            'Assist with identifying partnership opportunities and supporting long-term business growth initiatives across evolving performance markets.',
        list: [
            {
                id: 'opportunity-four-list-one',
                title: 'Partnership opportunity research',
            },
            {
                id: 'opportunity-four-list-two',
                title: 'Business communication support',
            },
            {
                id: 'opportunity-four-list-three',
                title: 'Growth initiative coordination',
            },
            {
                id: 'opportunity-four-list-four',
                title: 'Market analysis assistance',
            },
            {
                id: 'opportunity-four-list-five',
                title: 'Operational development support',
            },
        ],
    },
];

export default function JoinMyarOpportunities() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <h2 className={styles.join_myar_opportunities__title}>
                    Current Opportunities
                </h2>
                <div className={styles.join_myar_opportunities__items}>
                    {items.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                        <div
                            key={item.id}
                            className={styles.join_myar_opportunities__item}
                        >
                            <div
                                className={clsx(
                                    styles.join_myar_opportunities__item_inner,
                                    isOpen && styles.join_myar_opportunities__inner_open
                                )}
                            >
                                <button
                                    type="button"
                                    className={styles.join_myar_opportunities__top}
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenId((current) =>
                                            current === item.id ? null : item.id
                                        )
                                    }
                                >
                                    <div>
                                        <p className={styles.join_myar_opportunities__item_title}>
                                            {item.title}
                                        </p>

                                        <p className="text-style text-style--black-75">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className={styles.join_myar_opportunities__icon}>
                                        <Image
                                            src={'/icons/arrow-down.svg'}
                                            alt="Image"
                                            width={15}
                                            height={18}
                                            loading="lazy"
                                        />
                                    </div>
                                </button>

                                <div className={styles.join_myar_opportunities__item_content}>
                                    <div
                                        className={
                                            styles.join_myar_opportunities__item_content_top
                                        }
                                    >
                                        <p
                                            className={`${styles.join_myar_opportunities__item_content_title} text-style-two text-style--black`}>
                                            Responsibilities include:
                                        </p>

                                        <IconAsterisk />
                                    </div>

                                    {item?.list && (
                                        <ul className={styles.join_myar_opportunities__list}>
                                            {item.list.map((listItem) => (
                                                <li
                                                    key={listItem.id}
                                                    className={
                                                        styles.join_myar_opportunities__list_item
                                                    }
                                                >
                                                    <p className="text-style text-style--mobile  text-style--black">
                                                        {listItem.title}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
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
