import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map(dog => (
        <div key={dog.name}>
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>
            <img src={dog.src} alt={dog.name} />
            <h3>{dog.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
