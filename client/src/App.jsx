import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Retailer from "./pages/retailer/Retailer";
import Sidebar from "./components/sidebar/Sidebar";
import { useUserContext } from "./context/userContext";

function App() {

  const {user} = useUserContext();

  return (
    user ?    
      <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/dashboard" exact element={<Sidebar> <Retailer /></Sidebar>} />
          </Routes>
      </Router> 
      :
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
