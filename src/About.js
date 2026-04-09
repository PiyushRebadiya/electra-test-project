import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        ← Back to Home
      </Link>
    </div>
  );
}

export default About;