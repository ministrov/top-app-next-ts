import React, { JSX } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({ text, icon, type }: ButtonProps): JSX.Element => {
    return (
        <>
            {icon ? (
                <button className={styles.button} > {text}</button>
            ) : (
                <div >{type}sdfsdfsdf</div>
            )}
        </>
    )
}
