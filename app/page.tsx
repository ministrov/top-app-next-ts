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
  const [kettle, setKettle] = useState<{ isFull: boolean, isHot: boolean, isTurnOn: boolean, tempreture: number }>({
    isFull: false,
    isHot: false,
    isTurnOn: false,
    tempreture: 23
  });

  useEffect(() => {
    if (counter > 3) {
      console.log('Counter: ' + counter);
    }

    // console.log(kettle);

    return function cleanup() {
      console.log('Unmount');
    };
  });

  const turnOnTheKettleHandler = () => {
    setKettle(x => ({
      ...x,
      isFull: true,
      isHot: true,
      isTurnOn: true,
      tempreture: 80
    }));

    console.log(kettle);
  };

  return (
    <div>
      dfkdjfskdfjsdkfjsd

      <Htag tag='h3'>
        {counter}
      </Htag>

      <Button appearence='primary' onClick={() => setCounter(x => x + 1)} className='sfsfsdf' arrow='right'>Узнать подробнее</Button>
      <Button appearence='ghost' arrow='right'>Читать отзывы</Button>
      <Button appearence='ghost' arrow='down'>Читать отзывы</Button>
      <Button appearence='primary' arrow='right' onClick={turnOnTheKettleHandler}>Включить чайник</Button>

      <P size={'large'}>Большой</P>
      <P>Средний</P>
      <P size={'small'}>Маленький</P>

      <Tag size='small'>Ghost</Tag>
      <Tag size='medium' color='red'>Red</Tag>
      <Tag size='medium' color='green'>Green</Tag>
      <Tag size='medium' color='primary'>Primary</Tag>

      <div style={{ display: 'flex', gap: '15px', padding: '24px', border: '1px solid purple', borderRadius: '8px' }}>
        Оценка:
        <Rating rating={rating} isEditable setRating={setRating} />
      </div>

    </div>
  );
}
