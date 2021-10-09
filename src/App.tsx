import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './pennywise.svg';
import './App.css';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import StatsPage from './pages/StatsPage/StatsPage';
import RatingsPage from "./pages/RatingsPage/RatingsPage";

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>October Horror Binge</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
            <div className="navMenu">
                <Link to="/">Home</Link>
                <Link to="/ratings">Ratings Sorted</Link>
                <Link to="/stats">Stats</Link>
            </div>
            <Switch>
                <Route path="/ratings">
                    <RatingsPage></RatingsPage>
                </Route>
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
