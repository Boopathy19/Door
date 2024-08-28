import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';


const Home = () => {
    return (
      <>
      {/* <div className='idia'>
      <a   href='https://web.whatsapp.com/'><img id='sociall' src={require('./wh.png')} ></img></a> 

      </div> */}
    
    <body>
      
<div className='mm' data-aos="fade-up"  data-aos-duration="1000">
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block "
           src={require('./new.png')} alt='nul' width='300px' height='100px'
        /> 
        
        <Carousel.Caption>
        <a href='./Bedroomdoors'> < button id='slibtn' data-aos="fade-down"  data-aos-duration="1000">Explore</button></a> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-blockk "
           src={require('./neww.png')}  alt='nul' width='300px' height='100px' />
           
           <Carousel.Caption>
             {/* <a href='./Bedroomdoors'> < button id='slibtn' data-aos="fade-down"  data-aos-duration="1000">Explore</button></a>  */}
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block "
           src={require('./new4.png')} alt='nul' width='300px' height='100px'
          
        />
        
        <Carousel.Caption>
          {/* <div className='yes'>
            <p>
          <h2 id='m1'  data-aos="fade-down"  data-aos-duration="1000">Onestop Wooden</h2>
          <h2 id='m2'  data-aos="fade-down"  data-aos-duration="1000">Door Solutions  </h2>
          <h2 id='m1'  data-aos="fade-up"  data-aos-duration="1000">  Introducing Kalas</h2>
          <h2 id='m2'  data-aos="fade-up"  data-aos-duration="1000">Doors & Frames</h2>
          </p>
          </div> */}
      
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
    </div>
        
      
        <div className='hh' data-aos="zoom-in" data-aos-duration="1000">
      <h2> Shope By Category</h2>
      </div>


        <div className='wrapper' data-aos="fade-left"  data-aos-duration="2000">
      
          <div className='image'>

<img className='door' src={require('./main.3.png')} alt='nul' />
<div className='content'>
  <h2>MAIN DOOR</h2> <br></br>
  <p>Step into a world of <br></br>elegance and security<br></br> with our stunning <br></br>Main Door! </p> <br></br>
  <a href="/MaineDoors"> <button id='new'>VIEW PRODUCT</button></a></div></div>

  <div className='image'>

<img className='door' src={require('./bed9.png')} alt='nul' />
<div className='content'>
  <h2>BEDROOM <br></br> DOOR</h2> <br></br>
  <p>Transform your sanctuary <br></br>with our exquisite<br></br> Bedroom Doors <br></br>Collection!  </p>
  <a href="/BedroomDoors"> <button id='new'>VIEW PRODUCT</button></a></div></div>

  <div className='image'>

<img className='door' src={require('./pooja1.png')} alt='nul' />
<div className='content'>
  <h2>POOJA <br></br> DOOR</h2> <br></br>
  <p>Transform your sanctuary <br></br>with our exquisite<br></br> Bedroom Doors <br></br>Collection!  </p>
  <a href="/PoojaDoors"> <button id='new'>VIEW PRODUCT</button></a></div></div>
  <div className='image'>

<img className='door' src={require('./bath1.png')} alt='nul' />
<div className='content'>
  <h2>BATHROOM <br></br> DOOR</h2> <br></br>
  <p>Transform your sanctuary <br></br>with our exquisite<br></br> Bedroom Doors <br></br>Collection!  </p>
  <a href="/PoojaDoors"> <button id='new'>VIEW PRODUCT</button></a></div></div>


  
  
  


          

        </div>
        


       
      

      
    

      {/* <div className='demo'>
<div>
      <a href="/MaineDoors"> <img className='door' src={require('./main.3.png')} alt='nul' /> </a>
      <h3 id='b'>MAIN DOOR</h3>
      <p>Step into a world of <br></br>elegance and security<br></br> with our stunning <br></br>Main Door! </p>
      <a href="/MaineDoors"> <button id='btn'>VIEW PRODUCT</button></a>
      </div>
      <div><a href="/BedroomDoors" > <img className='door' src={require('./bed9.png')} alt='nul' /> </a>
      <h3 id='b'>BEDROOM DOOR</h3>
      <p>Transform your sanctuary <br></br>with our exquisite<br></br> Bedroom Doors <br></br>Collection!  </p>
      <a href="/BedroomDoors"> <button id='btn'>VIEW PRODUCT</button></a>
      </div>
      <div><a href="/PoojaDoors"> <img className='door' src={require('./pooja1.png')} alt='nul' /> </a>
      <h3 id='b'>POOJA DOOR</h3>
      <p>Transform your sanctuary <br></br>with our exquisite<br></br> Pooja Doors <br></br>Collection!  </p>
      <a href="/PoojaDoors"> <button id='btn'>VIEW PRODUCT</button></a>
      
      </div>
      <div><a href="/BathroomDoors"> <img className='door' src={require('./bath1.png')} alt='nul' /> </a>
      <h3 id='b'>BATHROOM DOOR</h3>
      <p>Enhance your bathroom<br></br>with our stunning<br></br> Bathroom Doors <br></br>Collection!  </p>
      <a href="/BathroomDoors"> <button id='btn'>VIEW PRODUCT</button></a>
      
      
      </div>

      </div>
       */}

      {/* <div className='im'>
      <img className='imm'  src={require('./zz.png')} alt='nul' />

      </div>
      <div className='pu'>
      <div className='cat'>

<img src={require('./book1.png')}  />
      <a href='' download={'./kalawood.pdf'} ><button>Dowload Catolog</button></a>
      


</div>
</div> */}
<div className='ethoo'>
 <h1>Download Catalogue</h1>
 <p>Unlock the beauty of wooden doors. Fill out the form below to download our captivating wooden doors catalog now!</p>

<div className='etho'>
 
  <div>
  <img src={require('./book1.png')}></img></div>
  <div>
  <a href='' download={'./kalawood.pdf'} ><button data-aos="fade-down"  data-aos-duration="1000">Dowload Catolog</button></a>
  </div>
  </div>

</div>


      
      <div className='hh' data-aos="zoom-in" data-aos-duration="1000">
        <h2>Our Best Seller</h2>

      </div>



<div className='all' >


<div className='top' data-aos="fade-right" data-aos-duration="1000">
<img className='doo' src={require('./b1.png')} alt='nul'  /> 
<p>Mysore Lancers</p>
<a href="/MaineDoors"> <button id='btt'>VIEW PRODUCT</button></a>
</div>
<div className='top' data-aos="fade-right" data-aos-duration="2000">
<img className='doo' src={require('./b2.png')} alt='nul'  /> 
<p>Maharani</p>
<a href="/MaineDoors"> <button id='btt'>VIEW PRODUCT</button></a></div>

<div className='top' data-aos="fade-right" data-aos-duration="3000">
<img className='doo' src={require('./b3.png')} alt='nul'  /> 
<p>Jodhpur Lancers</p>
<a href="/BedroomDoors"> <button id='btt'>VIEW PRODUCT</button></a></div>

<div className='top' data-aos="fade-right" data-aos-duration="4000">
<img className='doo' src={require('./b4.png')} alt='nul'  /> 
<p>Jodhpur Rasala</p>
<a href="/BedroomDoors"> <button id='btt'>VIEW PRODUCT</button></a></div>

<div className='top' data-aos="fade-right" data-aos-duration="5000">
<img className='doo' src={require('./b5.png')} alt='nul'  /> 
<p>Mysore Lancers</p>
<a href="/BathroomDoors"> <button id='btt'>VIEW PRODUCT</button></a></div>
<div className='top' data-aos="fade-right" data-aos-duration="6000">
<img className='doo' src={require('./b6.png')} alt='nul'  /> 
<p>Puna Horse</p>
<a href="/BathroomDoors"> <button id='btt'>VIEW PRODUCT</button></a></div>
</div>
{/* <div className='immm'>
<img className='nn'  src={require('./oo.png')} alt='nul' />

      </div> */}
 <h1 className='hh'>How we make a difference</h1>
<div className='varanty' data-aos="fade-left" data-aos-mirror="true" >
         
         <div>
       <img id='h1' src={require('./h1.png')} alt='nul' />
       <p>10 years <br></br>
       Assured Warranty</p>
       </div>
       <div>
       <img  id='h1' src={require('./h2.png')} alt='nul' />
       <p>4 Decades of <br></br>
       Industry Experience</p>
       </div>
       <div>
       <img  id='h1' src={require('./h3.png')} alt='nul' />
       <p>Manufactured In-house <br></br>
       Designed & produced in India</p>
       </div>
       <div>
       <img id='h1' src={require('./h4.png')} alt='nul' />
       <p>End to end solutions <br></br>
       From Design to Sales</p>
       </div>
       
       

       </div>

       


       

      <div className='woooo'  >

      <div className='woodd'>    
  <h2>Wood Species Material</h2>
</div>

      <div className='wood'>
        <div>
        <img  id='var' src={require('./wood1.png')} alt='nul' />
        <p>BAMBOO</p>
        </div>
        <div>
        <img id='var'  src={require('./wood2.png')} alt='nul' />
        <p>BIRCH</p>
        </div>
        <div>
        <img  id='var' src={require('./wood3.png')} alt='nul' />
        <p>CHERRY</p>
        </div>
        <div>
        <img  id='var' src={require('./wood4.png')} alt='nul' />
        <p>FIR</p>
        </div>
        <div>
        <img  id='var' src={require('./wood5.png')} alt='nul' />
        <p>LAUAN</p>
        </div>
        <div>
        <img  id='var' src={require('./wood6.png')} alt='nul' />
        <p>MAHOGANY</p>
        </div>

      </div>


      
      <div className='wood'>
        <div>
        <img  id='var' src={require('./wood7.png')} alt='nul' />
        <p>OAK</p>
        </div>
        <div>
        <img id='var'  src={require('./wood8.png')} alt='nul' />
        <p>PINE</p>
        </div>
        <div>
        <img  id='var' src={require('./wood9.png')} alt='nul' />
        <p>SAPELE</p>
        </div>
        <div>
        <img  id='var' src={require('./wood10.png')} alt='nul' />
        <p>MAPLE</p>
        </div>
        <div>
        <img  id='var' src={require('./wood11.png')} alt='nul' />
        <p>SAPELE</p>
        </div>
        <div>
        <img  id='var' src={require('./wood12.png')} alt='nul' />
        <p>WALNUT</p>
        </div>

      </div>

      </div>

      <div className='animation' >
        <img  src={require('./bed9.png')} alt='nul' />
        </div>
        <div className='emty'>
          <div className='em' data-aos="fade-right" data-aos-duration="1500">
          <h4>Choose from your favorite doors and save up to 15%</h4>
          </div>
          <a href='./User' data-aos="fade-left"  data-aos-duration="1500">   <button id='get'>CONNECT TO GET MORE</button></a> 
        </div>
       
        {/* <div className='varanty'>
         
          <div>
        <img id='h1' src={require('./h1.png')} alt='nul' />
        <p>10 years <br></br>
        Assured Warranty</p>
        </div>
        <div>
        <img  id='h1' src={require('./h2.png')} alt='nul' />
        <p>4 Decades of <br></br>
        Industry Experience</p>
        </div>
        <div>
        <img  id='h1' src={require('./h3.png')} alt='nul' />
        <p>Manufactured In-house <br></br>
        Designed & produced in India</p>
        </div>
        <div>
        <img id='h1' src={require('./h4.png')} alt='nul' />
        <p>End to end solutions <br></br>
        From Design to Sales</p>
        </div>
        
        

        </div> */}

</body>
      <footer>
        <div className='oooo' >
        
      <ul>
        <p className='menu'>MENU</p>
           <li> <a id="a1" href="/">Home</a></li>
           <li> <Dropdown>
      <Dropdown.Toggle variant="black" id="a111">
        Doors 
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item id="a" href="/MaineDoors">Main Doors</Dropdown.Item>
        <Dropdown.Item id="a"href="/BedroomDoors">Bedroom Doors</Dropdown.Item>
        <Dropdown.Item id="a"href="/PoojaDoors">Pooja Doors</Dropdown.Item>
        <Dropdown.Item id="a"href="/BathroomDoors">Bathroom Doors</Dropdown.Item>
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
           <li><a  id="a1" href='./Terms'>Terms & Conditions</a></li> 
           <li> <a id="a1"  href='https://www.adoorco.com/privacy-policy#:~:text=We%20will%20not%20share%20your,changes%20to%20this%20privacy%20policy.'>Privacy Policy</a></li> 
           <li> <a  id="a1"  href=''>Refund Policy</a></li> 
           <li> <a id="a1"  href=''>Shipping Policy</a></li> 
           <li> <a id="a1"  href='./Help'>Help and FAQ</a></li> 
           <li> <a id="a1"  href=''>Care Instructions</a></li> 
            </ul>

          </div>
          <div className='ad'>
            <ul>
              <p className='menu'>SOCIAL</p>
           <li><a  id="a2" href='https://www.facebook.com/salim.fn.9'><img id='social' src={require('./v2.png')} alt='nul'height='10px'width='10px' />    FaceBook</a> </li> 
           <li><a  id="a3" href='https://web.whatsapp.com/'><img id='social' src={require('./wh.png')} alt='nul'height='10px'width='10px' />    WhatsApp</a> </li> 
           <li><a  id="a4" href='https://x.com/?lang=en&mx=2'><img id='social' src={require('./twi.png')} alt='nul'height='10px'width='10px' />   Twitter</a></li> 
           <li><a  id="a5" href='https://www.instagram.com/'><img id='social' src={require('./v1.png')} alt='nul'height='10px'width='10px' />    Instagram</a></li> 
           {/* <li><a  id="a6" href=''><img id='social' src={require('./in.png')} alt='nul'height='10px'width='10px' />    Linkedin</a> </li>  */}
           <li><a  id="a7" href='https://www.youtube.com/@dsigndoors'><img id='social' src={require('./you.png')} alt='nul'height='10px'width='10px' />   Youtupe</a></li> 
            </ul>

          </div>

          <div className='la'>
            <ul>
             <p><b> <img id='lo' src={require('./loo.png')} alt='nul'height='10px'width='10px'p />     PUDUKKOTTAI</b></p>
              <p><b>KALA WOOD PRIVATE LIMITED</b></p>
              <div className='mnm'>
              <p>986,karaiyappatti,varappur,Pudukkotttai-622201
              </p>
              <p>Contact us; +91 9080129430</p>
              <p>kalawood111@gmail.com</p>
              </div>
            </ul>


          </div>
          
          
          
          
          </div>
          {/* <div className='summa'>

        </div> */}
         
            <p className='copy'>Copyright @2024 Kaalawood.all 
              right reserved | The image show are for illustration
               purposes only and may not be on exact representation of the product.</p>
         

      </footer>

      
{/* <div className='cat'>

<img src={require('./book1.png')}  />
      <a href='' download={'./kalawood.pdf'} ><button>Dowload Catolog</button></a>
      


</div> */}



      


        </>
    );
  };
  
  export default Home;

