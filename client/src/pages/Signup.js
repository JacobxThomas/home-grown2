import React from 'react';


function Signup() {
  return (
    <div id = "signup-container" >
      <h2>Sign up</h2>
        <form>
          <div>
            <label for="name">Name:</label>
            <input class="form-input" type="text" id="name" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input class="form-input" type="text" id="email" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div>
            <label for="location">Location:</label>
            <input type="password" id="location" />
          </div>
    </form>

    <button id="log-in-button">Log in</button>
        
    </div>
  );
}

export default Signup;