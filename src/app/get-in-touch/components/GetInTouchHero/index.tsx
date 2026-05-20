import styles from './GetInTouchHero.module.scss';

export default function GetInTouchHero() {
    return (
        <div className={`${styles.get_in_touch_hero} section-bottom-space-100`}>
            <div className="container">
                <h1 className={styles.get_in_touch_hero__title}>
                    Let’s Start the Conversation
                </h1>

                <div className={styles.get_in_touch_hero__description}>
                    <p className="text-style">
                        Looking for scalable traffic solutions, performance-focused partnerships, or new growth
                        opportunities?
                    </p>

                    <p className="text-style">
                        Myar works with advertisers and publishers across evolving digital markets to support
                        smarter campaign execution and long-term performance growth.
                    </p>
                </div>
            </div>
        </div>
    )
}