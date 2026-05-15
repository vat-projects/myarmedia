import Image from "next/image";

export default function IconAsterisk() {
    return (
        <Image
            src={`/asterisk-icon.svg`}
            alt="Image"
            width={32}
            height={32}
            loading="lazy"
        />
    )
}