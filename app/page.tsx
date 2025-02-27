import { Icon } from './assets/Icon';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Textarea } from './components/Textarea/Textarea';

export default async function Home() {
  return (
    <div>
      {'Home Page'}

      <div style={{ width: '34px', height: '34px' }}>
        <Icon.CoursesIcon />
      </div>

      <Button arrow='down' appearence={'primary'}>{'fdfdfdf'}</Button>
      <Button arrow='right' appearence={'ghost'}>{'fdfdfdf'}</Button>


      <Input className='input' placeholder='Имя' />

      <Textarea className='input' placeholder='Текст отзыва' />
    </div>
  );
}
