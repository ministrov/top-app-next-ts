'use client';

import { useEffect, useState } from 'react';
import { Button } from './components/Button/Button';
import Htag from './components/Htag/Htag';
import P from './components/P/P';
import Tag from './components/Tag/Tag';
import Rating from './components/Rating/Rating';

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    if (counter > 3) {
      console.log('Counter: ' + counter);
    }

    return function cleanup() {
      console.log('Unmount');
    };
  });

  return (
    <div>
      dfkdjfskdfjsdkfjsd

      <Htag tag='h3'>
        {counter}
      </Htag>

      <Button appearence='primary' onClick={() => setCounter(x => x + 1)} className='sfsfsdf' arrow='right'>Узнать подробнее</Button>
      <Button appearence='ghost' arrow='right'>Читать отзывы</Button>
      <Button appearence='ghost' arrow='down'>Читать отзывы</Button>

      <P size={'large'}>Большой</P>
      <P>Средний</P>
      <P size={'small'}>Маленький</P>

      <Tag size='small'>Ghost</Tag>
      <Tag size='medium' color='red'>Red</Tag>
      <Tag size='medium' color='green'>Green</Tag>
      <Tag size='medium' color='primary'>Primary</Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}
