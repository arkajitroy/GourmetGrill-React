
import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import DetailPage from './DetailPage';

import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
    
      <Routes>
        <Route path="/" element={< Home/ >} />
        <Route path="/cuisine/:type" element={< Cuisine/ >} />
        <Route path="/searched/:search" element={< Searched/ >} />
        <Route path="/recipe/:name" element={< DetailPage/ >} />
      </Routes>

  )
}

export default Pages