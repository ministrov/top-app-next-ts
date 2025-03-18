import { TextareaProps } from './Textarea.props';
import cn from 'classnames';
import styles from './Textarea.module.css';

export const Textarea = ({ className, error, ref, ...props }: TextareaProps) => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
                [styles.error]: error
            })} ref={ref} {...props} />

            {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
}
