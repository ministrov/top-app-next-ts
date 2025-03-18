'use client';

import { useReducer } from 'react';
import parse from 'html-react-parser';
import Htag from '@/app/components/Htag/Htag';
import { HhData } from '@/app/components/HhData/HhData';
import Tag from '@/app/components/Tag/Tag';
import { Sorting } from '@/app/components/Sorting/Sorting';
import { Advantages } from '@/app/components/Advantages/Advantages';
import { SortEnum } from '@/app/components/Sorting/Sorting.props';
import { Product } from '../Product/Product';
import { TopPageComponentProps } from './TopPageComponent.props';
import { sortReducer } from './sort.reducer';
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({ page, products }: TopPageComponentProps) => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='medium' aria-label={products.length + 'элементов'}>{products.length ?? 10}</Tag>}

                <Sorting sort={sort} setSort={setSort} />
            </div>

            <div className={styles.productsList}>
                {sortedProducts && sortedProducts.map(p => (<Product layout key={p._id} product={p} />))}
            </div>

            <div className={styles.hhWrapper}>
                <div className={styles.hhContent}>
                    <Htag tag='h2'>Вакансии - {page.category}</Htag>
                    <Tag color='red' size='medium'>hh.ru</Tag>
                </div>
                {products && page.hh && <HhData
                    count={page.hh?.count || 0}
                    juniorSalary={page.hh?.juniorSalary || 0}
                    middleSalary={page.hh?.middleSalary || 0}
                    seniorSalary={page.hh?.seniorSalary || 0}
                />}
            </div>

            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Преимущества</Htag>

                <Advantages advantages={page.advantages} />
            </>}

            {page.seoText && <div className={styles.seo}>{parse(page.seoText)}</div>}

            <Htag tag='h2'>Получаемые навыки</Htag>

            {page.tags && page.tags.map(tag => (
                <Tag key={tag} color='primary'>{tag}</Tag>
            ))}
        </div>
    )
}
