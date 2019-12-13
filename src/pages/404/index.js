import React from 'react';
import Header from '~/src/components/Header';
import pic from './norjebw.jpg'

export default ({ posts }) => (
  <div>
    <Header >
      <div className="title">
        <h1>404</h1>
      </div>
      <div className="summary">
        <p>That wasn't found.</p>
      </div>
    </Header>
  </div>
);
