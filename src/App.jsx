import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home'

import './App.css'
import Navbar from './constants/navbar/Navbar';

function App() {

  return (
    <>
      <Router>
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes >
        </Router >
    </>
  )
}

export default App
