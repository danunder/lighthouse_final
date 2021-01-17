import React from 'react';

export default function Reviews() {
  const fakeReview = [
    {
      name: 'Jared',
      stars: '4',
    },
    {
      name: 'Jimmy',
      stars: 2,
    },
    {
      name: 'Dan',
      stars: 3,
    },
    {
      name: 'Emily',
      stars: 5,
    },
  ];
  const mapData = fakeReview.map(data => {
    return (
      <div className='review-block'>
        <h1>{data.name}</h1>
        <p>{data.stars}</p>
      </div>
    );
  });
  return mapData;
}
