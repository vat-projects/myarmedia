import styles from './HomePerformance.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export const items = [
    {
        id: 'performance-one',
        image: "performance-one.svg",
        description: "Myar connects advertisers with trusted traffic sources and helps publishers unlock scalable monetization opportunities through performance-focused affiliate campaigns.",
    },
    {
        id: 'performance-two',
        image: "performance-two.svg",
        description: "Our approach combines traffic acquisition, campaign optimization, and conversion-focused strategies designed to generate measurable business outcomes while maintaining long-term campaign efficiency and traffic quality.",
    },
    {
        id: 'performance-three',
        image: "performance-three.svg",
        description: "We focus on building partnerships that create sustainable growth for both advertisers and publishers through transparent collaboration and performance-driven execution.",
    },
];

export default function HomePerformance() {
    return (
        <section className="section-bottom-space-80">
            <div className="container">
                <h2>Performance Starts Here</h2>

                <ul className={styles.home_performance__list}>
                    {items?.map((item) => (
                        <li key={item.id} className={styles.home_performance__item}>
                            <div className={styles.home_performance__item_image}>
                                <Image
                                    src={`/home/${item.image}`}
                                    alt="Image"
                                    width={24}
                                    height={17}
                                    loading="lazy"
                                />
                            </div>

                            <p className="text-style text-style--black-50">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className={styles.home_performance__link_wrapper}>
                    <Button
                        style={"secondary"}
                        href={"/performance-solutions"}
                        icon
                        className={styles.home_performance__link}>
                        Explore Performance Solutions
                    </Button>
                </div>
            </div>
        </section>
    )
}