import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';

export const Input = ({ className, error, ref, ...props }: InputProps) => {
    return (
        <div>
            <input {...props} type="text" className={cn(className, styles.input)} ref={ref} />

            {error && error.message}
        </div>
    )
}
