import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { SubjectProps } from "../../types/subject";
import Link from "next/link";
import Logo from "../../components/Logo";
import styles from "../../styles/SubjectCard.module.css";

export default function SubjectPage(props: SubjectProps) {
    // console.log("Subject Page: ", props);

    return (
        <main>
            <header className="header">
                <Logo />
                <nav className="nav">
                    <Link href="/" scroll={false} className="navOption">
                        Home
                    </Link>
                    <Link href="/material" scroll={false} className="navOption">
                        Go Back
                    </Link>
                </nav>
            </header>

            <section className={styles.cardSection}>
                <div className={`${styles.card} ${styles.cardPage}`}>
                    <h1 className={styles.cardTitle}>
                        {props.frontMatter.title}
                    </h1>
                    <div className={styles.cardBody}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: marked(props.content),
                            }}
                        ></div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// This Run in the "server" side
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("material"));
    const paths = files.map((filename) => ({
        params: { slug: filename.replace(".md", "") },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const markdownWithMeta = fs.readFileSync(
        path.join("material", slug + ".md"),
        "utf-8"
    );
    const { data: frontMatter, content } = matter(markdownWithMeta);

    return { props: { slug, frontMatter, content } };
}
