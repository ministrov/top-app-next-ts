import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';

export const metadata: Metadata = {
    title: 'Страница'
}

const ProductsPage = async ({ params }: { params: { alias: string } }) => {
    const page = await getPage(params.alias);
    console.log(page);
    console.log(params);
    if (!page) {
        notFound();
    }
    return (
        <div>
            {/* Страница c alias {params.alias} */}
            {page.title}
        </div>
    )
}

export default ProductsPage;