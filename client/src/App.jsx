import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Signup from "./pages/auth/Signup"
import Signin from "./pages/auth/Signin";
import Retailer from "./pages/retailer/Retailer";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  return (
    <>
      <Router>
        
      <Sidebar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/connect" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          
          <Route path="/dashboard" exact element={<Retailer />} />
          
        </Routes>
        </Sidebar>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
