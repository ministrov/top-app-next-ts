import { API } from '@/helpers/api';
import { TopPageModel } from '@/interfaces/page.interface';

export const getPage = async (alias: string): Promise<TopPageModel | null> => {
    const res = await fetch(API.topPage.byAlias + alias);
    
    if (!res.ok) {
        return null;
    }

    return await res.json();
}  