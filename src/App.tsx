import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './pennywise.svg';
import './App.css';
import MovieLine from './component/MovieLine';
import { getMovies } from './services/movies-query';
import {Movie} from "./models/movie-models";
import MoviesPage from './pages/MoviesPage';
import StatsPage from './pages/StatsPage';

function App() {
    const movies: Movie[] = getMovies();

  return (
      <Router>
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
            <div className="navMenu">
                <Link to="/">Home</Link>
                <Link to="/stats">Stats</Link>
            </div>


            <Switch>
                <Route path="/stats">
                    <StatsPage></StatsPage>
                </Route>
                <Route path="/">
                    <MoviesPage></MoviesPage>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
