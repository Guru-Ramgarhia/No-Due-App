import React from 'react'
import './Form.css'
import cutm from "./image/cutm.png"

function Form() {
  return (
    
      <div className='main'>
         <div className='tittle'>
            <img src={cutm} alt="cutm" className='cutm'/>
            <h1><i><u>Online</u></i></h1>
            <h2><i><u>No Due</u></i></h2>
         </div>
         <div className='sub2'>
         <div className='menu2'>
            <h3><u>Menu</u></h3>
            <div className='button'>
            <button>Profile</button>
            <button>Apply No Due</button>
            <button>Logout</button>
            </div>
               <div className='form'>
               <h3><u>Apply No Due</u></h3>
                <h4>Name:</h4>
                <h4>Mobile:</h4>
                <h4>Regd No:</h4>
                <h4>Program:</h4>
                <h4>Batch:</h4>
                <h4>Father's Name:</h4>
                <h4>Father's Mobile:</h4>
                <h4>Address:<input type="text" placeholder="" className="add"/></h4>
                
                <h4>Apply for:  
                  <select className="drop" id="">
                    <option value="Choose">Choose</option>
                    <option value="TC">TC</option>
                    <option value="CC">CC</option>
                  </select></h4>

                  <h4>Cause:<input type="text" placeholder="" className="cause"/></h4>
                  <h3><u>Application:</u></h3>
                  <h5>To, Pro-VC,</h5>
                  <h5>Sub: <input type="text" placeholder="Application" className="ap"/></h5>
                  <h5>Respected Sir,<input type="text" placeholder="Application" className="ap2"/></h5>


               </div>
          </div>
         </div>
      </div>
    
  )
}

export default Form
