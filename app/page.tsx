import { Icon } from './assets/Icon';
import { Button } from './components/Button/Button';

export default async function Home() {
  return (
    <div>
      {'Home Page'}

      <div style={{ width: '34px', height: '34px' }}>
        <Icon.CoursesIcon />
      </div>

      <Button arrow='down' appearence={'primary'}>{'fdfdfdf'}</Button>
      <Button arrow='right' appearence={'ghost'}>{'fdfdfdf'}</Button>

      <button>Button</button>

    </div>
  );
}
