import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container mt-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
