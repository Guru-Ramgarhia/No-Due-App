import React from 'react'
import './Login.css'
import due from "./image/due.jpg";
import cutm from "./image/cutm.png"

function Login() {
  return (
    <div>
      <div className='main'>
        <div className='tittle'>
        <img src={cutm} alt="cutm" className='cutm'/>
          <h1><i><u>Online</u></i></h1>
          <h2><i><u>No Due</u></i></h2>
        </div>
        <div className='sub'>
          <div className='due_b'>
            <img src={due} alt="due" className='due'/>
          </div>
          <div className='info'>
          <input type="text" placeholder="Username" className="name"/><br></br>
          <input type="password" placeholder="Password" className="pass"/>
            <div className='login_button'>
            <button>Login</button>

            {/* <p className='link'>
              <a href='#'>Forgot Password  </a>Or<a href='#'>  Sign in</a>
            </p> */}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;