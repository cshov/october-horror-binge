import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './pennywise.svg';
import './App.css';
import MovieLine from './component/MovieLine';
import { getMovies, getMovieTitles } from './services/movies-query';
import {Movie} from "./models/movie-models";

function App() {

    const movies: Movie[] = getMovies();
    const movieTitles: string[] = getMovieTitles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>October Horror Binge</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
        <div>
            {/*<table>*/}
                {movies.map(movie => (
                    // <p>{movieTitle}</p>

                    <MovieLine movieObject={movie} />

                ))}
            {/*</table>*/}
        </div>


    </div>
  );
}

export default App;
