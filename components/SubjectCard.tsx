import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SubjectInfo } from "../types/material";
import styles from "../styles/SubjectCard.module.css";

export default function SubjectCard(props: SubjectInfo) {
    return (
        <div className={styles.card}>
            <Image
                src={props.frontMatter.cover_images}
                alt={props.slug}
                width={100}
                height={150}
                className={styles.cardImg}
            ></Image>
            <h2>{props.frontMatter.title}</h2>
            <p>{props.frontMatter.excerpt}</p>
            <Link href={`/subject/${props.slug}`}>
                <button className={styles.btn}>Read More</button>
            </Link>
        </div>
    );
}
