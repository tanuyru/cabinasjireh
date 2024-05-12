import React from 'react';
import Cabin from '../lib/types/cabin';

interface Props {
  cabin: Cabin;
}

const CabinDetails: React.FC<Props> = ({ cabin }) => {
  return (
    <div>
      <h2>{cabin.name}</h2>
      <p>{cabin.description}</p>
      <ul>
        {cabin.urlsToPhotos.map((url, index) => (
          <li key={index}>
            <img src={url} alt={`Photo ${index + 1}`} />
          </li>
        ))}
      </ul>
      {/* Display the booking schedule and prices */}
    </div>
  );
};

export default CabinDetails;