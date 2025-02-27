import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';
import { TopPageComponent } from '@/app/components/TopPageComponent/TopPageComponent';

import { TopPageModel } from '@/interfaces/page.interface';
import { MenuItem } from '@/interfaces/menu.interface';

// import styles from './page.module.css';


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
        <TopPageComponent page={page} products={products} />
    )
}