import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./components/pages/homepage/homepage.component";
import Route1 from "./routing";

// const Hatspage = () => <div>Hatspage</div>;
function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/hats" Component={Hatspage} />
      </Routes> */}
      <Route1 />
    </div>
  );
}

export default App;
