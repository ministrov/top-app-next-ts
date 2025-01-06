import Menu from '../Menu/Menu';

const Sidebar = ({ ...props }) => {
    return (
        <aside {...props}>
            <Menu />
        </aside>
    )
}

export default Sidebar;