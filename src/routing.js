import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
// import Hatspage from "./components/pages/itemsPages/Hatspage.component";
import ShopPage from "./components/pages/Shop/shop.component";

const Route1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Hatspage" element={<Hatspage />} /> */}
        <Route path="/Shop" element={<ShopPage />} />
      </Routes>
    </>
  );
};
export default Route1;
