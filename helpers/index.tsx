import { Icon } from '@/app/assets/Icon';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        id: TopLevelCategory.Courses,
        route: 'courses',
        name: 'Курсы',
        icon: <Icon.CoursesIcon />,
    },
    {
        id: TopLevelCategory.Services,
        route: 'services',
        name: 'Сервисы',
        icon: <Icon.ServicesIcon />,
    },
    {
        id: TopLevelCategory.Books,
        route: 'books',
        name: 'Книги',
        icon: <Icon.BooksIcon />,
    },
    {
        id: TopLevelCategory.Goods,
        route: 'goods',
        name: 'Товары',
        icon: <Icon.GoodsIcon />,
    },
]

export const transformPrice = (price: number): string => {
    return new Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(price);
};

export const declineNumber = (number: number, titles: [string, string, string]): string => {
    const remainer = number % 10;
    const exeptions = [11, 12, 13, 14];

    if (remainer === 1 && !exeptions.includes(number)) {
        return titles[0];
    } else if (remainer > 1 && remainer < 5 && !exeptions.includes(number)) {
        return titles[1];
    } else {
        return titles[2];
    }
};


// const x = { a: 1, b: 2, c: 3, d: 4 };

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }

// getProperty(x, 'a');
// getProperty(x, 'b');

// Пример для портфолио как реализовать фильтраци по нажатию на кнопки

// import React, { useReducer } from 'react';

// // Исходные данные
// const initialProjects = [
//     { id: 1, name: 'Project Alpha' },
//     { id: 2, name: 'Project Beta' },
//     { id: 3, name: 'Project Gamma' }
// ];

// // Редукторная функция
// function reducer(state, action) {
//     switch (action.type) {
//         case 'FILTER':
//             return {
//                 ...state,
//                 filteredProjects: state.projects.filter(project =>
//                     project.name === action.payload
//                 )
//             };
//         case 'RESET':
//             return {
//                 ...state,
//                 filteredProjects: state.projects
//             };
//         default:
//             return state;
//     }
// }

// // Компонент
// function ProjectFilter() {
//     const [state, dispatch] = useReducer(reducer, {
//         projects: initialProjects,
//         filteredProjects: initialProjects
//     });

//     return (
//         <div>
//             {state.projects.map(project => (
//                 <button key={project.id} onClick={() =>
//                     dispatch({ type: 'FILTER', payload: project.name })
//                 }>
//                     {project.name}
//                 </button>
//             ))}
//             <button onClick={() => dispatch({ type: 'RESET' })}>Show All</button>
//             <ul>
//                 {state.filteredProjects.map(project => (
//                     <li key={project.id}>{project.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ProjectFilter;