import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getCourses } from '@/api/product';
import { TopPageComponent } from '@/app/components/TopPageComponent/TopPageComponent';

import { TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';

type PageProps = {
    params: Promise<{ alias: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const page = await getPage((await params).alias);

    return {
        title: page?.metaTitle,
        description: page?.metaDescription || ''
    }
}

// export async function generateStaticParams() {
//     const menu = await getMenu(0);
//     return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
// }

export default async function PageCourses({ params }: PageProps) {
    const page = await getPage((await params).alias) as TopPageModel;
    const courses = await getCourses(page) as ProductModel[];

    if (!page) {
        notFound();
    }
    return (
        <TopPageComponent page={page} products={courses} />
    )
}