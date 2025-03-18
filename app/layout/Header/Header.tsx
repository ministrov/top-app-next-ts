'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ButtonIcon } from '@/app/components/ButtonIcon/ButtonIcon';
import { Sidebar } from '../Sidebar/Sidebar';
import { HeaderProps } from './Header.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './Header.module.css';

export const Header = ({ menu, firstCategory, className, ...props }: HeaderProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const shoudReduceMotion = useReducedMotion();

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: shoudReduceMotion ? 1 : 0,
            x: '100%',
        }
    };

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Icon.LogoIcon className={styles.logo} />

            <ButtonIcon
                onClick={() => setIsOpened(true)}
                appearence='white'
                icon='MenuIcon'
            />

            <motion.div
                initial={'closed'}
                variants={variants}
                animate={isOpened ? 'opened' : 'closed'}
                className={styles.mobileMenu}
            >
                <Sidebar menu={menu} firstCategory={firstCategory} className={styles.sidebar} />

                <ButtonIcon
                    onClick={() => setIsOpened(false)}
                    className={styles.menuClose}
                    appearence='white'
                    icon='MenuClose'
                />
            </motion.div>
        </header>
    )
}
