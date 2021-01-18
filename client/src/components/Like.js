import React, { useState } from 'react';
import { IoThumbsUpOutline } from 'react-icons/io5'

export default function Like(props) {
  const [ like, setLike ] = useState(false);
  const [ hover, setHover ] = useState(null);

  return (
    <label>
      <input
        type='radio'
        name='rating'
        value={like}
        onClick={() => setLike(true)}
      />
      <IoThumbsUpOutline
        className='thumbs-up'
        color={(hover || like) ? "rgb(0, 228, 38)" : "black"}
        size={30}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(null)}
      />
    </label>
  )
}