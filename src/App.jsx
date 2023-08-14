import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home'

import './App.css'
import Navbar from './constants/navbar/Navbar';
import Footer from './constants/footer/Footer';
import SignUp from './pages/auth/Signup';
import SignIn from './pages/auth/SignIn';

function App() {

  return (
    <>
      <Router>
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/signin" exact element={<SignIn />} />
          </Routes >
          <Footer />
        </Router >
    </>
  )
}

export default App
