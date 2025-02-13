import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
// import { getMenu } from '@/api/menu';

type PageData = {
    id?: number,
    alias: string,
    title: string
}

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

// export const generateStaticParams = async () => {
//     const menu = await getMenu(0);
//     return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
// }

export default async function PageProducts({ params }: PageProps) {
    const page: PageData | null = await getPage((await params).alias);
    console.log(page);
    if (!page) {
        notFound();
    }
    return (
        <div>{`Страница с alias ${(await params).alias}`}</div>
    )
}