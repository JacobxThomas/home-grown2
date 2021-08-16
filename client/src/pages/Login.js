import React from 'react';


function Login() {
  return (
    <div id = "login-container" >
      <h2>Login</h2>
        <form>
          <div>
            <label for="email">Email:</label>
            <input class="form-input" type="text" id="email" />
            </div>
            <div>
            <label for="password">Password:</label>
            <input type="password" id="password" />
            </div>
    </form>

    <button id="log-in-button">Log in</button>
        
    </div>
  );
}

export default Login;