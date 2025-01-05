import { getMenu } from '@/api/menu';

export default async function Home() {
  const menu = await getMenu(0);
  console.log(menu);
  console.log(typeof menu);
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
