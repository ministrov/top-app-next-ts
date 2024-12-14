'use client';

import { JSX } from 'react';
import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

// console.log(styles.__checksum);

export default function Htag({ tag, children }: HtagProps): JSX.Element {

    // First way of render multiple htag
    // return (
    //     <>
    //         {tag === 'h1' && <h1 className={styles.htag}>{children}</h1>}
    //         {tag === 'h2' && <h2 className={styles.htag__h2}>{children}</h2>}
    //         {tag === 'h3' && <h3 className={styles.htag__h2}>{children}</h3>}
    //     </>
    // )

    // Second way
    switch (tag) {
        case 'h1':
            return <h1 className={styles.htag}>{children}</h1>;
        case 'h2':
            return <h2 className={styles.htag__h2}>{children}</h2>;
        case 'h3':
            return <h3 className={styles.htag__h3}>{children}</h3>;
        default:
            return <></>;
    }
}