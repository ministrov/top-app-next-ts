import { Metadata } from 'next';
import { TopPageModel } from '@/interfaces/page.interface';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';

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
    const pages: TopPageModel | null = await getPage((await params).alias);

    if (!pages) {
        notFound();
    }
    return (
        <div>
            {pages.title.length}
        </div>
    )
}