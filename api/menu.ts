import { API } from '@/helpers/api';
import { MenuItem } from '@/interfaces/menu.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const response = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory
    }),
    headers: new Headers({ 'content-type': 'application/json' })
  });

  return await response.json();
}