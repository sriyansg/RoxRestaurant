import React from 'react';
import './Location.scss'

const LocationMap = ({ latitude, longitude, address }) => {
  const googleMapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className='location'>
      <h2>Location</h2>
      <p>{address}</p>
      <iframe
        title="Restaurant Location"
        width="600"
        height="450"
        className='map'
        style={{ border: 0 }}
        src={googleMapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LocationMap;
