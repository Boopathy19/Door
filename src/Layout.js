import { Outlet} from "react-router-dom";
import './layout.css';
import'./Lay.js';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";



  
    





const Layout = () => {
  return (
    <>

    
    <div className="navbare">
      <nav>  
        <div id="logo">
        <a href=""> <img  src={require('./mani.png')} alt='nul'height={150}width={150} /></a></div>
        <div className="aaa">
           <ul>
           <li> <a id="a1" href="/">Home</a></li>
           <li> 
           <Dropdown>
      <Dropdown.Toggle variant="black" id="a">
        Doors 
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item id="a11" href="/MaineDoors">Main Doors</Dropdown.Item>
        <Dropdown.Item id="a11"href="/BedroomDoors">Bedroom Doors</Dropdown.Item>
        <Dropdown.Item id="a11"href="/PoojaDoors">Pooja Doors</Dropdown.Item>
        <Dropdown.Item id="a11"href="/BathroomDoors">Bathroom Doors</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </li>
           {/* <li> <a id="a1" href="/Doors">Doors</a></li> */}
           <li> <a id="a1" href="/Accessories">Accessories</a> </li>
           <li> <a id="a1" href="/Window">uPVC Windows</a> </li>
           <li> <a id="a1" href="/Blog">Blog</a></li>
           <li> <a id="a1" href="/contact">Contact us</a></li>
           
          </ul>
          </div>
          


          <div className="add">


<a href="/User" ><FaUserCircle  size={30}/></a>

< a href="">  <FaShoppingCart   size={30}/>   </a>
         
          {/* <a href="/User"> <img  src={require('./u.png')} alt='nul'height={50}width={50} /></a>

          
          <a href=""> <img  src={require('./add.png')} alt='nul'height={50}width={50} /></a> */}
          </div>
         
      </nav>
      </div>
      <div className='idia'>
      <a   href='https://web.whatsapp.com/'><img id='sociall' src={require('./wh.png')} ></img></a> 

      </div>
    

      <Outlet />



     
    </>
  );
};

export default Layout;