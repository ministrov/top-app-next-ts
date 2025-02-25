import { Metadata } from 'next';
import { TopPageModel } from '@/interfaces/page.interface';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';
import Htag from '@/app/components/Htag/Htag';
import { MenuItem } from '@/interfaces/menu.interface';
import Tag from '@/app/components/Tag/Tag';

import styles from './page.module.css';

// type PageData = {
//     id?: number,
//     alias: string,
//     title: string
// }

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

                <span>Sorting</span>
            </div>

            <div>
                {'Course'}
            </div>

            <div className={styles.hhContent}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='medium'>hh.ru</Tag>
            </div>
            <div className={styles.hh}>

            </div>
        </div>
    )
}