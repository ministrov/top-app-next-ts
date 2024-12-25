import styles from './aboutPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'О нас | Название компании',
    description: 'Узнайте больше о нашей команде и миссии'
}

const AboutPage = () => {
    return (
        <section className={styles.container}>
            about page
        </section>
    )
}

export default AboutPage;