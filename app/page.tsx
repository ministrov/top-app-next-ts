'use client';

import { Button } from './components/Button/Button';
import Htag from './components/Htag/Htag';
import P from './components/P/P';
import Tag from './components/Tag/Tag';

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

      <Button appearence='primary' onClick={onclick} className='sfsfsdf' arrow='right'>Узнать подробнее</Button>
      <Button appearence='ghost' arrow='right'>Читать отзывы</Button>
      <Button appearence='ghost' arrow='down'>Читать отзывы</Button>

      <P size={'large'}>Большой</P>
      <P>Средний</P>
      <P size={'small'}>Маленький</P>

      <Tag size='small'>Ghost</Tag>
      <Tag size='medium' color='red'>Red</Tag>
      <Tag size='medium' color='green'>Green</Tag>
      <Tag size='medium' color='primary'>Primary</Tag>
    </div>
  );
}
