import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';

export const Input = ({ className, ...props }: InputProps) => {
    return (
        <input type="text" className={cn(className, styles.Input)} {...props} />
    )
}
