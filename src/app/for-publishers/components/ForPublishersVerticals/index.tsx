import styles from './ForPublishersVerticals.module.scss';
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
        id: 'gaming',
        title: 'Gaming',
        icon: 'industries-ten.svg',
    },
    {
        id: 'media-platforms',
        title: 'Media Platforms',
        icon: 'industries-fifteen.svg',
    },
    {
        id: 'travel',
        title: 'Travel',
        icon: 'industries-seven.svg',
    },
    {
        id: 'subscription-services',
        title: 'Subscription Services',
        icon: 'industries-seventeen.svg',
    },
    {
        id: 'digital-products',
        title: 'Digital Products',
        icon: 'industries-fourteen.svg',
    },
    {
        id: 'software-saas',
        title: 'Software & SaaS',
        icon: 'industries-eleven.svg',
    },
    {
        id: 'consumer-products',
        title: 'Consumer Products',
        icon: 'industries-twelve.svg',
    },
    {
        id: 'e-commerce',
        title: 'E-Commerce',
        icon: 'industries-eight.svg',
    },
];

export default function ForPublishersVerticals() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.for_publishers_verticals__inner}>
                    <div>
                        <h2 className={styles.for_publishers_verticals__title}>
                            Supporting Multiple Verticals
                        </h2>

                        <div className={`${styles.for_publishers_verticals__description} text-style text-style--black-75`}>
                            <p>
                                Our network supports campaigns across a broad range of digital and consumer-focused industries through adaptable monetization strategies and scalable traffic opportunities.
                            </p>
                        </div>

                        <div className={styles.for_publishers_verticals__link_wrapper}>
                            <Button
                                style={"secondary"}
                                href={"/industries"}
                                icon
                                className={styles.for_publishers_verticals__link}>
                                View Industries
                            </Button>
                        </div>
                    </div>

                    <div>
                        <div className={styles.for_publishers_verticals__list_wrapper}>
                            <ul className={styles.for_publishers_verticals__list}>
                                {items?.map((item) => (
                                    <li key={item.id} className={styles.for_publishers_verticals__item}>
                                        <p className={`${styles.for_publishers_verticals__item_value} text-style text-style--black-75`}>
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
                        <div className={styles.for_publishers_verticals__link_wrapper}>
                            <Button
                                style={"secondary"}
                                href={"/industries"}
                                icon
                                className={styles.for_publishers_verticals__link}>
                                View Industries
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}