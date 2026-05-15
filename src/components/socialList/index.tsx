import styles from './socialList.module.scss';
import Image from "next/image";

export const items = [
    {
        id: 'facebook-link',
        link: "#",
        image: "/facebook.svg",
    },
    {
        id: 'instagram-link',
        link: "#",
        image: "/instagram.svg",
    },
    {
        id: 'x-link',
        link: "#",
        image: "/twitter.svg",
    },
    {
        id: 'linkedin-link',
        link: "#",
        image: "/linkedin.svg",
    },
];

export default function SocialList() {
    return (
        <ul className={styles.social_list}>
            {items.map((item) => (
                <li key={item.id}>
                    <a href={item.link} className={styles.social_list__link}>
                        <Image
                            src={item.image}
                            alt="Image"
                            width={20}
                            height={20}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}