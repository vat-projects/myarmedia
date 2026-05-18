import styles from './ForAdvertisersCampaign.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import IconAsterisk from "@/components/icons/IconAsterisk";

const list = [
    {
        id: 'performance-results-one',
        title: 'CPA Campaigns',
    },
    {
        id: 'performance-results-two',
        title: 'CPL Models',
    },
    {
        id: 'performance-results-three',
        title: 'RevShare Partnerships',
    },
    {
        id: 'performance-results-four',
        title: 'Hybrid Structures',
    },
]

export default function ForAdvertisersCampaign() {
    return (
        <div className="section-bottom-space-100">
            <div className={`${styles.for_advertisers_campaign__container} container`}>
                <div className={styles.for_advertisers_campaign__image}>
                    <Image
                        src={'/for-advertisers/campaign.png'}
                        alt="Image"
                        width={600}
                        height={459}
                        loading="lazy"
                    />
                </div>

                <div className={styles.for_advertisers_campaign__item}>
                    <div className={styles.for_advertisers_campaign__item_top}>
                        <h2 className={styles.for_advertisers_campaign__item_title}>
                            Campaign Structures Built Around Growth
                        </h2>

                        <IconAsterisk/>
                    </div>

                    <div className={`${styles.for_advertisers_campaign__item_description} text-style text-style--black-75`}>
                        <p>
                            Different acquisition strategies require different campaign models.
                        </p>

                        <p>
                            Myar supports flexible partnership structures that help advertisers scale efficiently in
                            changing performance environments and evolving market conditions.
                        </p>
                    </div>

                    <ul className={styles.for_advertisers_campaign__item_list}>
                        {list?.map(item => (
                            <li
                                key={item.id}
                                className={`${styles.for_advertisers_campaign__item_list_item} text-style text-style--black-75`}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.for_advertisers_campaign__item_link_wrapper}>
                        <Button
                            style={"secondary"}
                            href={'/performance-solutions'}
                            icon
                            className={styles.for_advertisers_campaign__item_link}>
                            Explore Performance Solutions
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}