// import React from 'react';
// import { useParams } from 'react-router-dom';

// function DogDetails({ dogs }) {
//   const { name } = useParams();
//   const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

//   if (!dog) return <h2>No dog found!</h2>;

//   return (
//     <div>
//       <img src={dog.src} alt={dog.name} />
//       <h2>{dog.name}</h2>
//       <p>Age: {dog.age}</p>
//       <ul>
//         {dog.facts.map((fact, idx) => (
//           <li key={idx}>{fact}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DogDetails;

import React from 'react';

function DogDetails({ dog }) {

  // Check if dog exists
  if (!dog) return <h2>No dog found!</h2>;

  return (
    <div>
      <img src={dog.src} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
