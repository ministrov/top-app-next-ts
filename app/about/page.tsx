import { Metadata } from 'next';
import styles from './aboutPage.module.css';

export const metadata: Metadata = {
    title: 'О нас | Название компании',
    description: 'Узнайте больше о нашей команде и миссии'
}

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Header</div>
            <div className={styles.body}>Body</div>
            <div className={styles.sidebar}>SideBar</div>
            <div className={styles.footer}>Footer</div>
        </div>
    )
}

export default AboutPage;