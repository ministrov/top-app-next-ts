import React from 'react';
import { ParagraphProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';

const Paragraph = ({ size = 'medium', children }: ParagraphProps) => {
    return (
        <p className={cn(styles.p, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
        })}>
            {children}
        </p>
    )
}

export default Paragraph;