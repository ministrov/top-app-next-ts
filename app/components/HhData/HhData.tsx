'use client';

import { JSX } from 'react';
import { HhDataProps } from './HhData.props';
import { Card } from '../Card/Card';
import { Icon } from '@/app/assets/Icon';
import { transformPrice } from '@/helpers';
import styles from './HhData.module.css';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card classNames={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.hhCountValue}>{count}</div>
            </Card>

            <Card classNames={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{`${transformPrice(juniorSalary)} ₽`}</div>
                    <div className={styles.rate}>
                        <span className={styles.rateIcon}>
                            <Icon.RateActiveIcon />
                        </span>
                        <span className={styles.rateIcon} >
                            <Icon.RateIcon />
                        </span>
                        <span className={styles.rateIcon} >
                            <Icon.RateIcon />
                        </span>
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{middleSalary}</div>
                    <div className={styles.rate}>
                        <span className={styles.rateIcon}>
                            <Icon.RateActiveIcon />
                        </span>
                        <span className={styles.rateIcon} >
                            <Icon.RateActiveIcon />
                        </span>
                        <span className={styles.rateIcon} >
                            <Icon.RateIcon />
                        </span>
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{seniorSalary}</div>
                    <div className={styles.rate}>
                        <span className={styles.rateIcon}>
                            <Icon.RateActiveIcon />
                        </span>
                        <span className={styles.rateIcon} >
                            <Icon.RateActiveIcon />
                        </span>
                        <span className={styles.rateIcon} >
                            <Icon.RateActiveIcon />
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    )
}