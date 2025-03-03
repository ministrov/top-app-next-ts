import React from 'react';
// import { ParagraphProps } from './Search.props';
import { SearchProps } from './Search.props';
// import cn from 'classnames';
import styles from './Search.module.css';

const Search = ({ }: SearchProps) => {
    return (
        <div className={styles.search}>Search</div>
    )
}

export default Search;