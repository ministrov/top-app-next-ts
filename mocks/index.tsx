import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Icon } from '@/app/assets/Icon';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        id: TopLevelCategory.Courses,
        route: 'courses',
        name: 'Курсы',
        icon: <Icon.CoursesIcon />,
    },
    {
        id: TopLevelCategory.Courses,
        route: 'services',
        name: 'Сервисы',
        icon: <Icon.ServicesIcon />,
    },
    {
        id: TopLevelCategory.Courses,
        route: 'books',
        name: 'Книги',
        icon: <Icon.BooksIcon />,
    },
    {
        id: TopLevelCategory.Courses,
        route: 'goods',
        name: 'Товары',
        icon: <Icon.GoodsIcon />,
    },
]
