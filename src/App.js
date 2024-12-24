import React, { useState, useEffect } from "react";
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'


const App = () => {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Movies />
    </div>
  );
};

export default App;
