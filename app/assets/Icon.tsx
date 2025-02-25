import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import GoodsIcon from './icons/goods.svg';
import ArrowIcon from './icons/arrow.svg';
import LogoIcon from './icons/logo.svg';
import RateIcon from './icons/rate.svg';
import RateActiveIcon from './icons/rate-active.svg';


export const Icon = {
    CoursesIcon,
    ServicesIcon,
    BooksIcon,
    GoodsIcon,
    ArrowIcon,
    LogoIcon,
    RateIcon,
    RateActiveIcon
};

export type IconType = keyof typeof Icon;
