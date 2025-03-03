import React from 'react';
import { SearchingProps } from './Searching.props';
import cn from 'classnames';
import styles from './Searching.module.css';

const Searching = ({ className, ...props }: SearchingProps) => {
    return (
        <div className={cn(styles.search, className)} {...props}>Search</div>
    )
}

export default Searching;