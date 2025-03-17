import axios from 'axios';
import { API } from '@/helpers/api';
import { MenuItem } from '@/interfaces/menu.interface';

export async function getMenu(firstCategory: number) {
  try {
    const {data} = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory,
    });

	  return data;
    
  } catch (e) {
    console.log(e);
  }
}