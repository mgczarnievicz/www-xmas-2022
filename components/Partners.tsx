import React from "react";
import Image from "next/image";
import styles from "../styles/Partner.module.css";
import Link from "next/link";

interface PartnersProps {
    file: string;
}

export default function Partners(props: PartnersProps) {
    // console.log("Props in Partners: ", props);
    let website: string;
    
    if (props.file.includes("neuefische")){
        website= "https://www.neuefische.de/en"
    } else if(props.file.includes("spiced")){
        website= "https://www.spiced-academy.com/en"
    }else if(props.file.includes("girlsintech")){
        website= "https://germany.girlsintech.org/"
    }

    return (
        <Link href={website}>
        <Image
            src={`/img/home/partners/${props.file}`}
            alt={props.file}
            width={150}
            height={50}
            className={styles.logo}
        ></Image>
        </Link>
    );
}
