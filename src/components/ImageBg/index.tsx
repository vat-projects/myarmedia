import Image from "next/image";
import styles from './ImageBg.module.scss';

type ImageBgProps = {
    size?: number;
};

export default function ImageBg({ size = 1240 }: ImageBgProps) {
    return (
        <Image
            src="/image-general-bg.png"
            alt="Image"
            fill
            sizes={`(max-width: ${size}px) 100vw, ${size}px`}
            loading="lazy"
            className={styles.image_bg}
        />
    );
};