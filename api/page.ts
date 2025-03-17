import axios from 'axios';
import { TopPageModel } from '@/interfaces/page.interface';
import { API } from '@/helpers/api';

export const getPage = async (alias: string) => {
    try {
        const {data} = await axios.get<TopPageModel>(API.topPage.byAlias + alias);

        return data;
    } catch (e) {
        console.log(e);
    }
} 

// export async function getPage(alias: string) {
// 	const {data} = await axios.get<IPage>(API.topPage.byAlias + alias);
// 	return data;
// }