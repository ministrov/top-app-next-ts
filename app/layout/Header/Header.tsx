import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';

export const Header = ({ className, ...props }: HeaderProps) => {
    return (
        <header className={cn(className, styles.header)} {...props}>

        </header>
    )
}
