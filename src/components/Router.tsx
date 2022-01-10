import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/header/Header';
import Home from 'components/pages/home/Home';

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
