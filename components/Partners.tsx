import React from "react";
import Image from "next/image";
import styles from "../styles/Partner.module.css";

interface PartnersProps {
    file: string;
}

export default function Partners(props: PartnersProps) {
    // console.log("Props in Partners: ", props);

    return (
        <Image
            src={`/img/home/partners/${props.file}`}
            alt={props.file}
            width={150}
            height={50}
            className={styles.logo}
        ></Image>
    );
}
