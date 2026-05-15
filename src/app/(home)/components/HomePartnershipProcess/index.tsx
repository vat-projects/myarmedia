import styles from './HomePartnershipProcess.module.scss';
import Image from "next/image";
import Button from "@/components/Button";

const list = [
    {
        id: 'partnership-process-one',
        title: 'Step 1 — Submit Your Request',
        description: 'Tell us about your business goals, traffic sources, or campaign requirements.',
    },
    {
        id: 'partnership-process-two',
        title: 'Step 2 — Strategy & Review',
        description: 'Our team evaluates opportunities and builds a performance-focused strategy tailored to your objectives.',
    },
    {
        id: 'partnership-process-three',
        title: 'Step 3 — Launch & Optimize',
        description: 'We launch campaigns, monitor performance, and continuously optimize results for scalable long-term growth.\n',
    },
]

export default function HomePartnershipProcess() {
    return (
        <section className="section-bottom-space-80">
            <div className="container">
                <div className={styles.home_partnership_process__top}>
                    <h2 className={styles.home_partnership_process__title}>
                        Partnership Process
                    </h2>

                    <Image
                        src={'/home/built-icon.svg'}
                        alt="Image"
                        width={32}
                        height={32}
                        loading="lazy"
                    />
                </div>

                <ul className={styles.home_partnership_process__list}>
                    {list?.map(item => (
                        <li
                            key={item.id}
                            className={styles.home_partnership_process__item}
                        >
                            <p className={styles.home_partnership_process__item_title}>
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