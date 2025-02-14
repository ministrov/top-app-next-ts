import { MyContextProvider } from './context/app.contex';
import { Icon } from './assets/Icon';
import { Button } from './components/Button/Button';

export default async function Home() {
  return (
    <MyContextProvider text={1}>
      <div>
        {'Home Page'}

        <div style={{ width: '34px', height: '34px' }}>
          <Icon.CoursesIcon />
        </div>

        <Button arrow='down' appearence={'primary'}>{'fdfdfdf'}</Button>
        <Button arrow='right' appearence={'ghost'}>{'fdfdfdf'}</Button>
      </div>
    </MyContextProvider>
  );
}
