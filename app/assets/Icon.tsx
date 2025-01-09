import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import GoodsIcon from './icons/goods.svg';


export const Icon = {
    CoursesIcon,
    ServicesIcon,
    BooksIcon,
    GoodsIcon
};

export type IconType = keyof typeof Icon;
