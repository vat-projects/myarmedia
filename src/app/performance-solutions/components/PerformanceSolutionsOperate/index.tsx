import styles from './PerformanceSolutionsOperate.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

export const items = [
    {
        id: 'performance-one',
        image: "performance-one.svg",
        title: "Step 1 — Performance Evaluation",
        description: "We review campaign structure, operational goals, audience behavior, and traffic requirements.",
    },
    {
        id: 'performance-two',
        image: "performance-two.svg",
        title: "Step 2 — Strategy Development",
        description: "Our team builds performance-focused operational frameworks aligned with business objectives and campaign priorities.",
    },
    {
        id: 'performance-three',
        image: "performance-three.svg",
        title: "Step 3 — Optimization & Scaling",
        description: "Campaign environments are continuously monitored, refined, and optimized to support scalable long-term performance.",
    },
];

export default function PerformanceSolutionsOperate() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.performance_solutions_operate__inner}>
                    <h2 className={styles.performance_solutions_operate__title}>
                        How Performance Solutions Operate
                    </h2>

                    <ul className={styles.performance_solutions_operate__list}>
                        {items?.map((item, index) => (
                            <li key={item.id} className={styles.performance_solutions_operate__item}>
                                <div className={styles.performance_solutions_operate__item_top}>
                                    <span className={styles.performance_solutions_operate__item_number}>
                                        {String(index + 1).padStart(2, '0')}.
                                    </span>

                                    <p className="text-style-two text-style--black">
                                        {item.title}
                                    </p>
                                </div>

                                <p className="text-style text-style--black-50">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}