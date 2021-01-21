import React from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

export default function StarRating(props) {
  const rating = props.rating;

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <FaStar
              className='star'
              color={
                ratingValue <= (props.rating)
                  ? 'gold'
                  : 'rgba(128, 128, 128, 0.246)'
              }
              size={25}
            />
          </label>
        );
      })}
    </div>
  );
}
