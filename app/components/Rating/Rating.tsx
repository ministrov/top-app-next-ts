import { JSX, useEffect, useState } from 'react';
import StarIcon from '../StarIcon/StarIcon';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';

const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    setMouseEnter={() => changeDisplay(i + 1)}
                    setMouseLeave={() => changeDisplay(rating)}
                    setOnClick={() => onClick(i + 1)}
                />
            );
        });

        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }

        setRating(i);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    )
}

export default Rating;