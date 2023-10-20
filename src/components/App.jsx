import { Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Favorites from '../pages/Favorites';
import { Layout } from "./Layout/Layout";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={ <Home/>} />
        <Route path="catalog" element={ <Catalog/>}/>
        <Route path="favorites" element={<Favorites />} />
      </Route>
   </Routes>
  );
};

// https://64bc2c2e7b33a35a44471974.mockapi.io/api/rentcar/:endpoint
