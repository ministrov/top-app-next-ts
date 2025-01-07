import { Metadata } from 'next';
import { People } from '@/interfaces/peoples.interface';
import { peoples } from '@/mocks';
import styles from './aboutPage.module.css';

export const metadata: Metadata = {
    title: 'О нас | Название компании',
    description: 'Узнайте больше о нашей команде и миссии'
}

export const getImageUrl = (person: People): string => (`https://i.imgur.com/${person.imageId}s.jpg`);

const AboutPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>Header</div>
                <div className={styles.body}>Body</div>
                <div className={styles.sidebar}>SideBar</div>
                <div className={styles.footer}>Footer</div>
            </div>

            <ul>
                {peoples.map(people => (
                    <li key={people.id}>{people.name}</li>
                ))}
            </ul>
        </>
    )
}

export default AboutPage;