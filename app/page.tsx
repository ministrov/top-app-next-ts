import { API } from '@/api/api';
import { MenuItem } from '@/interfaces/menu.interface';

async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const response = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory
    }),
    headers: new Headers({ 'content-type': 'application/json' })
  });

  return response.json();
}

export default async function Home() {
  const menu = await getMenu(0);
  console.log('I am Home!!!');

  return (
    <div>
      {'Home Page'}
      <ul>
        {JSON.stringify(menu)}
        <li>{menu.length}</li>
      </ul>
    </div>
  );
}
