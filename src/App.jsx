import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Advices } from './pages/Advices';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/advices" element={<Advices />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { App }
