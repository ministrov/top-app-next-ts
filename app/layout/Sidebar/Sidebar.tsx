import { TopLevelCategory } from '@/interfaces/page.interface';
import { Icon } from '@/app/assets/Icon';
import { Menu } from '../Menu/Menu';
import { getMenu } from '@/api/menu';

export const Sidebar = async ({ ...props }) => {
    const menu = await getMenu(TopLevelCategory.Courses);
    return (
        <aside {...props}>
            <Icon.LogoIcon />
            <div>Search</div>
            <Menu categories={menu} />
        </aside>
    )
}