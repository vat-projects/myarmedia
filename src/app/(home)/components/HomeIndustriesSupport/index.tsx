import styles from './HomeIndustriesSupport.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

const items = [
    {
        id: 'finance',
        title: 'Finance',
        icon: 'industries-one.svg',
    },
    {
        id: 'technology',
        title: 'Technology',
        icon: 'industries-two.svg',
    },
    {
        id: 'health-wellness',
        title: 'Health & Wellness',
        icon: 'industries-three.svg',
    },
    {
        id: 'education',
        title: 'Education',
        icon: 'industries-four.svg',
    },
    {
        id: 'entertainment',
        title: 'Entertainment',
        icon: 'industries-five.svg',
    },
    {
        id: 'real-estate',
        title: 'Real Estate',
        icon: 'industries-six.svg',
    },
    {
        id: 'travel',
        title: 'Travel',
        icon: 'industries-seven.svg',
    },
    {
        id: 'e-commerce',
        title: 'E-Commerce',
        icon: 'industries-eight.svg',
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        icon: 'industries-nine.svg',
    },
    {
        id: 'gaming',
        title: 'Gaming',
        icon: 'industries-ten.svg',
    },
    {
        id: 'software-saas',
        title: 'Software & SaaS',
        icon: 'industries-eleven.svg',
    },
    {
        id: 'consumer-services',
        title: 'Consumer Services',
        icon: 'industries-twelve.svg',
    },
    {
        id: 'business-services',
        title: 'Business Services',
        icon: 'industries-thirteen.svg',
    },
    {
        id: 'digital-products',
        title: 'Digital Products',
        icon: 'industries-fourteen.svg',
    },
    {
        id: 'media-content-platforms',
        title: 'Media & Content Platforms',
        icon: 'industries-fifteen.svg',
    },
    {
        id: 'lifestyle-brands',
        title: 'Lifestyle Brands',
        icon: 'industries-sixteen.svg',
    },
    {
        id: 'subscription-services',
        title: 'Subscription Services',
        icon: 'industries-seventeen.svg',
    },
    {
        id: 'online-platforms',
        title: 'Online Platforms',
        icon: 'industries-eighteen.svg',
    },
];

export default function HomeIndustriesSupport() {
    return (
        <section className="section-bottom-space-80">
            <div className="container">
                <div className={styles.home_industries__inner}>
                    <div>
                        <h2 className={styles.home_industries__title}>
                            Industries We Support
                        </h2>

                        <div className={`${styles.home_industries__description} text-style text-style--black-75`}>
                            <p>
                                We develop performance-driven affiliate campaigns across multiple verticals and growth-focused industries.
                            </p>

                            <p>
                                Each campaign strategy is adapted to the unique goals, audience behavior, and traffic requirements of the industries we support.
                            </p>
                        </div>

                        <div className={styles.home_industries__link_wrapper}>
                            <Button
                                style={"secondary"}
                                href={"/industries"}
                                icon
                                className={styles.home_industries__link}>
                                View Industries
                            </Button>
                        </div>
                    </div>

                    <div>
                        <div className={styles.home_industries__list_wrapper}>
                            <ul className={styles.home_industries__list}>
                                {items?.map((item) => (
                                    <li key={item.id} className={styles.home_industries__item}>
                                        <p className="text-style text-style--black-75">
                                            {item.title}
                                        </p>

                                        <Image
                                            src={`/home/${item.icon}`}
                                            alt="Image"
                                            width={24}
                                            height={24}
                                            loading="lazy"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.home_industries__link_wrapper}>
                            <Button
                                style={"secondary"}
                                href={"/industries"}
                                icon
                                className={styles.home_industries__link}>
                                View Industries
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}