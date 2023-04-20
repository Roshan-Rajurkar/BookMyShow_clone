// import { Route, Routes } from 'react-router-dom';
// HOC
import React from 'react';
import DefaultHOC from './HOC/DefaultHOC'
import axios from 'axios'
// component
import HomePage from './components/Pages/HomePage';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieHOC from './HOC/MovieHOC';
import Movie from './components/Pages/MoviePage'
import Plays from './components/Pages/Plays';

// axios default settings
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage} />
      <MovieHOC path='/movie/:id' exact component={Movie} />
      <DefaultHOC path='/plays' exact component={Plays} />
    </>

  );
}

export default App;
