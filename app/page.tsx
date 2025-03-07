import { Icon } from './assets/Icon';
import { Button } from './components/Button/Button';

type Item = {
  id: string;
};

type Post = Item & {
  title: string;
  description: string;
}

type MegaPost = Post & {
  viewsCount: number;
}

const myItem: Item | MegaPost = { id: '31337nb' };
const myViewsCount: MegaPost = { viewsCount: 6, id: 'sfsdfsd', title: 'sfsdf', description: 'sfsdfsd' };

function printId<T extends Item>(post: T): void {
  console.log(post.id);
}

printId(myItem);
printId(myViewsCount);

export default async function Home() {
  return (
    <div>
      {'Home Page'}

      <div style={{ width: '34px', height: '34px' }}>
        <Icon.CoursesIcon />
      </div>

      <Button arrow='down' appearence={'primary'}>{'fdfdfdf'}</Button>
      <Button arrow='right' appearence={'ghost'}>{'fdfdfdf'}</Button>

    </div>
  );
}
