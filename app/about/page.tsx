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
        // <div className={styles.container}>
        //     <div>1</div>
        //     <div>2</div>
        //     <div>3</div>
        //     <div>4</div>
        //     <div>5</div>
        //     <div>6</div>
        //     <div>7</div>
        //     <div>8</div>
        //     <div>9</div>
        // </div>
    )
}

export default AboutPage;