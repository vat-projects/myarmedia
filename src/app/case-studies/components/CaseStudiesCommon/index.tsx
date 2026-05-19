import styles from './CaseStudiesCommon.module.scss';
import IconAsterisk from "@/components/icons/IconAsterisk";

const list = [
    {
        id: 'choose-one',
        title: 'Scalable Operational Structure',
        description: 'Campaign environments designed to support long-term performance development and scalable growth opportunities.',
    },
    {
        id: 'choose-two',
        title: 'Ongoing Optimization',
        description: 'Continuous operational refinement focused on improving traffic quality, engagement flow, and acquisition efficiency.',
    },
    {
        id: 'choose-three',
        title: 'Adaptable Traffic Strategies',
        description: 'Flexible acquisition environments capable of evolving alongside changing digital market conditions.',
    },
    {
        id: 'choose-four',
        title: 'Performance Visibility',
        description: 'Structured reporting and operational monitoring processes designed to improve campaign clarity and performance oversight.',
    },
]

export default function CaseStudiesCommon() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.case_studies_common__top}>
                    <h2 className={styles.case_studies_common__title}>
                        What These Campaigns Had in Common
                    </h2>

                    <IconAsterisk/>
                </div>

                <ul className={styles.case_studies_common__list}>
                    {list?.map(item => (
                        <li
                            key={item.id}
                            className={styles.case_studies_common__item}
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