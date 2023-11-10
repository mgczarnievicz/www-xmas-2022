import Image from "next/image";

import styles from "../styles/Logo.module.css";

export default function Logo() {
    return (
        <Image
            src="/img/home/hero-black-transparent.png"
            alt="Logo"
            width={140}
            height={40}
            objectFit="cover"
            className={styles.logo}
        />
    );
}
