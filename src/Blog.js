import './blog.css';
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
const Blog = () => {
  return (<>
  
  <div className='be' >

    <img src={require('./win.png')}/>
  <h1>BLOG</h1>
</div>
  
<div className='mm' data-aos="fade-up"  data-aos-duration="1000">
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block "
           src={require('./blog1.jpg')} alt='nul' width='300px' height='100px'
        /> 
        
        <Carousel.Caption>
        <h1 id='e'data-aos="zoom-in-down" data-aos-duration="1000">KALA WOOD MANUFACTURER PROCESS</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
           src={require('./blog2.jpg')} alt='nul' width='300px' height='100px'
          
        />
       
        <Carousel.Caption>
        <h1 id='e' data-aos="zoom-in-down" data-aos-duration="1000">KALA WOOD PRODUCT WOOD QUALITY </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
           src={require('./blog4.jpg')} alt='nul' width='300px' height='100px'
          
        />
        <Carousel.Caption>
        <h1 id='e'data-aos="zoom-in-down" data-aos-duration="1000" >KALA WOOD  MANUFACTURER FACTORY</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div> 


<h1 id='H' data-aos="fade-down" data-aos-duration="1000">WOOD  MANUFACTURING  WORKS</h1>
        <div className='bgall'>
          <div> <img id='work' data-aos="fade-right" data-aos-duration="2000"
          
           src={require('./blog5.jpg')}  /> 
          
        <h3 data-aos="fade-up" data-aos-duration="2000"> GRANDING WORK</h3>
        <p data-aos="fade-up" data-aos-duration="2000">A grinding machine, often shortened to grinder, is a power tool (or machine tool) used for grinding.
           It is a type of machining using an abrasive wheel as the cutting tool.
            Each grain of abrasive on the wheel's
            surface cuts a small 
           from the workpiece via shear deformation.
           
           </p>
          
        </div>
        <div> <img id='work' data-aos="fade-down" data-aos-duration="1000"
          
           src={require('./blog6.jpg')}  /> 
          
        <h3 data-aos="fade-up" data-aos-duration="2000"> DRILL WORK</h3>
        <p data-aos="fade-up" data-aos-duration="2000">A drill is a tool used for making round holes or driving fasteners. 
          It is fitted with a bit, either a drill or driver chuck. Hand-operated types 
          are dramatically decreasing in popularity and cordless battery-powered
           ones proliferating due to increased efficiency and ease of use.</p>
        </div>
        <div> <img id='work'data-aos="fade-left" data-aos-duration="2000"
          
           src={require('./blog8.jpg')}  /> 
          
        <h3 data-aos="fade-up" data-aos-duration="2000">CUTTING WORK</h3>
        <p data-aos="fade-up" data-aos-duration="2000"> Cutting is the process of cutting, processing, and moving trees to 
          a location for transport. It may include skidding, on-site processing, and loading of trees
           or logs onto trucks[1] or skeleton cars. In forestry, the term logging is sometimes used narrowly 
          to describe the logistics </p>
        </div>
          
        </div>
        <div className='bgall'>
          <div> <img id='work' data-aos="fade-right" data-aos-duration="2000"
          
           src={require('./blog5.jpg')}  /> 
          
        <h3 data-aos="fade-up" data-aos-duration="2000"> GRANDING WORK</h3>
        <p data-aos="fade-up" data-aos-duration="2000">A grinding machine, often shortened to grinder, is a power tool (or machine tool) used for grinding.
           It is a type of machining using an abrasive wheel as the cutting tool.
            Each grain of abrasive on the wheel's
            surface cuts a small 
           from the workpiece via shear deformation.
           
           </p>
          
        </div>
        <div> <img id='work' data-aos="fade-down" data-aos-duration="1000"
          
           src={require('./blog6.jpg')}  /> 
          
        <h3 data-aos="fade-up" data-aos-duration="2000"> DRILL WORK</h3>
        <p data-aos="fade-up" data-aos-duration="2000">A drill is a tool used for making round holes or driving fasteners. 
          It is fitted with a bit, either a drill or driver chuck. Hand-operated types 
          are dramatically decreasing in popularity and cordless battery-powered
           ones proliferating due to increased efficiency and ease of use.</p>
        </div>
        <div> <img id='work'data-aos="fade-left" data-aos-duration="2000"
          
           src={require('./blog8.jpg')}  /> 
          
        <h3 data-aos="fade-up" data-aos-duration="2000">CUTTING WORK</h3>
        <p data-aos="fade-up" data-aos-duration="2000"> Cutting is the process of cutting, processing, and moving trees to 
          a location for transport. It may include skidding, on-site processing, and loading of trees
           or logs onto trucks[1] or skeleton cars. In forestry, the term logging is sometimes used narrowly 
          to describe the logistics </p>
        </div>
          
        </div>


        <div className='allwood'>
          <div>
          <img id='wor' 
    
          
          src={require('./tree1.png')}  />
          <h4 data-aos="fade-up" data-aos-duration="2000"> OAK WOOD</h4>
          <p data-aos="fade-up" data-aos-duration="2000">Experience the timeless beauty of Oak Wood with our exquisite Oak Wood !</p>

          </div>
          <div>
          <img id='wor' 
          
          src={require('./tree2.png')}  />
          <h4 data-aos="fade-up" data-aos-duration="2000">WALNUT WOOD</h4>
          <p data-aos="fade-up" data-aos-duration="2000"> Elevate your space with the exquisite beauty of Walnut Wood!</p>

          </div>
          <div>
          <img id='wor' 
          
          src={require('./tree3.png')}  />
          <h4 data-aos="fade-up" data-aos-duration="2000"> TEAK WOOD</h4>
          <p data-aos="fade-up" data-aos-duration="2000"> Embrace the elegance of Teak Wood with our stunning Teak Wood!</p>

          </div>
         
          <div>
          <img id='wor' 
          
          src={require('./tree4.png')}  />
          <h4 data-aos="fade-up" data-aos-duration="2000"> TULIP WOOD</h4>
          <p data-aos="fade-up" data-aos-duration="2000">Step into a world of elegance with our stunning Tulip Wood!</p>

          </div>
         
          <div>
          <img id='wor'
          
          src={require('./tree6.png')}  />
          <h4 data-aos="fade-up" data-aos-duration="2000"> SPRUCH WOOD</h4>
          <p data-aos="fade-up" data-aos-duration="2000"> Experience the rustic charm and versatility that Spruce Wood brings.</p>

          </div>

        </div>

        

        
        <div className='azx' >

        <div className='cx' 
     >
          <h1 >Wood Is Good</h1>
          <h3 >Why You Must Use Natural Wood in Your Home?</h3>
          <p >Natural wood is an ageless material that will add timeless style and functionality to your
             home. Boasting unique characteristics and attractive aesthetic appeal, incorporating natural wood into
              interior design projects will create an inviting ambiance for guests and family members
             alike. For more information kindly view our videos:</p>

        </div>
        <div className='asd' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div><iframe id='zz'
          src="https://www.youtube.com/embed//VbC8RvzsucM?si=D1TUWEYDbnp53yvd"
          title="YouTube video"
          allowfullscreen
        ></iframe>
        <h3>WHY TO CHOOSE TO LIVE IN
        WOODEN HOUSE?</h3></div>
        <div><iframe id='zz'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
          src="https://www.youtube.com/embed//y-1RMXKW0aY?si=bbpJsOr14k4VhIww"
          title="YouTube video"
          allowfullscreen
        ></iframe>
        <h3>WHY WOOD ?</h3></div>
        <div><iframe id='zz' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
          src="https://www.youtube.com/embed//Jzuuouvfl0U?si=P3MFbI8-m_TKvyz4"
          title="YouTube video"
          allowfullscreen
        ></iframe>
        <h3>Wood Reduces the Environmental
        Impact of Buildings</h3></div>
        </div>
        </div>

        {/* <div className='allspp'>
<div><h1 id='qa'>OUR SPECIAL PATRNERS</h1></div>
        <div className='allsp'>
          <div>
          <img id='sp'
          
          src={require('./sp1.png')}  /></div>
          <div>
          <img id='sp'
          
          src={require('./sp2.png')}  /></div>
          <div>
          <img id='sp'
          
          src={require('./sp3.png')}  /></div>
          <div>
          <img id='sp'
          
          src={require('./sp4.png')}  /></div>
          <div>
          <img id='sp'
          
          src={require('./sp5.png')}  /></div>
          <div>
          <img id='sp'
          
          src={require('./sp6.png')}  /></div>
        </div>

        </div> */}
        <div className='alllfree'>
        <h1  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">FREE  FORM  EVERY  WOORY
        </h1>

        <div className=' allfree' data-aos="fade-left" data-aos-mirror="true">
          <div className='free'>
          <img src={require('./n1.png')} ></img>
          <p>Weather Proof Doors</p>
          </div>
          <div className='free'>
          <img src={require('./n2.png')} ></img>
          <p>Termite Proof Doors</p> </div>
          <div className='free'>
          <img src={require('./n3.png')} ></img>
          <p>Fire Resistant Doors</p> </div>
          <div className='free'>
          <img src={require('./n4.png')} ></img> 
          <p>Easy To
          Install</p></div>
          <div className='free'>
          <img src={require('./n5.png')} ></img> 
          <p>Eco
          Friendly</p></div>


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

export default Blog;