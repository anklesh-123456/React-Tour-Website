import React from 'react';

const TripData = (props) => {
  return (
    <div className='trip-card'>
    <div className='trip-image' >
        <img src={props.image} alt="tripImage" />
    </div>
    <h4>{props.heading}</h4>
    <p>{props.text}</p>
    </div>
  );
};

export default TripData;