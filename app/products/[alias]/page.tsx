import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
// import { getMenu } from '@/api/menu';

export const metadata: Metadata = {
    title: 'Страница'
}

// export const generateStaticParams = async () => {
//     const menu = await getMenu(0);
//     return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
// }

const ProductsPage = async ({ params }: { params: { alias: string } }) => {
    console.log(params);
    const page = await getPage(params.alias);
    if (!page) {
        notFound();
    }
    return (
        <div>{page.title}</div>
    )
}

export default ProductsPage;