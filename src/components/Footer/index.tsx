import styles from './Footer.module.scss';
import Link from "next/link";
import SocialList from "@/components/socialList";

const navItems = [
    {
        title: 'Platform',
        items: [
            { text: 'Home', href: '/' },
            { text: 'Who We Are', href: '/who-we-are' },
            { text: 'Performance Solutions', href: '/performance-solutions' },
            { text: 'Industries', href: '/industries' },
            { text: 'Quality & Compliance', href: '/quality-compliance' },
        ],
    },
    {
        title: 'Partnership',
        items: [
            { text: 'For Advertisers', href: '/for-advertisers' },
            { text: 'For Publishers', href: '/for-publishers' },
            { text: 'Case Studies', href: '/case-studies' },
            { text: 'Join Myar', href: '/join-myar' },
        ],
    },
    {
        title: 'Contact',
        items: [
            { text: 'Get in Touch', href: '/contact' },
        ],
    },
    {
        title: 'Legal',
        items: [
            { text: 'Terms and Conditions', href: '/terms' },
            { text: 'Privacy Policy', href: '/privacy-policy' },
            { text: 'Cookie Policy', href: '/cookie-policy' },
            { text: 'Refund Policy', href: '/refund-policy' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
                <div className={styles.footer__left}>
                    <Link href={'/'} className={styles.footer__logo}>
                        <span className={styles.footer__logo_title}>
                            Myar
                        </span>

                        <span className={styles.footer__logo_subtitle}>
                            Make it convert
                        </span>
                    </Link>

                    <div className={styles.footer__contact}>
                        <div>
                            <p className={styles.footer__contact_title}>Email:</p>
                            <a href="mailto:info@myar.com" className={styles.footer__contact_value}>
                                info@myar.com
                            </a>
                        </div>

                        <div>
                            <p className={styles.footer__contact_title}>Phone:</p>
                            <a className={styles.footer__contact_value} href="+447426463899">
                                +447426463899
                            </a>
                        </div>
                    </div>

                    <div className={styles.footer__adress}>
                            <div>
                                <p className={styles.footer__contact_title}>
                                    Office address:
                                </p>
                                <p className={styles.footer__contact_value}>
                                    Floor G, Arthaus, 205 Richmond Road, London E8 3FF, United Kingdom
                                </p>
                            </div>

                            <div>
                                <p className={styles.footer__contact_title}>
                                    Registered address:
                                </p>
                                <p className={styles.footer__contact_value}>
                                    Intershore Chambers, Road Town, Tortola, British Virgin Islands
                                </p>
                            </div>
                    </div>
                </div>

                <div>
                    <div className={styles.footer__menu_wrapper}>
                        {navItems.map((section) => (
                            <nav key={section.title}>
                                <p className={styles.footer__menu_title}>
                                    {section.title}
                                </p>

                                <ul className={styles.footer__menu_list}>
                                    {section.items.map((item) => (
                                        <li key={item.href} className={styles.footer__menu_item}>
                                            <Link href={item.href} className={styles.footer__menu_link}>
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>

                    <div className={styles.footer__copyright_wrapper}>
                        <p className={styles.footer__copyright}>
                            © {new Date().getFullYear()} Youmedia Inc. All rights reserved
                        </p>

                        <SocialList />
                    </div>
                </div>
            </div>
        </footer>
    )
}