import Head from 'next/head';
import styles from './aboutPage.module.css';

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>О нас | Название компании</title>
                <meta name="description" content="Узнайте больше о нашей команде и миссии" />
            </Head>

            <section className={styles.container}>
                about page
            </section>
        </>
    )
}

export default AboutPage;