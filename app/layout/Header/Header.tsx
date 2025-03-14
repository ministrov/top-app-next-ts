import { HeaderProps } from './Header.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './Header.module.css';
import { ButtonIcon } from '@/app/components/ButtonIcon/ButtonIcon';

export const Header = ({ className, ...props }: HeaderProps) => {
    return (
        <header className={cn(className, styles.header)} {...props}>
            <Icon.LogoIcon className={styles.logo} />

            <ButtonIcon
                appearence='white'
                icon='MenuIcon'
            />
        </header>
    )
}
