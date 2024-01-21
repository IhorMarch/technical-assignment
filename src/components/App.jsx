import { Route, Routes, } from 'react-router-dom';
import { lazy } from 'react';
import { AppBar } from './AppBar/AppBar';





const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites'));
// const CarDetails = lazy(() => import('../pages/CarDetails'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          
          <Route index element={<Home />} />

          <Route path="catalog" element={<Catalog />} />

          <Route path="favorites" element={<Favorites />} />
         

              </Route>



      </Routes>
        </>
  );
};
