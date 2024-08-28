import'./contact.css';
import Dropdown from 'react-bootstrap/Dropdown';
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
const Contact = () => {
    return (<>
    <body>
    

    <div className="bee">
      <img src={require('./win.png')}/>
      <h1>CONTACT US</h1>
      
    </div>
   
    
      
        <iframe id='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.924565794438!2d78.78982922812429!3d10.383307442343543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00782d25029679%3A0x4503e2d3b4a3897f!2sPudukkottai%2C%20Tamil%20Nadu%20622003!5e0!3m2!1sen!2sin!4v1720695862327!5m2!1sen!2sin'
          className='w-100'
          height='260'
          loading='lazy'
        ></iframe>

<div className='allget'>

        <div className='get'>

        <h2>REQUEST A CALL BACK</h2>

        <form action="https://api.web3forms.com/submit " method="POST">
        <input type="hidden"  name='access_key' value="75e31442-6db5-4aef-bc1a-3bcd3493a8a3"></input>
 
<input name='Name' type='text'placeholder='NAME' required></input> <br></br><br></br>
<input name='Email' type='text'placeholder=' EMAIL' required></input><br></br><br></br>
<input name='Phone Number' type='text'placeholder='MOBILE NUBER' required></input><br></br><br></br>
<input name='location' type='text'placeholder='LOCATION' required></input> <br></br><br></br>
<input type='text' name='Message'  placeholder=' MESSAGE' required></input><br></br><br></br><br></br>

<button id='het' type='submit'>SEND ENQEIRY</button>
</form>

        </div>

        <div className='con'>


        <h2>FOR MORE DETAILES</h2>
        

          <p><img id='lol' src={require('./mail.png')} alt='nul'height='10px'width='10px' />kaalawood111@gmail.com</p>
          <p> <img id='lol' src={require('./clocation.png')} alt='nul'height='10px'width='10px'/>986, abcd kalani, <br></br>abcd road,<br></br> karaiyappatti,<br></br> azar street,<br></br>varappur,Pudukkotttai, <br></br>

          pin:622203</p><br></br>
        <p> <img id='lol' src={require('./ccall.png')} alt='nul'height='10px'width='10px'p />+91 9080129430 </p>
        <p> <img id='lol' src={require('./ccall.png')} alt='nul'height='10px'width='10px'p />+91 9080067567</p>

        </div>
    
        </div>
        
        </body>
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
  
  export default Contact;