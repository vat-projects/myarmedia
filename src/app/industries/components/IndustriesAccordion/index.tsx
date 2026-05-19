'use client';

import { useState } from 'react';
import clsx from 'clsx';
import styles from './IndustriesAccordion.module.scss';
import Image from 'next/image';

const items = [
    {
        id: 'finance',
        title: 'Finance',
        icon: 'industries-one.svg',
        description:
            'Performance campaigns focused on audience acquisition, lead generation, and scalable growth across finance-related markets.',
    },
    {
        id: 'technology',
        title: 'Technology',
        icon: 'industries-two.svg',
        description:
            'Acquisition strategies built for technology brands seeking scalable user growth, product adoption, and performance-driven audience engagement.',
    },
    {
        id: 'health-wellness',
        title: 'Health & Wellness',
        icon: 'industries-three.svg',
        description:
            'Campaign environments adapted to health and wellness audiences, focused on compliant acquisition flows and long-term engagement opportunities.',
    },
    {
        id: 'education',
        title: 'Education',
        icon: 'industries-four.svg',
        description:
            'Performance partnerships designed to connect education providers with targeted audiences through structured lead generation and enrollment-focused campaigns.',
    },
    {
        id: 'entertainment',
        title: 'Entertainment',
        icon: 'industries-five.svg',
        description:
            'Traffic and audience strategies tailored to entertainment verticals, supporting content discovery, subscription growth, and engagement-driven acquisition.',
    },
    {
        id: 'real-estate',
        title: 'Real Estate',
        icon: 'industries-six.svg',
        description:
            'Lead-focused campaign structures built for real estate markets, connecting advertisers with qualified audiences across property and investment segments.',
    },
    {
        id: 'travel',
        title: 'Travel',
        icon: 'industries-seven.svg',
        description:
            'Performance campaigns aligned with travel audience behavior, seasonal demand patterns, and booking-focused acquisition objectives.',
    },
    {
        id: 'e-commerce',
        title: 'E-Commerce',
        icon: 'industries-eight.svg',
        description:
            'Scalable acquisition environments for e-commerce brands focused on conversion performance, customer acquisition, and revenue-driven traffic growth.',
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        icon: 'industries-nine.svg',
        description:
            'User acquisition strategies designed for mobile app growth, install campaigns, and performance-focused engagement across app ecosystems.',
    },
    {
        id: 'gaming',
        title: 'Gaming',
        icon: 'industries-ten.svg',
        description:
            'Campaign frameworks adapted to gaming audiences, supporting player acquisition, retention-focused traffic, and scalable monetization opportunities.',
    },
    {
        id: 'software-saas',
        title: 'Software & SaaS',
        icon: 'industries-eleven.svg',
        description:
            'B2B and SaaS-focused performance environments built around trial generation, subscription growth, and qualified lead acquisition strategies.',
    },
    {
        id: 'consumer-services',
        title: 'Consumer Services',
        icon: 'industries-twelve.svg',
        description:
            'Audience acquisition solutions for consumer service brands seeking scalable reach, localized targeting, and conversion-oriented campaign structures.',
    },
    {
        id: 'business-services',
        title: 'Business Services',
        icon: 'industries-thirteen.svg',
        description:
            'Partnership environments designed for business service providers focused on qualified lead flow, B2B acquisition, and long-term client growth.',
    },
    {
        id: 'digital-products',
        title: 'Digital Products',
        icon: 'industries-fourteen.svg',
        description:
            'Performance campaigns supporting digital product brands through targeted traffic, conversion optimization, and scalable audience development.',
    },
    {
        id: 'media-content-platforms',
        title: 'Media & Content Platforms',
        icon: 'industries-fifteen.svg',
        description:
            'Traffic strategies built for media and content platforms, focused on audience growth, engagement metrics, and platform-specific acquisition goals.',
    },
    {
        id: 'lifestyle-brands',
        title: 'Lifestyle Brands',
        icon: 'industries-sixteen.svg',
        description:
            'Brand-aligned acquisition campaigns for lifestyle verticals, connecting advertisers with audiences through performance-driven engagement strategies.',
    },
    {
        id: 'subscription-services',
        title: 'Subscription Services',
        icon: 'industries-seventeen.svg',
        description:
            'Recurring-revenue focused campaigns designed to support subscription sign-ups, retention-oriented traffic, and scalable membership growth.',
    },
    {
        id: 'online-platforms',
        title: 'Online Platforms',
        icon: 'industries-eighteen.svg',
        description:
            'Scalable performance environments for online platforms seeking user growth, marketplace expansion, and adaptable acquisition across digital ecosystems.',
    },
];

export default function IndustriesAccordion() {
    const [openId, setOpenId] = useState<string | null>('finance');

    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.industries_accordion__items}>
                    {items.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                            <div
                                key={item.id}
                                className={clsx(
                                    styles.industries_accordion__item,
                                    isOpen && styles.industries_accordion__item_open
                                )}
                            >
                                <button
                                    type="button"
                                    className={styles.industries_accordion__top}
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenId((current) =>
                                            current === item.id ? null : item.id
                                        )
                                    }
                                >
                                    <div className={styles.industries_accordion__head}>
                                        <Image
                                            src={`/home/${item.icon}`}
                                            alt=""
                                            width={24}
                                            height={24}
                                            loading="lazy"
                                        />
                                        <p className={styles.industries_accordion__title}>
                                            {item.title}
                                        </p>
                                    </div>

                                    <div className={styles.industries_accordion__icon}>
                                        <Image
                                            src="/icons/arrow-down.svg"
                                            alt=""
                                            width={15}
                                            height={18}
                                            loading="lazy"
                                        />
                                    </div>
                                </button>

                                <div className={styles.industries_accordion__content}>
                                    <p className="text-style text-style--black-75">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
