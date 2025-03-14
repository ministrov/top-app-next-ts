'use client';

import { motion } from 'framer-motion';
import { ButtonIcon } from '@/app/components/ButtonIcon/ButtonIcon';
import { Sidebar } from '../Sidebar/Sidebar';
import { HeaderProps } from './Header.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './Header.module.css';

export const Header = ({ className, ...props }: HeaderProps) => {
    return (
        <header className={cn(className, styles.header)} {...props}>
            <Icon.LogoIcon className={styles.logo} />

            <ButtonIcon
                appearence='white'
                icon='MenuIcon'
            />

            <motion.div className={styles.mobileMenu}>
                <Sidebar className={styles.sidebar} />

                <ButtonIcon
                    appearence='white'
                    icon='MenuClose'
                />
            </motion.div>
        </header>
    )
}
