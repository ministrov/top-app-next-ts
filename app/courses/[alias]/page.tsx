import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';
import Htag from '@/app/components/Htag/Htag';
import { HhData } from '@/app/components/HhData/HhData';
import Tag from '@/app/components/Tag/Tag';
import { Sorting } from '@/app/components/Sorting/Sorting';
import { TopPageModel } from '@/interfaces/page.interface';
import { MenuItem } from '@/interfaces/menu.interface';

import styles from './page.module.css';
import { Advantages } from '@/app/components/Advantages/Advantages';
import { SortEnum } from '@/app/components/Sorting/Sorting.props';

type PageProps = {
    params: Promise<{ alias: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const page = await getPage((await params).alias);

    return {
        title: page?.title || 'Page Not Found',
        description: page?.metaDescription || ''
    }
}

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function PageCourses({ params }: PageProps) {
    const page: TopPageModel | null = await getPage((await params).alias);
    const products: MenuItem[] = await getMenu(0);

    if (!page) {
        notFound();
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='medium'>{products.length}</Tag>}

                <Sorting sort={SortEnum.Price} setSort={() => console.log('sfsfsf')} />
            </div>

            <div>
                {'Course'}
                {products.map(product => product.pages.map(page => page.title))}
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