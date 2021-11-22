import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

const About = () => (
  <div data-testid="about-page">
    <h1>About</h1>
    <p>You are on the about page</p>
  </div>
);

const Home = () => (
  <div data-testid="home-page">
    <h1>Home</h1>
    <p>You are home</p>
  </div>
);

const Page404 = () => (
  <div data-testid="404-page">
    <h1>404</h1>
    <p>No match</p>
  </div>
);

function Main() {
  return (
    <div>
      <Link data-testid="home-link" to="/">
        Home
      </Link>
      <Link data-testid="about-link" to="/about">
        About
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Main;
