'use client';

import { JSX } from 'react';
import { HhDataProps } from './HhData.props';
import { Card } from '../Card/Card';
import cn from 'classnames';
import styles from './HhData.module.css';

export const HhData = ({ count }: HhDataProps): JSX.Element => {
    return (
        <div className={cn(styles.hh)}>
            <Card classNames={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.hhCountValue}>{count}</div>
            </Card>

            <Card classNames={styles.salary}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.salaryValue}>{count}</div>
                <div className={styles.rate}>{count}</div>
            </Card>
        </div>
    )
}