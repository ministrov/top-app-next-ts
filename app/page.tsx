'use client';

import { Button } from './components/Button/Button';
import Htag from './components/Htag/Htag';

export default function Home() {
  const onclick = () => {
    console.log('clicked');
  }
  return (
    <div>
      dfkdjfskdfjsdkfjsd

      <Htag tag='h3'>
        Some text
      </Htag>

      <Button appearence='primary' onClick={onclick} className='sfsfsdf'>Узнать подробнее</Button>
      <Button appearence='ghost'>Читать отзывы</Button>
    </div>
  );
}
