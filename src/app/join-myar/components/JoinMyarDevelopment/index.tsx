import styles from './JoinMyarDevelopment.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import ImageBg from "@/components/ImageBg";

export default function JoinMyarDevelopment() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.join_myar_development__bottom}>
                    <ImageBg size={820}/>

                    <div className={`${styles.join_myar_development__icon}`}>
                        <Image
                            src={'/join-myar/development.svg'}
                            alt="Image"
                            width={144}
                            height={155}
                            loading="lazy"
                        />
                    </div>

                    <h2 className={styles.join_myar_development__title}>
                        Career Growth & Development
                    </h2>

                    <p className="text-style text-style--mobile text-style--white-75">
                        Myar supports professionals looking to grow inside evolving digital performance environments
                        through scalable operational experience, collaborative workflows, and long-term development
                        opportunities.
                    </p>

                    <p className={`${styles.join_myar_development__subtitle} text-style-two`}>
                        We value initiative, adaptability, and performance-focused thinking across every stage of professional growth.
                    </p>
                </div>
            </div>
        </section>
    )
}