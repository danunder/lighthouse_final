import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

export default function StarRating(props) {
  const [rating, setRating] = useState(props.rating || null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                props.onRatingClick(ratingValue)
              }}
            />
            <FaStar
              className='star'
              color={
                ratingValue <= (hover || rating)
                  ? 'gold'
                  : 'rgba(128, 128, 128, 0.246)'
              }
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
