import React from 'react';
import DogDetails from './DogDetails';
import { useParams } from 'react-router-dom'; 

function SpecificDogDetail({ dogs }) {
  let { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
  return <DogDetails dog={dog} />;
}

export default SpecificDogDetail;