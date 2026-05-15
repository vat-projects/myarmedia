import styles from './WhoWeAreInside.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

const items = [
    {
        id: 'inside-one',
        title: 'Inside the Myar Network',
        description: [
            'Our network brings together advertisers, publishers, and traffic partners within a performance-focused ecosystem built around scalability and operational flexibility.',
            'We support a wide range of traffic environments and partnership models designed to help businesses explore new acquisition opportunities, improve campaign execution, and expand monetization potential.',
            'As the performance landscape evolves, our network continues adapting to support emerging traffic trends and changing business objectives.',
        ],
        icon: 'inside-icon-one.svg'
    },
    {
        id: 'inside-two',
        title: 'Performance Requires Adaptation',
        description: [
            'Success in affiliate marketing is no longer driven by isolated campaigns alone. Sustainable growth requires flexibility, strategic execution, and the ability to adapt to evolving market conditions.',
            'At Myar we focus on helping partnerships remain agile through scalable campaign structures, adaptable traffic strategies, and continuous operational refinement designed to drive long-term performance.',
        ],
        icon: 'inside-icon-two.svg'
    },
];

export default function WhoWeAreInside() {
    return (
        <div className="section-bottom-space-100">
            <div className={`${styles.who_inside__container} container`}>
                <div className={styles.who_inside__image}>
                    <Image
                        src={'/who-we-are/inside.png'}
                        alt="Image"
                        width={715}
                        height={706}
                        loading="lazy"
                    />
                </div>
                <div className={styles.who_inside__right}>
                    {items?.map(item => (
                        <div key={item.id}
                             className={styles.who_inside__item}>
                            <div className={styles.who_inside__item_image}>
                                <Image
                                    src={'/who-we-are/inside-icon-bg.svg'}
                                    alt="Image"
                                    width={174}
                                    height={171}
                                    loading="lazy"
                                />
                            </div>

                            <div className={styles.who_inside__item_top}>
                                <Image
                                    src={`/who-we-are/${item.icon}`}
                                    alt="Image"
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                />

                                <h2 className={styles.who_inside__item_title}>
                                    {item.title}
                                </h2>
                            </div>
                            <div
                                className={`${styles.who_inside__item_description} text-style text-style--black-75`}>
                                {item.description.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.who_inside__item}>
                    <div className={styles.who_inside__item_second_image}>
                        <Image
                            src={'/who-we-are/inside-icon-bg.svg'}
                            alt="Image"
                            width={174}
                            height={171}
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.who_inside__item_top}>
                        <Image
                            src={'/who-we-are/inside-icon-three.svg'}
                            alt="Image"
                            width={42}
                            height={40}
                            loading="lazy"
                        />

                        <h2 className={styles.who_inside__item_title}>
                            Industries We Operate In
                        </h2>
                    </div>

                    <div className={`${styles.who_inside__item_description} text-style text-style--black-75`}>
                        <p>
                            Different industries demand different growth strategies.
                        </p>

                        <p>
                            Myar operates across multiple digital and consumer-focused sectors, helping advertisers and
                            publishers navigate shifting audience behavior, traffic trends, and performance
                            opportunities
                            through scalable campaign solutions.
                        </p>
                    </div>

                    <div className={styles.who_inside__item_link_wrapper}>
                        <Button
                            style={"secondary"}
                            href={'/industries'}
                            icon
                            className={styles.who_inside__item_link}>
                            View Industries
                        </Button>
                    </div>
                </div>

                <div className={styles.who_inside__image}>
                    <Image
                        src={'/who-we-are/inside-two.png'}
                        alt="Image"
                        width={505}
                        height={301}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}