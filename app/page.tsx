// import { getMenu } from '@/api/menu';
import { Icon } from './assets/Icon';
import { Button } from './components/Button/Button';

export default async function Home() {
  // throw new Error('dfsdfsdfs');
  // const menu = await getMenu(0);
  return (
    <div>
      {'Home Page'}

      <div style={{ width: '34px', height: '34px' }}>
        <Icon.CoursesIcon />
      </div>

      <Button arrow='down' appearence={'primary'}>{'fdfdfdf'}</Button>
      <Button arrow='right' appearence={'ghost'}>{'fdfdfdf'}</Button>

      {/* {menu.length} */}
    </div>
  );
}
