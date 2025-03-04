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