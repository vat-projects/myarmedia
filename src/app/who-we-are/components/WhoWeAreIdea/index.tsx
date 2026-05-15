import styles from './WhoWeAreIdea.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

const items = [
    {
        id: 'idea-one',
        image: "idea-one.svg",
        description: "The performance space moves fast — traffic shifts, platforms evolve, and audience behavior changes constantly.",
    },
    {
        id: 'idea-two',
        image: "idea-two.svg",
        description: "Myar was built to operate inside that environment with a stronger focus on flexibility, scalability, and smarter partnership development.",
    },
    {
        id: 'idea-three',
        image: "idea-three.svg",
        description: "We create performance-driven systems that help advertisers expand acquisition opportunities and enable publishers to unlock greater monetization potential through adaptable campaign strategies and evolving traffic solutions.",
    },
];

export default function WhoWeAreIdea() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.who_idea__top}>
                    <h2 className={styles.who_idea__title}>The Idea Behind Myar</h2>

                    <IconAsterisk/>
                </div>

                <ul className={styles.who_idea__list}>
                    {items?.map((item) => (
                        <li key={item.id} className={styles.who_idea__item}>
                            <div className={styles.who_idea__item_image}>
                                <Image
                                    src={`/who-we-are/${item.image}`}
                                    alt="Image"
                                    width={24}
                                    height={24}
                                    loading="lazy"
                                />
                            </div>

                            <p className="text-style text-style--black-50">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}