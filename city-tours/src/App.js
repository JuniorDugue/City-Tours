import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/Tourlist";

// styling
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <TourList /> 
    </>
  );
}

export default App;
