import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';

export const Input = ({ className, error, ref, ...props }: InputProps) => {
    return (
        <div className={styles.inputWrapper}>
            <input
                type="text"
                className={cn(className, styles.input, {
                    [styles.error]: error
                })}
                ref={ref}
                {...props}
            />

            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
}
