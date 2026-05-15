'use client';

import { useState } from 'react';
import styles from './Header.module.scss';
import SocialList from '@/components/socialList';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Button from "@/components/Button";


const navItems = [
    { text: 'For Advertisers', href: '/for-advertisers' },
    { text: 'For Publishers', href: '/for-publishers' },
    { text: 'Performance Solutions', href: '/performance-solutions' },
    { text: 'Industries', href: '/industries' },
    { text: 'Quality & Compliance', href: '/quality-compliance' },
    { text: 'Case Studies', href: '/case-studies' },
];

export default function Header() {
    const pathname = usePathname();
    const [bottomPanelActive, setBottomPanelActive] = useState(false);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__top}>
                    <Link href={'/'} className={styles.header__logo}>
                        <span className={styles.header__logo_title}>
                             Myar
                        </span>
                        <span className={styles.header__logo_subtitle}>
                            Make it convert
                        </span>
                    </Link>

                    <div className={styles.header__top_contact}>
                        <a href="mailto:info@myar.com">
                            info@myar.com
                        </a>
                        <a href="+447426463899">
                            +447426463899
                        </a>
                    </div>

                    <div className={styles.header__socials}>
                       <SocialList />
                    </div>

                    <div className={styles.header__top_actions}>
                        <Button className={styles.header__btn} href={"/get-in-touch"}>
                            Get in Touch
                        </Button>

                        <button
                            type="button"
                            className={styles.header__btn_open_mobile_menu}
                            aria-expanded={bottomPanelActive}
                            aria-label={bottomPanelActive ? 'Close menu' : 'Open menu'}
                            onClick={() => setBottomPanelActive((open) => !open)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="18" viewBox="0 0 30 18" fill="none">
                                <path
                                    d="M30 8.75C30 9.08152 29.8683 9.39946 29.6339 9.63388C29.3995 9.86831 29.0815 10 28.75 10H1.25C0.918479 10 0.600537 9.86831 0.366117 9.63388C0.131696 9.39946 0 9.08152 0 8.75C0 8.41848 0.131696 8.10054 0.366117 7.86612C0.600537 7.6317 0.918479 7.5 1.25 7.5H28.75C29.0815 7.5 29.3995 7.6317 29.6339 7.86612C29.8683 8.10054 30 8.41848 30 8.75ZM1.25 2.5H28.75C29.0815 2.5 29.3995 2.3683 29.6339 2.13388C29.8683 1.89946 30 1.58152 30 1.25C30 0.918479 29.8683 0.600537 29.6339 0.366117C29.3995 0.131696 29.0815 0 28.75 0H1.25C0.918479 0 0.600537 0.131696 0.366117 0.366117C0.131696 0.600537 0 0.918479 0 1.25C0 1.58152 0.131696 1.89946 0.366117 2.13388C0.600537 2.3683 0.918479 2.5 1.25 2.5ZM28.75 15H1.25C0.918479 15 0.600537 15.1317 0.366117 15.3661C0.131696 15.6005 0 15.9185 0 16.25C0 16.5815 0.131696 16.8995 0.366117 17.1339C0.600537 17.3683 0.918479 17.5 1.25 17.5H28.75C29.0815 17.5 29.3995 17.3683 29.6339 17.1339C29.8683 16.8995 30 16.5815 30 16.25C30 15.9185 29.8683 15.6005 29.6339 15.3661C29.3995 15.1317 29.0815 15 28.75 15Z"
                                    fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={clsx(styles.header__bottom, bottomPanelActive && styles.show)}
                >
                    <Link href={'/'} className={styles.header__logo}>
                        <span className={styles.header__logo_title}>
                             Myar
                        </span>
                        <span className={styles.header__logo_subtitle}>
                            Make it convert
                        </span>
                    </Link>

                    <nav className={styles.header__nav}>
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={clsx(
                                    styles.header__nav_link,
                                    pathname === item.href && styles.active
                                )}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </nav>

                    <Button className={styles.header__btn} href={"/get-in-touch"}>
                        Get in Touch
                    </Button>

                    <div className={styles.header__top_contact}>
                        <a href="mailto:info@myar.com">
                            info@myar.com
                        </a>
                        <a href="+447426463899">
                            +447426463899
                        </a>
                    </div>

                    <div className={styles.header__socials}>
                        <SocialList/>
                    </div>
                </div>
            </div>
        </header>
    )
}