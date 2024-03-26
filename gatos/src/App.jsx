import "./App.css";
import Navbar from "./components/NavBar";
import Description from "./components/PageDescription";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop.jsx";
import styled, {css} from 'styled-components'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Description />}></Route>
        <Route path="*" element={<Shop/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
