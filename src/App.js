import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Users from "./Pages/Users//Users";
import Error from './Pages/Error';
import User from "./Pages/User";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;