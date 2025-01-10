// import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
// import { getMenu } from '@/api/menu';

// export const metadata: Metadata = {
//     title: 'Страница'
// }

// export const generateStaticParams = async () => {
//     const menu = await getMenu(0);
//     return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
// }

export default async function PageProducts({ params }: { params: { alias: string } }) {
    const page = await getPage(params.alias);
    console.log(page);
    if (!page) {
        notFound();
    }
    return (
        <div>{`Страница с alias ${params.alias}`}</div>
    )
}