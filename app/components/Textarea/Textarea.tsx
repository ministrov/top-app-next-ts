import { TextareaProps } from './Textarea.props';
import cn from 'classnames';
import styles from './Textarea.module.css';

export const Textarea = ({ className, ref, ...props }: TextareaProps) => {
    return (
        <textarea className={cn(className, styles.input)} ref={ref} {...props} />
    )
}
