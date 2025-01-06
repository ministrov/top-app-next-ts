import Link from 'next/link';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps) => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <span>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</span>
            <Link href={'#'}>Пользовательское соглашение</Link>
            <Link href={'#'}>Политика конфиденциальности</Link>
        </footer>
    )
}