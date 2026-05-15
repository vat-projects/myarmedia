import styles from './HomePerformanceResults.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

const list = [
    {
        id: 'performance-results-one',
        title: 'Improve conversion quality',
    },
    {
        id: 'performance-results-two',
        title: 'Scale campaign performance',
    },
    {
        id: 'performance-results-three',
        title: 'Increase revenue opportunities',
    },
    {
        id: 'performance-results-four',
        title: 'Optimize traffic efficiency',
    },
]

export default function HomePerformanceResults() {
    return (
        <div className="section-bottom-space-80">
            <div className={`${styles.home_performance_results__container} container`}>
                <div className={styles.home_performance_results__image}>
                    <Image
                        src={'/home/performance-results.png'}
                        alt="Image"
                        width={610}
                        height={467}
                        loading="lazy"
                    />
                </div>

                <div className={styles.home_performance_results__item}>
                    <div className={styles.home_performance_results__item_top}>
                        <h2 className={styles.home_performance_results__item_title}>
                            Performance Backed by Results
                        </h2>

                        <Image
                            src={'/home/built-icon.svg'}
                            alt="Image"
                            width={32}
                            height={32}
                            loading="lazy"
                        />
                    </div>

                    <p className={`${styles.home_performance_results__item_description} text-style text-style--black-75`}>
                        Our campaigns focus on generating measurable growth through optimized traffic, scalable acquisition strategies, and performance-focused execution.
                    </p>

                    <ul className={styles.home_performance_results__item_list}>
                        {list?.map(item => (
                            <li
                                key={item.id}
                                className={`${styles.home_performance_results__item_list_item} text-style text-style--black-75`}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    <p className={`${styles.home_performance_results__item_description} text-style text-style--black-75`}>
                        We help advertisers improve acquisition performance while enabling publishers to unlock stronger monetization opportunities through campaigns designed for measurable results.
                    </p>

                    <div className={styles.home_performance_results__item_link_wrapper}>
                        <Button
                            style={"secondary"}
                            href={'/case-studies'}
                            icon
                            className={styles.home_performance_results__item_link}>
                            View Case Studies
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}