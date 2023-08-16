import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Signup from "./pages/auth/Signup"
import Signin from "./pages/auth/Signin";

function App() {
  return (
    <>
      <Router>
        

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/connect" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
