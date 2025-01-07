import { Metadata } from 'next';
// import Image from 'next/image';
// import { peoples } from '@/mocks';
// import { recipes } from '@/mocks';
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

            {/* <RecipesList /> */}
        </>
    )
}

export default AboutPage;

// export const RecipesList = () => {
//     return (
//         <div>
//             <h1>Recipes</h1>
//             {recipes.map(recipe => (
//                 <div key={recipe.id}>
//                     <h2>{recipe.name}</h2>
//                     <ul>
//                         {recipe.ingredients.map(ingredient => (
//                             <li key={ingredient}>{ingredient}</li>
//                         ))}
//                     </ul>
//                 </div>

//             ))}
//         </div>
//     )
// }