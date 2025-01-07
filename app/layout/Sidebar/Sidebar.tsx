import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }) => {
    return (
        <aside {...props}>
            <Menu />
        </aside>
    )
}