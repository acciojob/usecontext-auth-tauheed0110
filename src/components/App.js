
import React, { useState, useContext, createContext } from "react";
import './../styles/App.css';

const AuthContext = createContext();

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <AuthContext.Provider value={{toggle, setToggle}}>
        <AuthComponent />
    </AuthContext.Provider>
  )
}

export default App


function AuthComponent(){
  const {toggle, setToggle} = useContext(AuthContext);
  return (
    <div>
      <h1>Click on the checkbox to get  authenticated</h1>
      {
        toggle ? 
        <p>You are now authenticated, you can proceed</p> : 
        <p>you are not authenticated</p>
      }
      
      <input type="checkbox" onClick={()=>{setToggle(!toggle)}}/>I am not a robot
    </div>
  )
}