import React, { useState } from 'react';
import { IoThumbsDownOutline } from 'react-icons/io5'

export default function Dislike(props) {
  const [ dislike, setDislike ] = useState(false);
  const [ hover, setHover ] = useState(null);

  return (
    <label>
      <input
        type='radio'
        name='rating'
        value={dislike}
        onClick={() => setDislike(true)}
      />
      <IoThumbsDownOutline
        className='thumbs-up'
        color={(hover || dislike) ? "red" : "black"}
        size={30}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(null)}
      />
    </label>
  )
}