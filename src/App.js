import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./components/pages/homepage/homepage.component";
import Route1 from "./routing";
import { auth } from "./firebase/firebase.utils";
import React from "react";

// const Hatspage = () => <div>Hatspage</div>;
class App extends React.Component {
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
      <div>
        {/* <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/hats" Component={Hatspage} />
      </Routes> */}
        <Route1 currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
