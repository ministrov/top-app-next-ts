'use client';

import { AppContextProvider } from '@/app/context/app.contex';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Menu } from '../Menu/Menu';
// import { getMenu } from '@/api/menu';

// const menu = await getMenu(0);

export const Sidebar = ({ ...props }) => {
    return (
        <aside {...props}>
            <AppContextProvider menu={props.menu} firstCategory={TopLevelCategory.Courses}>
                <Menu />
            </AppContextProvider>
        </aside>
    )
}