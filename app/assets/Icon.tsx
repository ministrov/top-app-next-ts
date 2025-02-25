import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import GoodsIcon from './icons/goods.svg';
import ArrowIcon from './icons/arrow.svg';
import LogoIcon from './icons/logo.svg';


export const Icon = {
    CoursesIcon,
    ServicesIcon,
    BooksIcon,
    GoodsIcon,
    ArrowIcon,
    LogoIcon
};

export type IconType = keyof typeof Icon;
