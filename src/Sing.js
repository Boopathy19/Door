import './sing.css';

const Sing = () => {
    return(<>
    <div className=' allsing'>
    
    <div className='sing'>
    
    <h1>Create an account</h1>
    <p>Enter your information below to proceed. If you already have an account, please log in instead.</p>
    <input type=' text' placeholder='First Name'></input> <br></br><br></br>
    <input type=' text' placeholder='Last Name'></input> <br></br><br></br>
    <input type='email' placeholder='Enter your email'></input> <br></br><br></br>
    <input type=' text' placeholder='Password'></input> <br></br><br></br>
    <button>CREATE IN ACCOUND</button> <br></br><br></br><br></br>
    <p id='al'>Already have an account?</p>
    <a id='ata' href='./User'>Login</a>
    
    

    
    </div>
    </div>
    </>)
  };
  
  export default Sing;