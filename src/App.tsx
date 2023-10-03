import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './pennywise.svg';
import './App.css';
import Movies2022 from "./pages/Movies2022/Movies2022";
import Movies2023 from "./pages/Movies2023/Movies2023";
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
                <Link to="/2022-list">2022 List</Link>
                <Link to="/2021-list">2021 List</Link>
                <Link to="/2021-ratings">2021 Ratings Sorted</Link>
                <Link to="/2021-stats">2021 Stats</Link>
            </div>
            <Switch>
                <Route path="/2021-ratings">
                    <RatingsPage></RatingsPage>
                </Route>
                <Route path="/2021-stats">
                    <StatsPage></StatsPage>
                </Route>
                <Route path="/2021-list">
                    <MoviesPage></MoviesPage>
                </Route>
                <Route path="/2022-list">
                    <Movies2022></Movies2022>
                </Route>
                <Route path="/">
                    <Movies2023></Movies2023>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
