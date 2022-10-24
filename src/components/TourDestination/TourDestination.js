import React from 'react';

const TourDestination = ({ destination }) => {
  const { title, img, price, rating } = destination;
  return (
    <div>
      <div></div>
      <h1>{title}</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default TourDestination;