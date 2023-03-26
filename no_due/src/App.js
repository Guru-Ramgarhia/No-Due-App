import React from 'react'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import Form from './Form'
import Status from './Status';
import Admin from './Admin';

function App  ()  {
  return (
    <div>
      <Admin/>
    </div>
    

// {/* <>
//         <Router>
          
//           <Routes>
//               <Route exact path='' element={<Login/>} />
//               <Route path='/Profile' element={<Profile/>} />
              
//           </Routes>
//         </Router>
     
// </> */}


//  <BrowserRouter>
//      <Router>
      
//        <Routes>
//            <Route path="/" element={<Login/>}/>
//            <Route path="/Profile" element={<Profile/>}/>
          

//        </Routes>
     
//      </Router>
//      </BrowserRouter> 

  );
}

export default App;
