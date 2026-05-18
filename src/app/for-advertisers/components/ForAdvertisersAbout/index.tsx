import styles from './ForAdvertisersAbout.module.scss';
import IconAsterisk from "@/components/icons/IconAsterisk";

const list = [
    {
        id: 'about-one',
        title: 'Scalable Partnership Environment',
        description: 'Built to support evolving acquisition strategies and long-term campaign development.',
    },
    {
        id: 'about-two',
        title: 'Flexible Campaign Execution',
        description: 'Designed to adapt alongside changing audience behavior and traffic conditions.',
    },
    {
        id: 'about-three',
        title: 'Performance-Oriented Operations',
        description: 'Focused on sustainable campaign management and operational consistency.',
    },
    {
        id: 'about-four',
        title: 'Transparent Collaboration',
        description: 'Partnership communication centered around clarity and long-term alignment.',
    },
]

export default function ForAdvertisersAbout() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.for_advertisers_about__top}>
                    <h2 className={styles.for_advertisers_about__title}>
                        What Advertisers Value About Myar
                    </h2>

                    <IconAsterisk/>
                </div>

                <ul className={styles.for_advertisers_about__list}>
                    {list?.map(item => (
                        <li
                            key={item.id}
                            className={styles.for_advertisers_about__item}
                        >
                            <p className="text-style-two text-style--black-75">
                                {item.title}
                            </p>

                            <p className="text-style text-style--black-75">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}