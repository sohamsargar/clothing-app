import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
// import Hatspage from "./components/pages/itemsPages/Hatspage.component";
import ShopPage from "./components/pages/Shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class Route1 extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscriberFromAuth = null;

  componentDidMount() {
    this.unsubscriberFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscriberFromAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Hatspage" element={<Hatspage />} /> */}
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/Signin" element={<SignInAndSignUp />} />
        </Routes>
      </>
    );
  }
}
export default Route1;
