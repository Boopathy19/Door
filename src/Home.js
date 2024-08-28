import './Home.css';
const Home = () => {
  return (
    <>

   


   <div class="login-container">
    <h2>Login</h2>
    <form action="/login" method="post">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required></input>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
    </>
  )
  
};

export default Home;