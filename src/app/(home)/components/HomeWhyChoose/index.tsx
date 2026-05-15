import styles from './HomeWhyChoose.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export const items = [
    {
        id: 'why-choose-one',
        image: "why-choose-one.svg",
        title: "Data-Driven Decision Making",
        description: "Every campaign is supported by performance insights and ongoing optimization strategies designed to improve measurable outcomes.",
    },
    {
        id: 'why-choose-two',
        image: "why-choose-two.svg",
        title: "Trusted Traffic Sources",
        description: "We focus on reliable traffic acquisition strategies that prioritize quality, engagement, and long-term campaign value.",
    },
    {
        id: 'why-choose-three',
        title: "Flexible Partnership Models",
        image: "why-choose-three.svg",
        description: "Our network supports CPA, CPL, RevShare, and hybrid campaign structures tailored to different business objectives.",
    },
    {
        id: 'why-choose-four',
        title: "Scalable Growth Strategies",
        image: "why-choose-four.svg",
        description: "We build performance systems designed to support sustainable growth without compromising campaign quality or traffic performance.",
    },
];

export default function HomeWhyChoose() {
    return (
        <section className="section-bottom-space-80">
            <div className="container">
                <h2 className={styles.home_why_choose__title}>
                    Why Brands Choose Myar
                </h2>

                <ul className={styles.home_why_choose__list}>
                    {items?.map((item) => (
                        <li key={item.id} className={styles.home_why_choose__item}>
                            <div className={styles.home_why_choose__item_top}>
                                <div className={styles.home_why_choose__item_image}>
                                    <Image
                                        src={`/home/${item.image}`}
                                        alt="Image"
                                        width={24}
                                        height={24}
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className={styles.home_why_choose__item_title}>
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-style text-style--black-50">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className={styles.home_why_choose__link_wrapper}>
                    <Button
                        style={"secondary"}
                        href={"/who-we-are"}
                        icon
                        className={styles.home_why_choose__link}>
                        Learn More About Us
                    </Button>
                </div>
            </div>
        </section>
    )
}