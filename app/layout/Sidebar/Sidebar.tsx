import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Menu } from '../Menu/Menu';

export const Sidebar = async ({ ...props }) => {
    const menu = await getMenu(TopLevelCategory.Courses);
    return (
        <aside {...props}>
            <Menu categories={menu} />
        </aside>
    )
}