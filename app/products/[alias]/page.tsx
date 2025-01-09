import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';

export const metadata: Metadata = {
    title: 'Страница'
}

export const generateStaticParams = async () => {
    const menu = await getMenu(0);
    // console.log(flattedMenu);
    return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export const ProductsPage = async ({ params }: { params: { alias: string } }) => {
    const page = await getPage(params.alias);
    if (!page) {
        notFound();
    }
    return (
        <div>{page.title}</div>
    )
}