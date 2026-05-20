import styles from './GetInTouchInformation.module.scss';
import Image from "next/image";
import IconAsterisk from "@/components/icons/IconAsterisk";

const items = [
    {
        id: 'businesses-one',
        image: "envelope.svg",
        title: "info@myar.com",
        type: "email",
        description: null,
    },
    {
        id: 'businesses-two',
        image: "phone-call.svg",
        title: "+447426463899",
        type: "phone",
        description: null,
    },
    {
        id: 'businesses-three',
        image: "building-office.svg",
        title: "Office Address",
        type: null,
        description: "Floor G, Arthaus, 205 Richmond Road, London E8 3FF, United Kingdom",
    },
    {
        id: 'businesses-four',
        image: "house.svg",
        title: "Registered Address",
        type: null,
        description: "Intershore Chambers, Road Town, Tortola, British Virgin Islands.",
    },
];

export default function GetInTouchInformation() {
    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.get_in_touch_information__top}>
                    <h2 className={styles.get_in_touch_information__title}>
                        Contact Information
                    </h2>

                    <IconAsterisk/>
                </div>

                <ul className={styles.get_in_touch_information__list}>
                    {items?.map((item) => (
                        <li key={item.id} className={styles.get_in_touch_information__item}>
                            <div className={styles.get_in_touch_information__item_top}>
                                <div className={styles.get_in_touch_information__item_image}>
                                    <Image
                                        src={`/icons/${item.image}`}
                                        alt="Image"
                                        width={24}
                                        height={24}
                                        loading="lazy"
                                    />
                                </div>

                                <h3 className="text-style-two text-style--black">
                                    {item.type === 'email' ? (
                                        <a href={`mailto:${item.title}`}>
                                            {item.title}
                                        </a>
                                    ) : item.type === 'phone' ? (
                                        <a href={`tel:${item.title}`}>
                                            {item.title}
                                        </a>
                                    ) : (
                                        item.title
                                    )}
                                </h3>
                            </div>


                            {item.description && (
                                <p className="text-style text-style--black-50">
                                    {item.description}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}