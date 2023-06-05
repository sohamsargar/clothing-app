import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
// import Hatspage from "./components/pages/itemsPages/Hatspage.component";
import ShopPage from "./components/pages/Shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.actions";

class Route1 extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null,
  //   };
  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Route1);
