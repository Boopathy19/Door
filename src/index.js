import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blog";
import Contact from "./Contact";
import Accessories from "./Accessories";
import Window from "./Window"
import BathroomDoors from "./Bathroom Doors";
import BedroomDoors from "./Bedroom Doors";
import Help from "./Help";
import MaineDoors from "./Maine Doors";
import PoojaDoors from "./PoojaDoors";
import Sing from "./Sing";
import Terms from "./Terms";
import User from "./User";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Card } from "react-bootstrap";
// ..
AOS.init();

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="User" element={<User/>} />
      <Route path="Terms" element={<Terms/>} />
      <Route path="Sing" element={<Sing/>} />
      <Route path="PoojaDoors" element={<PoojaDoors/>} />
      <Route path="Blog" element={<Blogs />} />
       <Route path="contact" element={<Contact />} />
     <Route path="Accessories" element={<Accessories />} />
      <Route path="Window" element={<Window/>} />
     <Route path="BathroomDoors" element={<BathroomDoors/>} />
          <Route path="BedroomDoors" element={<BedroomDoors/>} />
          <Route path="Help" element={<Help/>} />
          <Route path="MaineDoors" element={<MaineDoors/>} />
          



          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);