import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <Link to="/about" style={{ textDecoration: 'none', color: 'blue' }}>
        Go to About Page →
      </Link>
    </div>
  );
}

export default Home;