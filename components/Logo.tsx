import Image from "next/image";

import styles from "../styles/Logo.module.css";

export default function Logo() {
    return (
        <Image
            src="/img/home/logo.png"
            alt="Logo"
            width={150}
            height={100}
            objectFit="cover"
            className={styles.logo}
        />
    );
}
