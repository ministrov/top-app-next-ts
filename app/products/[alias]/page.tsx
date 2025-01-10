import { Metadata } from 'next';
// import { PageProps } from '@/.next/types/app/page';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';

export const metadata: Metadata = {
    title: 'Страница'
}

export const generateStaticParams = async () => {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function PageProduct({ params }: { params: { alias: string } }) {
    // const { alias } = params;
    const page = await getPage(params.alias);
    if (!page) {
        notFound();
    }
    return (
        <div>{`Страница с alias ${params.alias}`}</div>
    )
}