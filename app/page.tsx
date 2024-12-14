import { Button } from './components/Button/Button';
import Htag from './components/Htag/Htag';

export default function Home() {
  return (
    <div>
      dfkdjfskdfjsdkfjsd

      <Htag tag='h3'>
        Some text
      </Htag>

      <Button appearence='primary'>Узнать подробнее</Button>
      <Button appearence='ghost'>Читать отзывы</Button>
    </div>
  );
}
