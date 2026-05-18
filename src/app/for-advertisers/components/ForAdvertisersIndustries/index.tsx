import styles from './ForAdvertisersIndustries.module.scss';
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
        id: 'travel',
        title: 'Travel',
        icon: 'industries-seven.svg',
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
        id: 'media-platforms',
        title: 'Media Platforms',
        icon: 'industries-fifteen.svg',
    },
    {
        id: 'digital-services',
        title: 'Digital Services',
        icon: 'industries-fourteen.svg',
    },
    {
        id: 'consumer-products',
        title: 'Consumer Products',
        icon: 'industries-twelve.svg',
    },
    {
        id: 'subscription-services',
        title: 'Subscription Services',
        icon: 'industries-seventeen.svg',
    },
    {
        id: 'e-commerce',
        title: 'E-Commerce',
        icon: 'industries-eight.svg',
    },
];

export default function ForAdvertisersIndustries() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.for_advertisers_industries__inner}>
                    <div>
                        <h2 className={styles.for_advertisers_industries__title}>
                            Industries We Work Across
                        </h2>

                        <div className={`${styles.for_advertisers_industries__description} text-style text-style--black-75`}>
                            <p>
                                We support advertiser campaigns across multiple industries and evolving digital market segments through scalable acquisition strategies and adaptable campaign structures.

                            </p>
                        </div>

                        <div className={styles.for_advertisers_industries__link_wrapper}>
                            <Button
                                style={"secondary"}
                                href={"/industries"}
                                icon
                                className={styles.for_advertisers_industries__link}>
                                View Industries
                            </Button>
                        </div>
                    </div>

                    <div>
                        <div className={styles.for_advertisers_industries__list_wrapper}>
                            <ul className={styles.for_advertisers_industries__list}>
                                {items?.map((item) => (
                                    <li key={item.id} className={styles.for_advertisers_industries__item}>
                                        <p className={`${styles.for_advertisers_industries__item_value} text-style text-style--black-75`}>
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
                        <div className={styles.for_advertisers_industries__link_wrapper}>
                            <Button
                                style={"secondary"}
                                href={"/industries"}
                                icon
                                className={styles.for_advertisers_industries__link}>
                                View Industries
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}