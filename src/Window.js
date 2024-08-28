import'./window.css';
import Dropdown from 'react-bootstrap/Dropdown';
const Window = () => {
    return (<>
    
    <div className='bd'>
      <img src={require('./win.png')}/>
  <h1>UPVC WINDOWS</h1>
</div>


<div className='acalll'>
       
        <div>
        <a href=''> <img  id='acc'  src={require('./win1.png')} alt='nul' /></a>
        <h5> Breeze Casa -01
        </h5>
        <h5>Single Shutter With Mesh </h5>
        <p> <b>square start form  199.00 ₹</b></p></div>
        <div>
        <a href=''> <img  id='acc'  src={require('./win2.png')} alt='nul' /></a>
        <h5> Breeze Casa -02</h5>
        <h5>Single Shutter With Mesh</h5>
        <p>  <b> square start form 299.00 ₹</b></p></div>
        <div>
        <a href=''> <img  id='acc'  src={require('./win3.png')} alt='nul' /></a>
        <h5>  Breeze Casa -03</h5>
        <h5>Quadruple Shutter With Mesh</h5>
        <p>  <b>square start form 2999.00 ₹</b></p></div>
        <div>
        <a href=''> <img  id='acc'  src={require('./win4.png')} alt='nul' /></a>
        <h5>Breeze Casa -04 </h5>
        <h5>Quadruple Shutter With Mesh</h5>
        <p>  <b> square start form 499.00 ₹</b></p></div>
        
      </div>

      <div className='acalll'>
       
        <div>
        <a href=''> <img  id='acc'  src={require('./win5.png')} alt='nul' /></a>
        <h5> Breeze Casa -05
        </h5>
        <h5>Triple Shutter With Mesh </h5>
        <p> <b>square start form 399.00 ₹</b></p></div>
        <div>
        <a href=''> <img  id='acc'  src={require('./win6.png')} alt='nul' /></a>
        <h5> Breeze Casa -06</h5>
        <h5>Triple Shutter With Mesh</h5>
        <p>  <b> square start form 499.00 ₹</b></p></div>
        <div>
        <a href=''> <img  id='acc'  src={require('./win7.png')} alt='nul' /></a>
        <h5>  Breeze Casa -07</h5>
        <h5>Double Shutter With Mesh</h5>
        <p>  <b>square start form 399.00 ₹</b></p></div>
        <div>
        <a href=''> <img  id='acc'  src={require('./win8.png')} alt='nul' /></a>
        <h5>Breeze Casa -08 </h5>
        <h5>Double Shutter With Mesh</h5>
        <p>  <b> square start form 499.00 ₹</b></p></div>
        
      </div>
    
    

      <div className='acalll'>
       
       <div>
       <a href=''> <img  id='acc'  src={require('./win9.png')} alt='nul' /></a>
       <h5> Crown-05
       </h5>
       <h5>Ventilator With Fixed / Adjustable Lever </h5>
       <p> <b>square start form  79.00 ₹</b></p></div>
       <div>
       <a href=''> <img  id='acc'  src={require('./win10.png')} alt='nul' /></a>
       <h5> Crown-06</h5>
       <h5>Ventilator With Fixed / Adjustable Lever </h5>
       <p>  <b> square start form 79.00 ₹</b></p></div>
       <div>
       <a href=''> <img  id='acc'  src={require('./win11.png')} alt='nul' /></a>
       <h5> Crown-07</h5>
       <h5>Ventilator With Fixed / Adjustable Lever </h5>
       <p>  <b>square start form 99.00 ₹</b></p></div>
       <div>
       <a href=''> <img  id='acc'  src={require('./win12.png')} alt='nul' /></a>
       <h5>Crown -08 </h5>
       <h5>Ventilator With Fixed / Adjustable Lever </h5>
       <p>  <b> square start form 49.00 ₹</b></p></div>
       
     </div>
     <div className='qqq'>

     <h1 className='hq'>CUSTOMISE YOUR VIEW</h1>
        
     <div className='vie'>
    
   <div>   <img id='rr' src={require('./win20.png')} alt='nul' />
    <h3>FULLY CLOSED VIEW</h3>
    </div>
   <div>   <img id='rr' src={require('./win21.png')} alt='nul' />
   
   <h3>HALF OPEN VIEW</h3></div>
     </div>
     

     <div className='vie'>
     
   <div>   <img id='rr' src={require('./win22.png')} alt='nul' />
    <h3>PARTIALLY OPEN VIEW</h3>
    </div>
   <div>   <img id='rr' src={require('./win23.png')} alt='nul' />
   
   <h3>FULL OPEN VIEW</h3></div>
     </div>


     <h1 className='hq'>ADD-ON FEATURES</h1>
        
     <div className='vie'>
    
   <div>   <img id='rr' src={require('./win24.png')} alt='nul' />
    <h3>RETRACTABLE<br></br>
     MOSQUITO NET</h3>
    <p>Full protection against mosquitos</p>
    </div>
   <div>   <img id='rr' src={require('./win26.png')} alt='nul' />
   
   <h3>SAFETY<br></br>
   GRILL</h3>
   <p>Strong and durable</p>
   
   </div>
   <div>   <img id='rr' src={require('./win27.png')} alt='nul' />
   
   <h3>DECORATIVE <br></br> FRAME</h3>
   <p>Elegance of wood with strengh of steel</p>
   
   </div>
     </div>
     
   
   
     </div>
     <footer>
        <div className='oooo'>
        
      <ul>
        <p className='menu'>MENU</p>
           <li> <a id="a1" href="/">Home</a></li>
           <li> <Dropdown>
      <Dropdown.Toggle variant="black" id="a111">
        Doors 
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item id="a" href="#/action-1">Main Doors</Dropdown.Item>
        <Dropdown.Item id="a"href="#/action-2">Bedroom Doors</Dropdown.Item>
        <Dropdown.Item id="a"href="#/action-3">Pooja Doors</Dropdown.Item>
        <Dropdown.Item id="a"href="#/action-3">Bathroom Doors</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></li>
           <li> <a id="a1" href="/Accessories">Accessories</a> </li>
           <li> <a id="a1" href="/Accessories">uPVC Windows</a> </li>
           <li> <a id="a1" href="/Blog">Blog</a></li>
           <li> <a id="a1" href="/contact">Contact us</a></li>
          </ul>
          <div className='amma'>
            <ul>
              <p className='menu'>INFORMASTION</p>
           <li><a  id="a1" href=''>Terms & Conditions</a></li> 
           <li> <a id="a1"  href=''>Privacy Policy</a></li> 
           <li> <a  id="a1"  href=''>Refund Policy</a></li> 
           <li> <a id="a1"  href=''>Shipping Policy</a></li> 
           <li> <a id="a1"  href=''>Help and FAQ</a></li> 
           <li> <a id="a1"  href=''>Care Instructions</a></li> 
            </ul>

          </div>
          <div className='ad'>
            <ul>
              <p className='menu'>SOCIAL</p>
           <li><a  id="a2" href=''><img id='social' src={require('./v2.png')} alt='nul'height='10px'width='10px' />    FaceBook</a> </li> 
           <li><a  id="a3" href=''><img id='social' src={require('./wh.png')} alt='nul'height='10px'width='10px' />    WhatsApp</a> </li> 
           <li><a  id="a4" href=''><img id='social' src={require('./twi.png')} alt='nul'height='10px'width='10px' />   Twitter</a></li> 
           <li><a  id="a5" href=''><img id='social' src={require('./v1.png')} alt='nul'height='10px'width='10px' />    Instagram</a></li> 
           {/* <li><a  id="a6" href=''><img id='social' src={require('./in.png')} alt='nul'height='10px'width='10px' />    Linkedin</a> </li>  */}
           <li><a  id="a7" href=''><img id='social' src={require('./you.png')} alt='nul'height='10px'width='10px' />   Youtupe</a></li> 
            </ul>

          </div>

          <div className='la'>
            <ul>
             <p><b> <img id='lo' src={require('./loo.png')} alt='nul'height='10px'width='10px'p />     PUDUKKOTTAI</b></p>
              <p><b>KALAA WOOD PRIVATE LIMITED</b></p>
              <div className='mnm'>
              <p>986,karaiyappatti,varappur,Pudukkotttai-622201
              </p>
              <p>Contact us; +91 9080129430</p>
              <p>kaalawood111@gmail.com</p>
              </div>
            </ul>


          </div>
          
          
          
          </div>
         
            <p className='copy'>Copyright @2024 Kaalawood.all 
              right reserved | The image show are for illustration
               purposes only and may not be on exact representation of the product.</p>
         

      </footer>

    </>);
  };
  
  export default Window;