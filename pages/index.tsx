import fs from 'fs';
import path from 'path';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Coach from '../components/Coach';
import { CoachProfile } from '../types/coach';
import Logo from '../components/Logo';
import Partners from '../components/Partners';
import { ScrollRotate } from 'react-scroll-rotate';

// REVIEW IMPORT FORM JSON COACH
//The welcome link doesnt work
const coachArray = [
    {
        name: 'Gimena',
        img: '/img/coaches/gimena.jpg',
        description:
            'is a Web Development Coach from Spiced Berlin.  Originally from Uruguay she moved to Berlin 1.5 years ago. She is a graduate from the web developer bootcamp at Spiced and also studied electronic engineering in her home country. ',
    },
    {
        name: 'Jan',
        img: '/img/coaches/jan.png',
        description:
            'is a Web Development Coach from Spiced Berlin. He worked as a Software Engineer for 10 years after playing Poker professionally. He is german and loves dogs and coding.',
    },
];

interface HomeProps {
    files: string[];
}

export default function Home(props: HomeProps) {
    // console.log("Props: ", props);

    return (
        <>
            <Head>
                <title>Xmas Coding Page</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
                {/* <script
                    defer
                    src='https://code.jquery.com/jquery-3.6.0.min.js'
                    integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
                    crossOrigin='anonymous'
                ></script>
                <script defer type='text/javascript' src='/script.js'></script> */}
            </Head>

            <main className={styles.main}>
                {/* className={styles.header} */}
                <header className='header'>
                    <Logo />
                    {/* className={styles.nav} */}
                    <nav className='nav'>
                        {/* className={styles.navOption} */}
                        <Link
                            href={'#welcome-section'}
                            scroll={true}
                            className='navOption'
                        >
                            Welcome
                        </Link>
                        <Link
                            href={'#coaches-section'}
                            scroll={false}
                            className='navOption'
                        >
                            Coaches
                        </Link>
                        <Link
                            href={'#links-section'}
                            scroll={false}
                            className='navOption'
                        >
                            Useful Links
                        </Link>
                        <Link
                            href={'#partners-section'}
                            scroll={false}
                            className='navOption'
                        >
                            Partners
                        </Link>
                    </nav>
                </header>
                <section className={`${styles.animation}`} id='anim-section'>
                    <ScrollRotate method={'perc'} loops={2} from={0} to={360}>
                        <Image
                            src='/img/home/wxmasc_onwhite-logo.svg'
                            className={`${styles.sticky_image}`}
                            alt='Vercel Logo'
                            width={500}
                            height={250}
                            id='welcome-image'
                        />
                    </ScrollRotate>
                </section>
                <section id='welcome-section'>
                    <div
                        className={`${styles.section} ${styles.welcomeSection}`}
                    ></div>
                </section>

                <section
                    id='coaches-section'
                    className={`${styles.section} ${styles.coachesSection}`}
                >
                    {/* Here will be the introduction of the trainees. */}
                    <h1 className={styles.titleSection}>Your Xmas Coaches</h1>
                    <div className={styles.coachesProfile}>
                        {coachArray &&
                            coachArray.map((each: CoachProfile, key) => {
                                return <Coach {...each} key={key} />;
                            })}
                    </div>
                </section>

                <section
                    id='links-section'
                    className={`${styles.section} ${styles.linksSection}`}
                >
                    <h1 className={styles.titleSection}>Useful Links</h1>

                    <div className={`${styles.grid} `}>
                        <Link href='/material' className={styles.card}>
                            <h2>Material &rarr;</h2>
                            <p>Find the material form the event here.</p>
                        </Link>

                        <Link
                            href='https://codesandbox.io/s/xmas-coding-2022-qtido4'
                            target='_blank'
                            className={styles.card}
                        >
                            <h2>Xmas Card &rarr;</h2>
                            <p>
                                Here you will find the initial code to do your
                                own Card!
                            </p>
                        </Link>
                        <Link
                            href='https://xmas-coding-2022.vercel.app '
                            target='_blank'
                            className={styles.card}
                        >
                            <h2>Xmas Card Board &rarr;</h2>
                            <p>Upload your card and see all the other cards</p>
                        </Link>

                        <Link
                            href='https://www.spiced-academy.com/en'
                            target='_blank'
                            className={styles.card}
                        >
                            <h2>SPICED Academy &rarr;</h2>
                            <p>
                                Take a look at our website and the courses that
                                we offer
                            </p>
                        </Link>
                    </div>
                </section>
                <section
                    id='partners-section'
                    className={`${styles.section} ${styles.partnerSection}`}
                >
                    <h1 className={styles.titleSection}>Our Partners</h1>
                    <div className={styles.partnersContainer}>
                        {props.files &&
                            props.files.map((file: string, key) => {
                                return <Partners file={file} key={key} />;
                            })}
                    </div>
                </section>
            </main>
        </>
    );
}

export async function getStaticProps() {
    // Get files from the material dir
    let files = fs.readdirSync(path.join('public', 'img', 'home', 'partners'));

    // console.log("fils: ", files);

    files = files.filter((file) => {
        return file.toLocaleLowerCase().includes('logo');
    });

    // console.log("fils after: ", files);

    return { props: { files } };
}
