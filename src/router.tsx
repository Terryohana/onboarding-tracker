import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Tracker = lazy(() => import('./pages/tracker'));
// Lazy load can be useful in case of expansion of functionality

export const Router = () => {
  return <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<Tracker/>}>
          <Route path='users/:userId' element={<Tracker />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>;
};
