import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';

export const Input = ({ className, error, ref, ...props }: InputProps) => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input
                type="text"
                className={cn(styles.input, {
                    [styles.error]: error
                })}
                ref={ref}
                {...props}
            />

            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
}
