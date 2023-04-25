import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
// import Hatspage from "./components/pages/itemsPages/Hatspage.component";
import ShopPage from "./components/pages/Shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const Route1 = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Hatspage" element={<Hatspage />} /> */}
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/Signin" element={<SignInAndSignUp />} />
      </Routes>
    </>
  );
};
export default Route1;
