import { Metadata } from 'next';
import Image from 'next/image';
import { peoples } from '@/mocks';
import styles from './aboutPage.module.css';

export const metadata: Metadata = {
    title: 'О нас | Название компании',
    description: 'Узнайте больше о нашей команде и миссии'
}

// export const getImageUrl = (imageId: string): string => (`https://i.imgur.com/${imageId}s.jpg`);

const AboutPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>Header</div>
                <div className={styles.body}>Body</div>
                <div className={styles.sidebar}>SideBar</div>
                <div className={styles.footer}>Footer</div>
            </div>

            <ChemistsList />

            <EveryOneElseList />
        </>
    )
}

export default AboutPage;

export const ChemistsList = () => {
    const chemists = peoples.filter(people => people.profession === 'chemist');
    return (
        <article>
            <h2>Chemists</h2>
            <ul>
                {chemists.map(person => (
                    <li key={person.id}>
                        <Image
                            src={'/public/arrow.svg'}
                            width={123}
                            height={234}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export const EveryOneElseList = () => {
    const everyoneElse = peoples.filter(people => people.profession !== 'chemist');
    return (
        <article>
            <h2>EveryoneElse</h2>
            <ul>
                {everyoneElse.map(person => (
                    <li key={person.id}>
                        <Image
                            src={'/public/arrow.svg'}
                            width={123}
                            height={234}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                ))}
            </ul>
        </article>
    )
}