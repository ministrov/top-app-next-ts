'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ButtonIcon } from '@/app/components/ButtonIcon/ButtonIcon';
import { Sidebar } from '../Sidebar/Sidebar';
import { HeaderProps } from './Header.props';
import { Icon } from '@/app/assets/Icon';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { API } from '@/helpers/api';
import { AppContextProvider } from '@/context/app.context';
import { MenuItem } from '@/interfaces/menu.interface';
import cn from 'classnames';
import styles from './Header.module.css';

export const Header = ({ className, ...props }: HeaderProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const [data, setData] = useState<MenuItem[]>();

    useEffect(() => {
        const getMenu = async (firstCategory: number) => {
            const response = await fetch(API.topPage.find, {
                method: 'POST',
                body: JSON.stringify({
                    firstCategory
                }),
                headers: new Headers({ 'content-type': 'application/json' })
            });

            const result = await response.json();
            setData(result);
        }

        getMenu(TopLevelCategory.Courses);
    }, []);

    // useEffect(() => {

    // }, []);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%',
        }
    };

    return (
        <AppContextProvider menu={data as MenuItem[]} firstCategory={TopLevelCategory.Courses}>
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
                    <Sidebar className={styles.sidebar} />

                    <ButtonIcon
                        onClick={() => setIsOpened(false)}
                        className={styles.menuClose}
                        appearence='white'
                        icon='MenuClose'
                    />
                </motion.div>
            </header>
        </AppContextProvider>
    )
}
