import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';  Moved to SpecificDogDetail component

import Nav from './components/Nav';
import DogList from './components/DogList';
// import DogDetails from './components/DogDetails';  Moved to SpecificDogDetail component
import SpecificDogDetail from './components/SpecificDogDetail';  

import whiskey from './assets/whiskey.jpg';
import duke from './assets/duke.jpg';
import perry from './assets/perry.jpg';
import tubby from './assets/tubby.jpg';


function App(props) {
  // function SpecificDogDetail({ dogs }) {
  //   let { name } = useParams();
  //   const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
  //   return <DogDetails dog={dog} />;
  // }  
  // Moved to SpecificDogDetail component

  // <Route path="/dogs/:name" element={<DogDetails dogs={props.dogs} />} />  Updated in return statement for bonus question
  return (
    <Router>
      <Nav dogs={props.dogs} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={props.dogs} />} />

        <Route path="/dogs/:name" element={<SpecificDogDetail dogs={props.dogs} />} />
        <Route path="*" element={<Navigate to="/dogs" replace />} />
      </Routes>
    </Router>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
