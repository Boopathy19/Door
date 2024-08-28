 import'./user.css';
 import React ,{useState} from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
 import { Link } from 'react-router-dom';
 import './LoginValidation';
 const user = () => {

    function User (){
const[values,SetValues]=useState({

    email:'',
    password :'',

})


const[errors,setErrors]=useState({})

const handleInput=(event)=>{

    SetValues(Prev=>({...Prev,[event.target.name]:[event.target.value]}))
}

const handleSubmit=(event)=>{

event.preventDefault();




}
        
    }
    
    return(

   
<div className='alluser'>
    
    <div className='user'>
    <img  id='ad'  src={require('./u.png')} alt='nul' />
        <h1>Login</h1>
        <p>If you have an account with us, please log in</p>
        <form action=""  >
        <input type='email' placeholder='Email '  name='email' ></input><br></br><br></br>
        <input type='text' placeholder='Enter your password'   name='Password'></input> <br></br><br></br>
<button id='mmm' type='submit'>SIGN IN</button> <br></br> <br></br>
</form>
<a id='atag' href=''>Forgot your password ?</a> <br></br> <br></br>
<p id='nc'>Don’t have an account?</p>
<a id='aa' href='./Sing'>Create an account</a>



    </div>
    </div>
   
    );
  };
  
  export default user;