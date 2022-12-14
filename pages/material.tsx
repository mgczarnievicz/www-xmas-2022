import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MaterialProps } from "../types/material";
import styles from "../styles/Material.module.css";
import SubjectCard from "../components/SubjectCard";
import Logo from "../components/Logo";
import Link from "next/link";
import Head from "next/head";

export default function material(props: MaterialProps) {
    // console.log(props);

    return (
        <>
            <Head>
                <script
                    defer
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossOrigin="anonymous"
                ></script>
                <script defer type="text/javascript" src="/script.js"></script>
            </Head>
            <main>
                <header className="header">
                    <Logo />
                    <nav className="nav">
                        <Link href="/" scroll={false} className="navOption">
                            Home
                        </Link>
                    </nav>
                </header>
                <section className={styles.materialSection}>
                    <div className={styles.subjectContainer}>
                        {props.subjects.map((subject, index) => {
                            return <SubjectCard {...subject} key={index} />;
                        })}
                    </div>
                </section>
            </main>
        </>
    );
}

export async function getStaticProps() {
    // Get files from the material dir
    const files = fs.readdirSync(path.join("material"));

    const subjects = files.map((filename) => {
        // Create slug
        const slug = filename.replace(".md", "");

        //Get front matter
        const markdownWithMeta = fs.readFileSync(
            path.join("material", filename),
            "utf-8"
        );

        const { data: frontMatter } = matter(markdownWithMeta);
        return { slug, frontMatter };
    });

    return { props: { subjects } };
}
