import styles from './PerformanceSolutionsMoves.module.scss';
import Image from "next/image";

export const items = [
    {
        id: 'snapshot-one',
        title: (
            <>
                <span>Traffic</span> shifts.
            </>
        ),
    },
    {
        id: 'snapshot-two',
        title: (
            <>
                <span>Audience</span> behavior changes.
            </>
        ),
    },
    {
        id: 'snapshot-three',
        title: (
            <>
                <span>Campaign efficiency</span> fluctuates.
            </>
        ),
    },
    {
        id: 'snapshot-four',
        title: (
            <>
                <span>Scaling</span> creates new operational pressure.
            </>
        ),
    },
];

export default function PerformanceSolutionsMoves() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.performance_solutions_moves__inner}>
                    <h2 className={styles.performance_solutions_moves__title}>
                        Performance Moves Fast
                    </h2>

                    <ul className={styles.performance_solutions_moves__list}>
                        {items?.map((item) => (
                            <li key={item.id}>
                                <h3 className={`${styles.performance_solutions_moves__item_title} text-style-two text-style--white-50`}>
                                    {item.title}
                                </h3>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.performance_solutions_moves__icon}>
                        <Image
                            src={'/home/snapshot-icon.svg'}
                            alt="Image"
                            width={276}
                            height={300}
                            loading="lazy"
                        />
                    </div>

                    <p className={`${styles.performance_solutions_moves__item_description} text-style text-style--white`}>
                        Myar builds performance environments designed to help advertisers and publishers adapt, optimize, and grow across evolving digital markets.
                    </p>
                </div>
            </div>
        </section>
    )
}