import Image from "next/image";
import { CoachProfile } from "../types/coach";

import styles from "../styles/Coach.module.css";

export default function Coach(props: CoachProfile) {
    return (
        <div className={styles.profileCard}>
            <Image
                src={props.img}
                alt={props.name}
                width={500}
                height={500}
                objectFit="cover"
                className={styles.profileImage}
            />

            <div className={styles.coachDescription}>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
