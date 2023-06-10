import React from 'react';
import Home from './Home';
import Error from './Error';
import { Routes,Route } from "react-router-dom";
import Movie from './Movie';
import "./App.css"
import "./utils.css"

const App = () => {
  return (<>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id/:score' element={<Movie/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>    
    </>
  )
}

export default App